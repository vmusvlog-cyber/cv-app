/* =========================================================
   data.js — القوائم الكبيرة: أنواع الأشخاص، المجالات والوظائف، الدول
   كل عنصر فيه الاسم بالعربية (ar) وبالإنجليزية (en) جنباً إلى جنب.
   المصدر: التصنيف السعودي الموحد للمهن (ISCO-08) ومسوح سوق العمل
   (التفاصيل والروابط في docs/research.md)
   ========================================================= */

// أنواع الأشخاص (سؤال البداية "من أنت؟")
var PROFILES = ['graduate', 'experienced', 'licensed', 'craft'];

// المجالات، ولكل مجال قائمة وظائف
var FIELDS = [
  { id: 'admin', ar: 'إدارة وأعمال', en: 'Management & Business', jobs: [
    ['مدير عام', 'General Manager'], ['مدير عمليات', 'Operations Manager'],
    ['مدير مشاريع', 'Project Manager'], ['مدير مكتب', 'Office Manager'],
    ['مساعد إداري', 'Administrative Assistant'], ['سكرتير تنفيذي', 'Executive Secretary'],
    ['مدخل بيانات', 'Data Entry Clerk'], ['أخصائي مشتريات', 'Procurement Specialist']
  ]},
  { id: 'hr', ar: 'موارد بشرية', en: 'Human Resources', jobs: [
    ['مدير موارد بشرية', 'HR Manager'], ['أخصائي موارد بشرية', 'HR Specialist'],
    ['أخصائي توظيف', 'Recruiter'], ['أخصائي رواتب', 'Payroll Specialist'],
    ['منسق تدريب', 'Training Coordinator'], ['مسؤول علاقات حكومية', 'Government Relations Officer (PRO)']
  ]},
  { id: 'finance', ar: 'محاسبة ومالية', en: 'Accounting & Finance', jobs: [
    ['محاسب', 'Accountant'], ['محاسب أول', 'Senior Accountant'],
    ['محلل مالي', 'Financial Analyst'], ['مدقق حسابات', 'Auditor'],
    ['مدير مالي', 'Finance Manager'], ['أخصائي ضرائب وزكاة', 'Tax & Zakat Specialist'],
    ['موظف بنك', 'Bank Officer'], ['أمين صندوق', 'Cashier']
  ]},
  { id: 'sales', ar: 'مبيعات وتسويق', en: 'Sales & Marketing', jobs: [
    ['مندوب مبيعات', 'Sales Representative'], ['مدير مبيعات', 'Sales Manager'],
    ['أخصائي تسويق', 'Marketing Specialist'], ['أخصائي تسويق رقمي', 'Digital Marketing Specialist'],
    ['أخصائي وسائل تواصل', 'Social Media Specialist'], ['مدير تطوير أعمال', 'Business Development Manager'],
    ['بائع في متجر', 'Retail Sales Associate'], ['وسيط عقاري', 'Real Estate Agent']
  ]},
  { id: 'tech', ar: 'تقنية وبرمجة', en: 'Technology & IT', jobs: [
    ['مطور برمجيات', 'Software Developer'], ['مطور مواقع', 'Web Developer'],
    ['محلل بيانات', 'Data Analyst'], ['أخصائي أمن سيبراني', 'Cybersecurity Specialist'],
    ['فني دعم تقني', 'IT Support Technician'], ['مهندس شبكات', 'Network Engineer'],
    ['مهندس سحابة', 'Cloud Engineer'], ['مهندس ذكاء اصطناعي', 'AI / Machine Learning Engineer'],
    ['مصمم واجهات وتجربة مستخدم', 'UI/UX Designer']
  ]},
  { id: 'engineering', ar: 'هندسة', en: 'Engineering', jobs: [
    ['مهندس مدني', 'Civil Engineer'], ['مهندس ميكانيكي', 'Mechanical Engineer'],
    ['مهندس كهربائي', 'Electrical Engineer'], ['مهندس معماري', 'Architect'],
    ['مهندس بترول وكيمياء', 'Petroleum / Chemical Engineer'], ['مهندس صناعي', 'Industrial Engineer'],
    ['مهندس موقع', 'Site Engineer'], ['مساح كميات', 'Quantity Surveyor'],
    ['مسؤول سلامة وصحة مهنية', 'HSE Officer']
  ]},
  { id: 'health', ar: 'صحة وطب', en: 'Healthcare', jobs: [
    ['طبيب عام', 'General Practitioner'], ['طبيب أخصائي', 'Specialist Doctor'],
    ['ممرض / ممرضة', 'Nurse'], ['صيدلي', 'Pharmacist'], ['طبيب أسنان', 'Dentist'],
    ['فني مختبر', 'Laboratory Technician'], ['فني أشعة', 'Radiographer'],
    ['أخصائي علاج طبيعي', 'Physiotherapist'], ['موظف استقبال طبي', 'Medical Receptionist']
  ]},
  { id: 'education', ar: 'تعليم وتدريب', en: 'Education & Training', jobs: [
    ['معلم', 'Teacher'], ['معلمة رياض أطفال', 'Kindergarten Teacher'],
    ['محاضر جامعي', 'University Lecturer'], ['مدرب', 'Trainer'],
    ['معلم تربية خاصة', 'Special Education Teacher'], ['إداري مدرسة', 'School Administrator'],
    ['مدرس خصوصي', 'Private Tutor']
  ]},
  { id: 'hospitality', ar: 'ضيافة وسياحة وفعاليات', en: 'Hospitality, Tourism & Events', jobs: [
    ['موظف استقبال فندق', 'Hotel Receptionist'], ['شيف', 'Chef'], ['طباخ', 'Cook'],
    ['نادل', 'Waiter / Waitress'], ['باريستا', 'Barista'], ['مرشد سياحي', 'Tour Guide'],
    ['منسق فعاليات', 'Event Coordinator'], ['مشرف تدبير فندقي', 'Housekeeping Supervisor']
  ]},
  { id: 'crafts', ar: 'حِرف وصيانة', en: 'Skilled Trades & Maintenance', jobs: [
    ['كهربائي', 'Electrician'], ['سبّاك', 'Plumber'], ['نجار', 'Carpenter'],
    ['لحّام', 'Welder'], ['ميكانيكي سيارات', 'Car Mechanic'], ['فني تكييف وتبريد', 'HVAC Technician'],
    ['دهّان', 'Painter'], ['بنّاء', 'Mason'], ['فني صيانة عامة', 'Maintenance Technician']
  ]},
  { id: 'transport', ar: 'نقل ولوجستيات', en: 'Transport & Logistics', jobs: [
    ['سائق', 'Driver'], ['سائق شاحنة ثقيلة', 'Heavy Truck Driver'],
    ['مندوب توصيل', 'Delivery Driver'], ['مشغل رافعة شوكية', 'Forklift Operator'],
    ['أمين مستودع', 'Warehouse Keeper'], ['منسق لوجستيات', 'Logistics Coordinator'],
    ['أخصائي سلاسل إمداد', 'Supply Chain Specialist']
  ]},
  { id: 'service', ar: 'خدمة عملاء وأمن', en: 'Customer Service & Security', jobs: [
    ['موظف خدمة عملاء', 'Customer Service Representative'], ['موظف مركز اتصال', 'Call Center Agent'],
    ['موظف استقبال', 'Receptionist'], ['حارس أمن', 'Security Guard'], ['مشرف أمن', 'Security Supervisor']
  ]},
  { id: 'law', ar: 'قانون', en: 'Legal', jobs: [
    ['محامٍ', 'Lawyer'], ['مستشار قانوني', 'Legal Advisor'],
    ['باحث قانوني', 'Legal Researcher'], ['مساعد قانوني', 'Paralegal']
  ]},
  { id: 'media', ar: 'إعلام وتصميم', en: 'Media & Design', jobs: [
    ['مصمم جرافيك', 'Graphic Designer'], ['صانع محتوى', 'Content Creator'],
    ['مونتير فيديو', 'Video Editor'], ['مصور', 'Photographer'], ['صحفي', 'Journalist'],
    ['مترجم', 'Translator'], ['كاتب إعلاني', 'Copywriter']
  ]}
];

