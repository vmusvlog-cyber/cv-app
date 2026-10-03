/* =========================================================
   app.js — الحالة، الشاشات، والتنقل (الرابط بعد # في العنوان)
   الشاشات:
     #/             الرئيسية
     #/start        سؤال البداية "من أنت؟"
     #/q/1/0        سؤال رقم 1 من النوع الأول (العدّ يبدأ من 0)
     #/done/1       نهاية النوع الأول + معاينة
   ========================================================= */
var state = { lang: loadLang(), answers: loadAnswers() };

// يحمي النص الذي يكتبه المستخدم قبل وضعه في الصفحة
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function $(sel) { return document.querySelector(sel); }
function go(hash) { location.hash = hash; }

/* ---------- الخيارات والإجابات ---------- */

// يجهّز خيارات السؤال بشكل موحد: {id, label, hint}
function getOptions(q) {
  var raw = typeof q.options === 'function' ? q.options(state.answers) : q.options;
  return raw.map(function (o) {
    if (typeof o === 'string') {
      return { id: o, label: t('o.' + q.id + '.' + o), hint: t('o.' + q.id + '.' + o + '.hint') };
    }
    return { id: o.id, label: o[state.lang] || o.ar, special: o.special };
  });
}

// أجزاء الإجابة كقائمة نصوص (للمعاينة والملخص)
function answerParts(q) {
  var a = state.answers, v = a[q.id], out = [];
  if (q.kind === 'text') {
    q.fields.forEach(function (f) { if (a[f.id]) out.push(a[f.id]); });
    return out;
  }
  var opts = getOptions(q);
  var list = q.kind === 'multi' ? (v || []) : (v ? [v] : []);
  list.forEach(function (id) {
    if (id === 'other') { out.push(a[q.id + '_other'] || ''); return; }
    var o = opts.filter(function (x) { return x.id === id; })[0];
    if (o) out.push(o.label);
  });
  // الخانات الإضافية (مثل تاريخ الميلاد أو مبلغ الراتب)
  if (q.more && q.more[v]) {
    q.more[v].forEach(function (f) {
      var val = a[f.id];
      if (!val) return;
      out.push(f.type === 'choice' ? t('o.' + f.id + '.' + val) : val);
    });
  }
  return out;
}

// الإجابة كنص واحد
function answerText(q) { return answerParts(q).join(state.lang === 'ar' ? '، ' : ', '); }

function findQuestion(id) {
  return SECTIONS[1].filter(function (q) { return q.id === id; })[0];
}

/* ---------- الشريط العلوي ---------- */
function topBar() {
  return '<header class="top">' +
    '<a class="logo" href="#/">' + esc(t('app.name')) + '</a>' +
    '<button class="lang-btn" id="langBtn">' + esc(t('top.lang')) + '</button>' +
    '</header>';
}

/* ---------- الشاشة الرئيسية ---------- */
function renderHome() {
  var a = state.answers;
  var cont = a.profile && a._last
    ? '<div class="continue-row">' +
        '<a class="btn btn-primary" href="' + esc(a._last) + '">' + esc(t('home.continue')) + '</a>' +
        '<button class="btn btn-link" id="resetBtn">' + esc(t('home.reset')) + '</button>' +
      '</div>'
    : '';
  return '<main class="page home">' +
    '<section class="hero">' +
      '<h1>' + esc(t('home.title')) + '</h1>' +
      '<p class="lead">' + esc(t('home.sub')) + '</p>' +
      '<ul class="chips-row">' +
        ['home.f1', 'home.f2', 'home.f3', 'home.f4'].map(function (k) { return '<li>' + esc(t(k)) + '</li>'; }).join('') +
      '</ul>' +
    '</section>' +
    cont +
    '<section class="start-cards">' +
      '<a class="start-card main" href="#/start">' +
        '<span class="sc-title">' + esc(t('home.scratch')) + '</span>' +
        '<span class="sc-hint">' + esc(t('home.scratchHint')) + '</span>' +
        '<span class="sc-arrow">←</span>' +
      '</a>' +
      '<div class="start-card disabled" aria-disabled="true">' +
        '<span class="badge">' + esc(t('soon')) + '</span>' +
        '<span class="sc-title">' + esc(t('home.improve')) + '</span>' +
        '<span class="sc-hint">' + esc(t('home.improveHint')) + '</span>' +
      '</div>' +
    '</section>' +
  '</main>';
}

