/* =========================================================
   i18n.js — كل نصوص الواجهة بالعربية والإنجليزية
   لإضافة لغة: انسخ كتلة 'en' كاملة وترجمها.
   (قوائم الوظائف والدول في data.js)
   ========================================================= */
var I18N = {
  ar: {
    'app.name': 'سيرتي',
    'top.lang': 'English',
    'top.home': 'الرئيسية',

    'home.title': 'سيرتك الذاتية جاهزة في دقائق',
    'home.sub': 'مصممة لسوق العمل في الشرق الأوسط، وتقرؤها أنظمة الفرز الآلي عند الشركات (ATS) بسهولة.',
    'home.f1': 'مجاني', 'home.f2': 'عربي وإنجليزي', 'home.f3': 'متوافق مع ATS', 'home.f4': 'اضغط واختر',
    'home.scratch': 'ابدأ سيرتك من الصفر',
    'home.scratchHint': 'أجب عن أسئلة سهلة بالضغط، ونحن نكتب السيرة.',
    'home.improve': 'عندي سيرة — حسّنها لي',
    'home.improveHint': 'ارفع صورة أو PDF لسيرتك، ونحسّن مهاراتها ونجعلها متوافقة مع ATS.',
    'home.continue': 'أكمل من حيث توقفت',
    'home.reset': 'ابدأ من جديد',
    'home.resetConfirm': 'هل تريد حذف كل إجاباتك والبدء من جديد؟',
    'soon': 'قريباً',

    'start.title': 'من أنت؟',
    'start.hint': 'اختر الأقرب لك، وسنختار لك الأسئلة المناسبة.',
    'profile.graduate': 'حديث التخرج', 'profile.graduate.hint': 'لا خبرة أو خبرة قليلة',
    'profile.experienced': 'صاحب خبرة', 'profile.experienced.hint': 'عملت سنة أو أكثر',
    'profile.licensed': 'صاحب مهنة مرخصة', 'profile.licensed.hint': 'طبيب، مهندس، محاسب، محامٍ، معلم…',
    'profile.craft': 'حِرفي أو فني', 'profile.craft.hint': 'كهربائي، سائق، طاهٍ، فني صيانة…',

    'sec.1': 'أنت وهدفك', 'sec.2': 'التعليم والشهادات', 'sec.3': 'الخبرة والإنجازات', 'sec.4': 'المهارات وشكل السيرة',
    'q.progress': 'سؤال {n} من {total}',
    'btn.next': 'التالي', 'btn.back': 'رجوع', 'btn.skip': 'تخطَّ', 'btn.other': 'أخرى',
    'ph.other': 'اكتب هنا…',
    'err.required': 'هذه الخانة مطلوبة',
    'err.one': 'اكتب اسمك بلغة واحدة على الأقل',
    'err.email': 'البريد الإلكتروني غير صحيح',
    'err.choose': 'اختر خياراً واحداً على الأقل',

    'done.title': 'أحسنت! انتهى النوع الأول',
    'done.sub': 'هذه بداية سيرتك. الأنواع الثلاثة الباقية تأتي في المراحل القادمة.',
    'done.preview': 'معاينة رأس السيرة',
    'done.answers': 'إجاباتك',
    'done.edit': 'تعديل',
    'done.next': 'النوع الثاني: التعليم والشهادات',
    'done.home': 'الرئيسية',
    'cv.photo': 'صورة',
    'cv.nationality': 'الجنسية',
    'cv.available': 'متاح للعمل',
    'cv.target': 'يرغب بالعمل في',

    // ===== أسئلة النوع الأول =====
    'q.name': 'ما اسمك الكامل؟',
    'q.name.hint': 'اكتبه كما في جواز السفر. يكفي بلغة واحدة، والأفضل باللغتين.',
    'f.nameAr': 'الاسم بالعربية', 'ph.nameAr': 'مثال: أحمد محمد العلي',
    'f.nameEn': 'الاسم بالإنجليزية', 'ph.nameEn': 'Example: Ahmed Mohammed Al-Ali',

    'q.field': 'ما مجال الوظيفة التي تبحث عنها؟',
    'q.job': 'ما الوظيفة بالتحديد؟',
    'q.job.hint': 'إذا لم تجد وظيفتك اضغط "أخرى" واكتبها.',
    'q.workCountries': 'في أي دولة تريد العمل؟',
    'q.workCountries.hint': 'يمكنك اختيار أكثر من دولة.',
    'q.nationality': 'ما جنسيتك؟',
    'q.nationality.hint': 'الجنسية مهمة في الخليج بسبب أنظمة التوطين والتأشيرات.',
    'q.residence': 'أين تسكن الآن؟',

    'q.visa': 'ما حالة إقامتك في بلد العمل؟',
    'o.visa.citizen': 'مواطن', 'o.visa.citizen.hint': 'أحمل جنسية البلد',
    'o.visa.transferable': 'مقيم بإقامة قابلة للنقل', 'o.visa.transferable.hint': 'إقامة عمل يمكن نقلها',
    'o.visa.visit': 'تأشيرة زيارة', 'o.visa.visit.hint': 'موجود في البلد مؤقتاً',
    'o.visa.abroad': 'خارج البلد', 'o.visa.abroad.hint': 'أحتاج تأشيرة عمل جديدة',

    'q.start': 'متى تستطيع البدء بالعمل؟',
    'o.start.now': 'فوراً', 'o.start.month': 'خلال شهر', 'o.start.two': 'خلال شهرين', 'o.start.more': 'أكثر من شهرين',

    'q.workType': 'ما نوع العمل الذي تريده؟',
    'o.workType.full': 'دوام كامل', 'o.workType.part': 'دوام جزئي', 'o.workType.remote': 'عن بُعد',
    'o.workType.freelance': 'عمل حر', 'o.workType.intern': 'تدريب',

    'q.photo': 'هل تضع صورة شخصية في سيرتك؟',
    'q.photo.hint': 'الصورة معتادة في الخليج، لكن مواقع التوظيف ذات الفرز الآلي تفضّل السيرة بدون صورة.',
    'o.photo.yes': 'نعم، بصورة', 'o.photo.no': 'لا، بدون صورة',
    'o.photo.both': 'نسختان', 'o.photo.both.hint': 'واحدة بصورة وواحدة بدونها (ننصح بها)',

    'q.personal': 'هل تُظهر تاريخ ميلادك وحالتك الاجتماعية؟',
    'q.personal.hint': 'شائع في السير الخليجية، لكنه اختياري.',
    'o.personal.yes': 'نعم', 'o.personal.no': 'لا',
    'f.birthDate': 'تاريخ الميلاد',
    'f.marital': 'الحالة الاجتماعية', 'o.marital.single': 'أعزب / عزباء', 'o.marital.married': 'متزوج / متزوجة',

    'q.license': 'هل عندك رخصة قيادة؟',
    'o.license.none': 'لا', 'o.license.local': 'محلية', 'o.license.gcc': 'خليجية', 'o.license.intl': 'دولية',

    'q.contact': 'كيف يتواصل معك صاحب العمل؟',
    'f.phone': 'رقم الهاتف (مع رمز الدولة)', 'ph.phone': '+966 5x xxx xxxx',
    'f.email': 'البريد الإلكتروني', 'ph.email': 'name@example.com',

    'q.links': 'هل عندك رابط LinkedIn أو معرض أعمال؟',
    'q.links.hint': 'اختياري — يمكنك التخطي.',
    'f.linkedin': 'رابط LinkedIn', 'ph.linkedin': 'linkedin.com/in/…',
    'f.portfolio': 'معرض أعمال أو موقع', 'ph.portfolio': 'https://…',

    'q.salary': 'هل تذكر الراتب المتوقع؟',
    'o.salary.hide': 'لا أذكره', 'o.salary.negotiable': 'حسب الخبرة / قابل للتفاوض', 'o.salary.amount': 'رقم محدد',
    'f.salaryAmount': 'الراتب المتوقع (مع العملة)', 'ph.salaryAmount': 'مثال: 8,000 ريال شهرياً'
  },

  en: {
    'app.name': 'CV App',
    'top.lang': 'العربية',
    'top.home': 'Home',

    'home.title': 'Your CV, ready in minutes',
    'home.sub': 'Made for the Middle East job market, and easy for company screening systems (ATS) to read.',
    'home.f1': 'Free', 'home.f2': 'Arabic & English', 'home.f3': 'ATS-friendly', 'home.f4': 'Tap to choose',
    'home.scratch': 'Start your CV from scratch',
    'home.scratchHint': 'Answer easy tap questions, and we write the CV.',
    'home.improve': 'I have a CV — improve it',
    'home.improveHint': 'Upload a photo or PDF of your CV; we improve its skills and make it ATS-friendly.',
    'home.continue': 'Continue where you left off',
    'home.reset': 'Start over',
    'home.resetConfirm': 'Delete all your answers and start over?',
    'soon': 'Soon',

    'start.title': 'Who are you?',
    'start.hint': 'Pick the closest one, and we will choose the right questions for you.',
    'profile.graduate': 'Fresh graduate', 'profile.graduate.hint': 'No or little experience',
    'profile.experienced': 'Experienced', 'profile.experienced.hint': 'One year of work or more',
    'profile.licensed': 'Licensed professional', 'profile.licensed.hint': 'Doctor, engineer, accountant, lawyer, teacher…',
    'profile.craft': 'Skilled trade / technician', 'profile.craft.hint': 'Electrician, driver, cook, maintenance…',

    'sec.1': 'You & your goal', 'sec.2': 'Education & certificates', 'sec.3': 'Experience & achievements', 'sec.4': 'Skills & CV look',
    'q.progress': 'Question {n} of {total}',
    'btn.next': 'Next', 'btn.back': 'Back', 'btn.skip': 'Skip', 'btn.other': 'Other',
    'ph.other': 'Type here…',
    'err.required': 'This field is required',
    'err.one': 'Write your name in at least one language',
    'err.email': 'This email is not valid',
    'err.choose': 'Choose at least one option',

    'done.title': 'Well done! Part one is finished',
    'done.sub': 'This is the start of your CV. The other three parts come in the next phases.',
    'done.preview': 'CV header preview',
    'done.answers': 'Your answers',
    'done.edit': 'Edit',
    'done.next': 'Part two: Education & certificates',
    'done.home': 'Home',
    'cv.photo': 'Photo',
    'cv.nationality': 'Nationality',
    'cv.available': 'Available',
    'cv.target': 'Seeking work in',

    'q.name': 'What is your full name?',
    'q.name.hint': 'As in your passport. One language is enough; both is better.',
    'f.nameAr': 'Name in Arabic', 'ph.nameAr': 'مثال: أحمد محمد العلي',
    'f.nameEn': 'Name in English', 'ph.nameEn': 'Example: Ahmed Mohammed Al-Ali',

    'q.field': 'Which field are you looking for a job in?',
    'q.job': 'Which job exactly?',
    'q.job.hint': 'Can\'t find yours? Tap "Other" and type it.',
    'q.workCountries': 'Which country do you want to work in?',
    'q.workCountries.hint': 'You can choose more than one.',
    'q.nationality': 'What is your nationality?',
    'q.nationality.hint': 'Nationality matters in the Gulf because of localization and visa rules.',
    'q.residence': 'Where do you live now?',

    'q.visa': 'What is your residency status in the work country?',
    'o.visa.citizen': 'Citizen', 'o.visa.citizen.hint': 'I hold this country\'s nationality',
    'o.visa.transferable': 'Resident, transferable visa', 'o.visa.transferable.hint': 'Work visa that can be transferred',
    'o.visa.visit': 'Visit visa', 'o.visa.visit.hint': 'In the country temporarily',
    'o.visa.abroad': 'Abroad', 'o.visa.abroad.hint': 'I need a new work visa',

    'q.start': 'When can you start?',
    'o.start.now': 'Immediately', 'o.start.month': 'Within a month', 'o.start.two': 'Within two months', 'o.start.more': 'More than two months',

    'q.workType': 'What type of work do you want?',
    'o.workType.full': 'Full-time', 'o.workType.part': 'Part-time', 'o.workType.remote': 'Remote',
    'o.workType.freelance': 'Freelance', 'o.workType.intern': 'Internship',

    'q.photo': 'Do you want a photo on your CV?',
    'q.photo.hint': 'A photo is normal in the Gulf, but job sites with automatic screening prefer a CV without one.',
    'o.photo.yes': 'Yes, with photo', 'o.photo.no': 'No photo',
    'o.photo.both': 'Two versions', 'o.photo.both.hint': 'One with a photo and one without (recommended)',

    'q.personal': 'Show your date of birth and marital status?',
    'q.personal.hint': 'Common on Gulf CVs, but optional.',
    'o.personal.yes': 'Yes', 'o.personal.no': 'No',
    'f.birthDate': 'Date of birth',
    'f.marital': 'Marital status', 'o.marital.single': 'Single', 'o.marital.married': 'Married',

    'q.license': 'Do you have a driving license?',
    'o.license.none': 'No', 'o.license.local': 'Local', 'o.license.gcc': 'GCC', 'o.license.intl': 'International',

    'q.contact': 'How can an employer contact you?',
    'f.phone': 'Phone number (with country code)', 'ph.phone': '+966 5x xxx xxxx',
    'f.email': 'Email', 'ph.email': 'name@example.com',

    'q.links': 'Do you have a LinkedIn or portfolio link?',
    'q.links.hint': 'Optional — you can skip.',
    'f.linkedin': 'LinkedIn link', 'ph.linkedin': 'linkedin.com/in/…',
    'f.portfolio': 'Portfolio or website', 'ph.portfolio': 'https://…',

    'q.salary': 'Mention your expected salary?',
    'o.salary.hide': 'Don\'t mention it', 'o.salary.negotiable': 'Negotiable', 'o.salary.amount': 'A specific amount',
    'f.salaryAmount': 'Expected salary (with currency)', 'ph.salaryAmount': 'Example: SAR 8,000 / month'
  }
};

// t('key') ترجع النص باللغة الحالية؛ {n} تُستبدل بالقيم
function t(key, vars) {
  var s = I18N[state.lang][key];
  if (s === undefined) s = I18N.ar[key];
  if (s === undefined) return '';
  if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
  return s;
}