// المجالات التي تظهر أولاً لكل نوع شخص (والباقي خلف "كل المجالات")
var PROFILE_FIELDS = {
  graduate: null,     // null = كل المجالات
  experienced: null,
  licensed: ['health', 'engineering', 'finance', 'law', 'education'],
  craft: ['crafts', 'transport', 'hospitality', 'service']
};

// الدول: الاسم + الجنسية بالعربية والإنجليزية
var COUNTRIES = [
  { id: 'sa', ar: 'السعودية', en: 'Saudi Arabia', nAr: 'سعودي', nEn: 'Saudi' },
  { id: 'ae', ar: 'الإمارات', en: 'UAE', nAr: 'إماراتي', nEn: 'Emirati' },
  { id: 'qa', ar: 'قطر', en: 'Qatar', nAr: 'قطري', nEn: 'Qatari' },
  { id: 'kw', ar: 'الكويت', en: 'Kuwait', nAr: 'كويتي', nEn: 'Kuwaiti' },
  { id: 'bh', ar: 'البحرين', en: 'Bahrain', nAr: 'بحريني', nEn: 'Bahraini' },
  { id: 'om', ar: 'عُمان', en: 'Oman', nAr: 'عُماني', nEn: 'Omani' },
  { id: 'eg', ar: 'مصر', en: 'Egypt', nAr: 'مصري', nEn: 'Egyptian' },
  { id: 'jo', ar: 'الأردن', en: 'Jordan', nAr: 'أردني', nEn: 'Jordanian' },
  { id: 'iq', ar: 'العراق', en: 'Iraq', nAr: 'عراقي', nEn: 'Iraqi' },
  { id: 'sy', ar: 'سوريا', en: 'Syria', nAr: 'سوري', nEn: 'Syrian' },
  { id: 'lb', ar: 'لبنان', en: 'Lebanon', nAr: 'لبناني', nEn: 'Lebanese' },
  { id: 'ps', ar: 'فلسطين', en: 'Palestine', nAr: 'فلسطيني', nEn: 'Palestinian' },
  { id: 'ye', ar: 'اليمن', en: 'Yemen', nAr: 'يمني', nEn: 'Yemeni' },
  { id: 'sd', ar: 'السودان', en: 'Sudan', nAr: 'سوداني', nEn: 'Sudanese' },
  { id: 'ma', ar: 'المغرب', en: 'Morocco', nAr: 'مغربي', nEn: 'Moroccan' },
  { id: 'dz', ar: 'الجزائر', en: 'Algeria', nAr: 'جزائري', nEn: 'Algerian' },
  { id: 'tn', ar: 'تونس', en: 'Tunisia', nAr: 'تونسي', nEn: 'Tunisian' },
  { id: 'in', ar: 'الهند', en: 'India', nAr: 'هندي', nEn: 'Indian' },
  { id: 'pk', ar: 'باكستان', en: 'Pakistan', nAr: 'باكستاني', nEn: 'Pakistani' },
  { id: 'ph', ar: 'الفلبين', en: 'Philippines', nAr: 'فلبيني', nEn: 'Filipino' }
];

// دول العمل الأكثر طلباً (تظهر في سؤال "أين تريد العمل؟")
var WORK_COUNTRIES = ['sa', 'ae', 'qa', 'kw', 'bh', 'om', 'eg', 'jo', 'iq', 'ma', 'lb'];