/* ---------- سؤال البداية: من أنت؟ ---------- */
function renderStart() {
  return '<main class="page">' +
    '<a class="back-link" href="#/">' + esc(t('btn.back')) + '</a>' +
    '<h1 class="q-title">' + esc(t('start.title')) + '</h1>' +
    '<p class="q-hint">' + esc(t('start.hint')) + '</p>' +
    '<div class="profile-grid">' +
      PROFILES.map(function (p) {
        var sel = state.answers.profile === p ? ' selected' : '';
        return '<button class="profile-card p-' + p + sel + '" data-profile="' + p + '">' +
          '<span class="pc-title">' + esc(t('profile.' + p)) + '</span>' +
          '<span class="pc-hint">' + esc(t('profile.' + p + '.hint')) + '</span>' +
        '</button>';
      }).join('') +
    '</div>' +
  '</main>';
}

/* ---------- شاشة السؤال ---------- */
function fieldHtml(f) {
  var val = state.answers[f.id] || '';
  var label = '<label class="f-label" for="f_' + f.id + '">' + esc(t('f.' + f.id)) + '</label>';
  if (f.type === 'choice') {
    return '<div class="field">' + label + '<div class="mini-opts">' +
      f.options.map(function (o) {
        return '<button type="button" class="mini-opt' + (val === o ? ' selected' : '') +
          '" data-choice="' + f.id + '" data-val="' + o + '">' + esc(t('o.' + f.id + '.' + o)) + '</button>';
      }).join('') + '</div></div>';
  }
  return '<div class="field">' + label +
    '<input class="input" id="f_' + f.id + '" data-field="' + f.id + '" type="' + f.type + '"' +
    (f.dir ? ' dir="' + f.dir + '"' : '') +
    ' placeholder="' + esc(t('ph.' + f.id)) + '" value="' + esc(val) + '"></div>';
}

function renderQuestion(sec, idx) {
  var list = SECTIONS[sec], q = list[idx], a = state.answers;
  var pct = Math.round(((idx + 1) / list.length) * 100);
  var body = '';

  if (q.kind === 'text') {
    body = '<div class="fields">' + q.fields.map(fieldHtml).join('') + '</div>';
  } else {
    var opts = getOptions(q);
    var chosen = q.kind === 'multi' ? (a[q.id] || []) : [a[q.id]];
    if (q.other) opts.push({ id: 'other', label: t('btn.other') });
    var many = opts.length > 8 ? ' many' : '';
    body = '<div class="options' + many + '">' + opts.map(function (o) {
      var sel = chosen.indexOf(o.id) >= 0 ? ' selected' : '';
      return '<button type="button" class="opt' + sel + (o.special ? ' special' : '') + '" data-opt="' + esc(o.id) + '">' +
        (q.kind === 'multi' ? '<span class="check"></span>' : '') +
        '<span class="opt-text"><span class="opt-label">' + esc(o.label) + '</span>' +
        (o.hint ? '<span class="opt-hint">' + esc(o.hint) + '</span>' : '') + '</span></button>';
    }).join('') + '</div>';
    // خانة "أخرى"
    if (chosen.indexOf('other') >= 0) {
      body += '<div class="field"><input class="input" id="otherInput" data-field="' + q.id + '_other" placeholder="' +
        esc(t('ph.other')) + '" value="' + esc(a[q.id + '_other'] || '') + '"></div>';
    }
    // الخانات الإضافية للخيار المختار
    if (q.more && q.more[a[q.id]]) {
      body += '<div class="fields more">' + q.more[a[q.id]].map(fieldHtml).join('') + '</div>';
    }
  }

  var hint = t('q.' + q.id + '.hint');
  return '<main class="page">' +
    '<div class="q-head">' +
      '<span class="sec-chip">' + sec + ' · ' + esc(t('sec.' + sec)) + '</span>' +
      '<span class="q-count">' + esc(t('q.progress', { n: idx + 1, total: list.length })) + '</span>' +
    '</div>' +
    '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
    '<h1 class="q-title">' + esc(t('q.' + q.id)) + '</h1>' +
    (hint ? '<p class="q-hint">' + esc(hint) + '</p>' : '') +
    body +
    '<p class="error" id="err" role="alert"></p>' +
    '<div class="q-nav">' +
      '<button class="btn btn-ghost" id="backBtn">' + esc(t('btn.back')) + '</button>' +
      (q.optional ? '<button class="btn btn-link" id="skipBtn">' + esc(t('btn.skip')) + '</button>' : '') +
      '<button class="btn btn-primary" id="nextBtn">' + esc(t('btn.next')) + '</button>' +
    '</div>' +
  '</main>';
}

