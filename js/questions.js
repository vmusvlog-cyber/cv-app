/* =========================================================
   questions.js — تعريف أسئلة كل نوع (القسم)
   نصوص الأسئلة والخيارات موجودة في i18n.js بالمفتاح:
     'q.<id>'         نص السؤال
     'q.<id>.hint'    سطر شرح صغير (اختياري)
     'o.<id>.<opt>'   نص الخيار
   أنواع الأسئلة:
     single = اختيار واحد (الضغط ينقلك للسؤال التالي)
     multi  = أكثر من اختيار ثم "التالي"
     text   = خانات كتابة
   خصائص إضافية:
     other: true      يضيف خيار "أخرى" مع خانة كتابة
     more: {opt: [خانات]}  خانات تظهر فقط عند اختيار خيار معين
     optional: true   يمكن تخطي السؤال
   ========================================================= */

// يحوّل قائمة الدول إلى خيارات (اسم الدولة)
function countryOptions(ids) {
  return ids.map(function (id) {
    var c = COUNTRIES.filter(function (x) { return x.id === id; })[0];
    return { id: id, ar: c.ar, en: c.en };
  });
}

// خيارات المجال حسب نوع الشخص (+ زر "كل المجالات")
function fieldOptions(a) {
  var only = PROFILE_FIELDS[a.profile];
  var showAll = !only || a.showAllFields;
  var list = FIELDS.filter(function (f) { return showAll || only.indexOf(f.id) >= 0; });
  var opts = list.map(function (f) { return { id: f.id, ar: f.ar, en: f.en }; });
  if (!showAll) opts.push({ id: '__all', ar: 'كل المجالات…', en: 'All fields…', special: true });
  return opts;
}

// خيارات الوظيفة حسب المجال الذي اختاره
function jobOptions(a) {
  var f = FIELDS.filter(function (x) { return x.id === a.field; })[0];
  if (!f) return [];
  return f.jobs.map(function (j, i) { return { id: f.id + '_' + i, ar: j[0], en: j[1] }; });
}

var SECTIONS = {
  // النوع الأول: أنت وهدفك
  1: [
    { id: 'name', kind: 'text', fields: [
      { id: 'nameAr', type: 'text', dir: 'rtl', required: 'one' },
      { id: 'nameEn', type: 'text', dir: 'ltr', required: 'one' }
    ]},
    { id: 'field', kind: 'single', options: fieldOptions },
    { id: 'job', kind: 'single', options: jobOptions, other: true },
    { id: 'workCountries', kind: 'multi',
      options: function () { return countryOptions(WORK_COUNTRIES); }, other: true },
    { id: 'nationality', kind: 'single', other: true,
      options: function () {
        return COUNTRIES.map(function (c) { return { id: c.id, ar: c.nAr, en: c.nEn }; });
      }},
    { id: 'residence', kind: 'single', other: true,
      options: function () { return countryOptions(COUNTRIES.map(function (c) { return c.id; })); } },
    { id: 'visa', kind: 'single', options: ['citizen', 'transferable', 'visit', 'abroad'] },
    { id: 'start', kind: 'single', options: ['now', 'month', 'two', 'more'] },
    { id: 'workType', kind: 'single', options: ['full', 'part', 'remote', 'freelance', 'intern'] },
    { id: 'photo', kind: 'single', options: ['yes', 'no', 'both'] },
    { id: 'personal', kind: 'single', options: ['yes', 'no'],
      more: { yes: [
        { id: 'birthDate', type: 'date', required: true },
        { id: 'marital', type: 'choice', options: ['single', 'married'], required: true }
      ]}},
    { id: 'license', kind: 'single', options: ['none', 'local', 'gcc', 'intl'] },
    { id: 'contact', kind: 'text', fields: [
      { id: 'phone', type: 'tel', dir: 'ltr', required: true },
      { id: 'email', type: 'email', dir: 'ltr', required: true }
    ]},
    { id: 'links', kind: 'text', optional: true, fields: [
      { id: 'linkedin', type: 'url', dir: 'ltr' },
      { id: 'portfolio', type: 'url', dir: 'ltr' }
    ]},
    { id: 'salary', kind: 'single', options: ['hide', 'negotiable', 'amount'],
      more: { amount: [ { id: 'salaryAmount', type: 'text', required: true } ] } }
  ]
};

// عدد الأنواع الكلي (الأنواع 2–4 تأتي في المراحل القادمة)
var SECTION_COUNT = 4;
