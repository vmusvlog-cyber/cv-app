/* =========================================================
   storage.js — حفظ الإجابات واللغة في متصفح المستخدم (localStorage)
   لا شيء يُرسل إلى أي خادم في هذه المرحلة.
   ========================================================= */
var STORE_KEY = 'cvapp.answers';
var LANG_KEY = 'cvapp.lang';

function loadAnswers() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveAnswers() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state.answers)); } catch (e) { /* وضع التصفح الخاص */ }
}

function loadLang() {
  try { return localStorage.getItem(LANG_KEY) || 'ar'; } catch (e) { return 'ar'; }
}

function saveLang() {
  try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) { /* تجاهل */ }
}