// هل يحتاج الخيار المختار خانات إضافية (أخرى، أو more)؟
function needsMore(q, id) {
  return id === 'other' || !!(q.more && q.more[id]);
}

// التحقق من إجابة السؤال قبل الانتقال؛ يرجع نص الخطأ أو ''
function validate(q) {
  var a = state.answers;
  function empty(id) { return !String(a[id] || '').trim(); }
  function checkFields(fields) {
    var ones = fields.filter(function (f) { return f.required === 'one'; });
    if (ones.length && ones.every(function (f) { return empty(f.id); })) return t('err.one');
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (f.required === true && empty(f.id)) return t('err.required');
      if (f.type === 'email' && !empty(f.id) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a[f.id].trim())) return t('err.email');
    }
    return '';
  }
  if (q.kind === 'text') return q.optional ? '' : checkFields(q.fields);
  var v = a[q.id];
  if (q.kind === 'multi') {
    if (!v || !v.length) return q.optional ? '' : t('err.choose');
    if (v.indexOf('other') >= 0 && empty(q.id + '_other')) return t('err.required');
    return '';
  }
  if (!v) return q.optional ? '' : t('err.choose');
  if (v === 'other' && empty(q.id + '_other')) return t('err.required');
  if (q.more && q.more[v]) return checkFields(q.more[v]);
  return '';
}

function nextQuestion(sec, idx) {
  if (idx + 1 < SECTIONS[sec].length) go('#/q/' + sec + '/' + (idx + 1));
  else go('#/done/' + sec);
}

/* ---------- نهاية النوع + معاينة رأس السيرة ---------- */
function renderDone(sec) {
  var a = state.answers;
  var name = state.lang === 'en' ? (a.nameEn || a.nameAr) : (a.nameAr || a.nameEn);
  var job = answerText(findQuestion('job'));
  var contact = [a.phone, a.email, a.linkedin, a.portfolio].filter(Boolean);
  var details = [];
  if (a.nationality) details.push(t('cv.nationality') + ': ' + answerText(findQuestion('nationality')));
  if (a.residence) details.push(answerText(findQuestion('residence')));
  if (a.visa) details.push(answerText(findQuestion('visa')));
  if (a.start) details.push(t('cv.available') + ': ' + answerText(findQuestion('start')));
  if (a.workCountries && a.workCountries.length) details.push(t('cv.target') + ': ' + answerText(findQuestion('workCountries')));
  var showPhoto = a.photo && a.photo !== 'no';

  var rows = SECTIONS[sec].map(function (q, i) {
    // <bdi> يمنع اختلاط العربي والإنجليزي والأرقام في سطر واحد
    var parts = answerParts(q).map(function (x) { return '<bdi>' + esc(x) + '</bdi>'; });
    return '<li><span class="ans-q">' + esc(t('q.' + q.id)) + '</span>' +
      '<span class="ans-a">' + (parts.length ? parts.join(' · ') : '—') + '</span>' +
      '<a class="ans-edit" href="#/q/' + sec + '/' + i + '">' + esc(t('done.edit')) + '</a></li>';
  }).join('');

  return '<main class="page">' +
    '<h1 class="q-title">' + esc(t('done.title')) + '</h1>' +
    '<p class="q-hint">' + esc(t('done.sub')) + '</p>' +
    '<h2 class="sub-title">' + esc(t('done.preview')) + '</h2>' +
    '<div class="cv-preview">' +
      '<div class="cv-head">' +
        (showPhoto ? '<div class="cv-photo">' + esc(t('cv.photo')) + '</div>' : '') +
        '<div class="cv-id">' +
          '<div class="cv-name">' + esc(name || '') + '</div>' +
          '<div class="cv-job">' + esc(job) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="cv-contact" dir="ltr">' + contact.map(esc).join(' | ') + '</div>' +
      '<div class="cv-details">' + details.map(function (x) { return '<bdi>' + esc(x) + '</bdi>'; }).join(' · ') + '</div>' +
    '</div>' +
    '<h2 class="sub-title">' + esc(t('done.answers')) + '</h2>' +
    '<ul class="answers">' + rows + '</ul>' +
    '<div class="q-nav">' +
      '<a class="btn btn-ghost" href="#/">' + esc(t('done.home')) + '</a>' +
      '<button class="btn btn-primary" disabled>' + esc(t('done.next')) + ' · ' + esc(t('soon')) + '</button>' +
    '</div>' +
  '</main>';
}

/* ---------- الرسم والتنقل ---------- */
function render() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('app.name');

  var hash = location.hash || '#/';
  var parts = hash.replace(/^#\/?/, '').split('/');
  var html, route = parts[0];

  // بدون "من أنت؟" لا نعرض الأسئلة
  if ((route === 'q' || route === 'done') && !state.answers.profile) { go('#/start'); return; }

  if (route === 'start') html = renderStart();
  else if (route === 'q') {
    var sec = +parts[1], idx = +parts[2];
    if (!SECTIONS[sec] || !SECTIONS[sec][idx]) { go('#/q/1/0'); return; }
    // سؤال الوظيفة يحتاج المجال أولاً
    if (SECTIONS[sec][idx].id === 'job' && !state.answers.field) { go('#/q/1/1'); return; }
    html = renderQuestion(sec, idx);
  }
  else if (route === 'done') html = renderDone(+parts[1] || 1);
  else html = renderHome();

  // نتذكر آخر مكان ليظهر زر "أكمل من حيث توقفت"
  if (route === 'q' || route === 'done') { state.answers._last = hash; saveAnswers(); }

  $('#app').innerHTML = topBar() + html;
  window.scrollTo(0, 0);
  bind(route, parts);
}

// ربط الأزرار بعد كل رسم
function bind(route, parts) {
  $('#langBtn').onclick = function () {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    saveLang();
    render();
  };

  var reset = $('#resetBtn');
  if (reset) reset.onclick = function () {
    if (!confirm(t('home.resetConfirm'))) return;
    state.answers = {};
    saveAnswers();
    render();
  };

  if (route === 'start') {
    document.querySelectorAll('[data-profile]').forEach(function (b) {
      b.onclick = function () {
        var p = b.getAttribute('data-profile');
        if (state.answers.profile !== p) { state.answers.showAllFields = false; }
        state.answers.profile = p;
        saveAnswers();
        go('#/q/1/0');
      };
    });
  }

  if (route === 'q') bindQuestion(+parts[1], +parts[2]);
}

function bindQuestion(sec, idx) {
  var q = SECTIONS[sec][idx], a = state.answers;
  var err = $('#err');

  // الكتابة في أي خانة تُحفظ فوراً
  document.querySelectorAll('[data-field]').forEach(function (inp) {
    inp.oninput = function () { a[inp.getAttribute('data-field')] = inp.value; saveAnswers(); err.textContent = ''; };
  });

  // أزرار الاختيار الصغيرة داخل الخانات الإضافية
  document.querySelectorAll('[data-choice]').forEach(function (b) {
    b.onclick = function () { a[b.getAttribute('data-choice')] = b.getAttribute('data-val'); saveAnswers(); render(); };
  });

  // الخيارات الرئيسية
  document.querySelectorAll('[data-opt]').forEach(function (b) {
    b.onclick = function () {
      var id = b.getAttribute('data-opt');
      if (id === '__all') { a.showAllFields = true; saveAnswers(); render(); return; }

      if (q.kind === 'multi') {
        var list = (a[q.id] || []).slice();
        var at = list.indexOf(id);
        if (at >= 0) list.splice(at, 1); else list.push(id);
        a[q.id] = list;
        saveAnswers();
        render();
        if (id === 'other' && at < 0) focusFirst();
        return;
      }

      // اختيار واحد
      if (q.id === 'field' && a.field !== id) { delete a.job; delete a.job_other; }
      a[q.id] = id;
      saveAnswers();
      if (needsMore(q, id)) { render(); focusFirst(); }
      else nextQuestion(sec, idx);
    };
  });

  $('#backBtn').onclick = function () {
    if (idx > 0) go('#/q/' + sec + '/' + (idx - 1)); else go('#/start');
  };
  var skip = $('#skipBtn');
  if (skip) skip.onclick = function () { nextQuestion(sec, idx); };
  $('#nextBtn').onclick = function () {
    var msg = validate(q);
    if (msg) { err.textContent = msg; return; }
    nextQuestion(sec, idx);
  };
  // زر Enter في الخانات = التالي
  document.querySelectorAll('input.input').forEach(function (inp) {
    inp.onkeydown = function (e) { if (e.key === 'Enter') $('#nextBtn').click(); };
  });
}

function focusFirst() {
  var el = document.querySelector('.fields.more input, #otherInput');
  if (el) el.focus();
}

window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
