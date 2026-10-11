/**
 * AL-HUDA-ISLAMIC-RESEARCH
 * Authentic Islamic Knowledge, Research, Guidance & Media Platform
 * "Authentic Islamic Knowledge, Research, Guidance & Media Platform"
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initLanguage();
  initNavigation();
  initQuranExperience();
  initHadithExplorer();
  initArticlesPlatform();
  initArticleAdminPortal();
  initVideoPlatform();
  initCourses();
  initScholarsDirectory();
  initBooksLibrary();
  initResearchPortal();
  initAskScholarForm();
  initDonationsSystem();
  initLiveCountdown();
  initGlobalAudioBar();
  initGlobalSearch();
  initMyListDrawer();
  initAuthModals();
  initModals();
  initGallery();
}

/* ==========================================================================
   1. Multi-Language & RTL Engine (English, Arabic, Urdu)
   ========================================================================== */
const translations = {
  en: {
    tagline: "Authentic Islamic Knowledge, Research, Guidance & Media Platform",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    heroBadge: "Authentic Islamic Knowledge, Research, Guidance & Media Platform",
    heroHeadline: "Discover Knowledge. Strengthen Faith. Find Guidance.",
    heroSubtitle: "Explore authentic Islamic knowledge through Qur’an, Hadith, lectures, research, books, courses and educational resources.",
    exploreBtn: "Explore AL-HUDA-ISLAMIC-RESEARCH",
    watchVideosBtn: "Watch Latest Videos",
    navHome: "Home",
    navQuran: "Qur’an",
    navHadith: "Hadith",
    navArticles: "Articles",
    navVideos: "Videos",
    navCourses: "Courses",
    navBooks: "Books",
    navResearch: "Research",
    navScholars: "Scholars",
    navAsk: "Ask Questions",
    navDonate: "Donations",
    navMedia: "Media Hub",
    navLive: "Live",
    navGallery: "Gallery",
    navAbout: "About",
    loginBtn: "Login",
    joinBtn: "Join Portal",
    featuredTitle: "Featured on AL-HUDA-ISLAMIC-RESEARCH",
    categoriesTitle: "Explore Islamic Knowledge",
    articlesTitle: "Latest Articles",
    watchTitle: "Watch & Learn",
    cinemaTitle: "Featured Lecture",
    coursesTitle: "Learn Islam Step by Step",
    scholarsTitle: "Learn From Trusted Scholars",
    quranTitle: "The Holy Qur’an",
    hadithTitle: "Explore Authentic Hadith",
    booksTitle: "Islamic Books Library",
    researchTitle: "Islamic Research & Knowledge",
    announcementsTitle: "Announcements & Events",
    askTitle: "Ask Questions to Scholars",
    liveTitle: "Live Islamic Sessions"
  },
  ar: {
    tagline: "المعرفة الإسلامية الأصيلة، البحوث والدراسات، الإرشاد والمنصة الإعلامية",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    heroBadge: "منصة الهدى للبحوث الإسلامية والإعلام الهادف",
    heroHeadline: "اكتشف المعرفة. عمّق الإيمان. استنر بالهدى.",
    heroSubtitle: "استكشف كنوز العلوم الشرعية الأصيلة من خلال القرآن الكريم، الحديث النبوي، المحاضرات، البحوث، الكتب، والدورات العلمية المنهجية.",
    exploreBtn: "استكشف المنصة العلمية",
    watchVideosBtn: "شاهد أحدث المحاضرات",
    navHome: "الرئيسية",
    navQuran: "القرآن الكريم",
    navHadith: "الحديث الشريف",
    navArticles: "المقالات",
    navVideos: "المرئيات",
    navCourses: "الدورات",
    navBooks: "المكتبة",
    navResearch: "البحوث",
    navScholars: "العلماء",
    navAsk: "اسأل أهل الذكر",
    navDonate: "التبرعات والصدقات",
    navMedia: "المركز الإعلامي",
    navLive: "البث المباشر",
    navGallery: "معرض الصور",
    navAbout: "عن المنصة",
    loginBtn: "تسجيل الدخول",
    joinBtn: "انضم إلى البوابة",
    featuredTitle: "مختارات الهدى للبحوث الإسلامية",
    categoriesTitle: "استكشف أبواب العلوم الإسلامية",
    articlesTitle: "أحدث المقالات الشرعية",
    watchTitle: "شاهد وتعلم",
    cinemaTitle: "المحاضرة المختارة",
    coursesTitle: "تعلّم الإسلام خطوة بخطوة",
    scholarsTitle: "تعلّم من نخبة العلماء الموثوقين",
    quranTitle: "القرآن الكريم تلاوة وتفسيراً",
    hadithTitle: "استكشف صحيح الحديث النبوي",
    booksTitle: "مكتبة الكتب الإسلامية",
    researchTitle: "البحوث والدراسات الإسلامية",
    announcementsTitle: "الإعلانات والمستجدات",
    askTitle: "اسأل أهل الذكر",
    liveTitle: "المجالس والبث المباشر"
  },
  ur: {
    tagline: "مستند اسلامی علوم، تحقیق، رہنمائی اور میڈیا پلیٹ فارم",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    heroBadge: "الہدٰی اسلامک ریسرچ — مستند علمی و میڈیا پلیٹ فارم",
    heroHeadline: "علم حاصل کریں۔ ایمان مضبوط کریں۔ ہدایت پائیں۔",
    heroSubtitle: "قرآن، حدیث، خطبات، تحقیقی مقالات، کتب اور منظم کورسز کے ذریعے مستند اسلامی علوم تک رسائی حاصل کریں۔",
    exploreBtn: "الہدٰی اسلامک ریسرچ کا جائزہ لیں",
    watchVideosBtn: "تازہ ترین ویڈیوز دیکھیں",
    navHome: "صفحہ اول",
    navQuran: "قرآن پاک",
    navHadith: "حدیث شریف",
    navArticles: "مضامین",
    navVideos: "ویڈیوز",
    navCourses: "کورسز",
    navBooks: "کتب خانہ",
    navResearch: "تحقیقات",
    navScholars: "علمائے کرام",
    navAsk: "سوالات پوچھیں",
    navDonate: "عطیات و صدقات",
    navMedia: "میڈیا ہب",
    navLive: "براہِ راست",
    navGallery: "تصویری گیلری",
    navAbout: "ہمارے بارے میں",
    loginBtn: "لاگ ان",
    joinBtn: "پورٹل میں شامل ہوں",
    featuredTitle: "الہدٰی اسلامک ریسرچ کے خاص مضامین و خطبات",
    categoriesTitle: "اسلامی علوم کے ابواب",
    articlesTitle: "تازہ ترین مضامین",
    watchTitle: "دیکھیں اور سیکھیں",
    cinemaTitle: "منتخب خصوصی خطبہ",
    coursesTitle: "مرحلہ وار اسلام سیکھیں",
    scholarsTitle: "معتبر علمائے کرام سے سیکھیں",
    quranTitle: "قرآن مجید تلاوت و ترجمہ",
    hadithTitle: "مستند احادیث کا خزانہ",
    booksTitle: "اسلامی کتب خانہ",
    researchTitle: "اسلامی تحقیق و مقالات",
    announcementsTitle: "اعلانات و تقاریب",
    askTitle: "علماء سے سوال پوچھیں",
    liveTitle: "براہِ راست دینی نشستیں"
  }
};

let currentLang = localStorage.getItem('alhuda_lang') || 'en';

function initLanguage() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      setLanguage(selected);
      if (langDropdown) langDropdown.classList.remove('show');
    });
  });

  setLanguage(currentLang, false);
}

function setLanguage(lang, showToastMsg = true) {
  currentLang = lang;
  localStorage.setItem('alhuda_lang', lang);

  const html = document.documentElement;
  const isRTL = (lang === 'ar' || lang === 'ur');

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Update button label
  const langLabels = { en: 'English', ar: 'العربية', ur: 'اردو' };
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    currentLangLabel.textContent = langLabels[lang] || 'EN';
  }

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Apply translations to data-i18n elements
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Toggle Urdu translation view in Quran/Hadith if selected
  const quranUrduTexts = document.querySelectorAll('.ayah-translation-ur');
  const quranEnTexts = document.querySelectorAll('.ayah-translation-en');
  if (lang === 'ur') {
    quranUrduTexts.forEach(el => el.style.display = 'block');
    quranEnTexts.forEach(el => el.style.display = 'none');
  } else if (lang === 'ar') {
    quranUrduTexts.forEach(el => el.style.display = 'none');
    quranEnTexts.forEach(el => el.style.display = 'none');
  } else {
    quranUrduTexts.forEach(el => el.style.display = 'none');
    quranEnTexts.forEach(el => el.style.display = 'block');
  }

  if (showToastMsg) {
    showToast(isRTL ? `تم التبديل إلى اللغة: ${langLabels[lang]}` : `Language switched to ${langLabels[lang]}`);
  }
}

/* ==========================================================================
   2. Sticky Header & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.main-header');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileClose = document.getElementById('mobileNavClose');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. Qur'an Experience Data & Interactive Engine
   ========================================================================== */
const quranSurahs = {
  1: {
    number: 1,
    nameEn: "Al-Fatihah (The Opening)",
    nameAr: "سُورَةُ الْفَاتِحَةِ",
    ayahsCount: 7,
    revelation: "Meccan",
    audioSrc: "https://server8.mp3quran.net/afs/001.mp3",
    verses: [
      {
        num: 1,
        ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        ur: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔",
        tafsir: "This verse (Basmalah) sanctifies all deeds in the name of Allah and establishes His supreme mercy."
      },
      {
        num: 2,
        ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        en: "[All] praise is [due] to Allah, Lord of the worlds.",
        ur: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔",
        tafsir: "Praise belongs unconditionally to the Creator, Sustainer, and Cherisher of every realm of existence."
      },
      {
        num: 3,
        ar: "الرَّحْمَٰنِ الرَّحِيمِ",
        en: "The Entirely Merciful, the Especially Merciful.",
        ur: "بڑا مہربان، نہایت رحم فرمانے والا ہے۔",
        tafsir: "Ar-Rahman encompasses universal compassion for all creation; Ar-Raheem denotes specific enduring grace for believers."
      },
      {
        num: 4,
        ar: "مَالِكِ يَوْمِ الدِّينِ",
        en: "Sovereign of the Day of Recompense.",
        ur: "روزِ جزا کا مالک ہے۔",
        tafsir: "Allah alone holds absolute dominion on the Day of Judgment, when all justice is perfectly fulfilled."
      },
      {
        num: 5,
        ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        en: "It is You we worship and You we ask for help.",
        ur: "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں۔",
        tafsir: "The pinnacle of Tawheed: worship and reliance are directed exclusively to the Almighty without intermediary."
      },
      {
        num: 6,
        ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        en: "Guide us to the straight path.",
        ur: "ہمیں سیدھے راستے کی ہدایت فرما۔",
        tafsir: "The ultimate supplication for firmness, wisdom, and moral clarity upon the path revealed through the Prophets."
      },
      {
        num: 7,
        ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        ur: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا جن پر غضب نازل ہوا اور نہ گمراہوں کا۔",
        tafsir: "The blessed path of the righteous, avoiding both willful disobedience and misguided ignorance."
      }
    ]
  },
  2: {
    number: 2,
    nameEn: "Ayat al-Kursi (Surah Al-Baqarah: 255)",
    nameAr: "آيَةُ الْكُرْسِيِّ (الْبَقَرَةُ: ٢٥٥)",
    ayahsCount: 1,
    revelation: "Medinan",
    audioSrc: "https://server8.mp3quran.net/afs/002.mp3",
    verses: [
      {
        num: 255,
        ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that could intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
        ur: "اللہ، جس کے سوا کوئی معبود نہیں، وہ زندہ ہے سب کو سنبھالنے والا۔ نہ اُسے اونگھ آتی ہے نہ نیند۔ جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے اسی کا ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے حضور سفارش کر سکے؟ وہ جانتا ہے جو کچھ ان کے آگے ہے اور جو کچھ ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی آسمانوں اور زمین پر محیط ہے، اور ان کی حفاظت اسے تھکاتی نہیں، اور وہ بلند مرتبہ، عظمت والا ہے۔",
        tafsir: "Regarded as the greatest single ayah in the Holy Qur'an, embodying the transcendent majesty, omnipotence, and singular divinity of Allah."
      }
    ]
  },
  67: {
    number: 67,
    nameEn: "Al-Mulk (The Sovereignty)",
    nameAr: "سُورَةُ الْمُلْكِ",
    ayahsCount: 3,
    revelation: "Meccan",
    audioSrc: "https://server8.mp3quran.net/afs/067.mp3",
    verses: [
      {
        num: 1,
        ar: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        en: "Blessed is He in whose hand is dominion, and He is over all things competent.",
        ur: "بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہی ہے اور وہ ہر چیز پر قادر ہے۔",
        tafsir: "A proclamation of Allah's limitless exaltation and absolute control over all physical and metaphysical realities."
      },
      {
        num: 2,
        ar: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
        en: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving.",
        ur: "جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے اچھے عمل کس کے ہیں، اور وہ زبردست بخشنے والا ہے۔",
        tafsir: "Reveals the profound existential purpose of earthly human life as a noble testing ground for moral rectitude."
      },
      {
        num: 3,
        ar: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
        en: "[And] who created seven heavens in layers. You see no inconsistency in the creation of the Most Merciful. So return [your] vision; do you see any breaks?",
        ur: "جس نے سات آسمان اوپر تلے بنائے۔ تو رحمٰن کی کاریگری میں کوئی نقص نہ دیکھے گا۔ نگاہ دوڑا کر دیکھ کیا تجھے کوئی شگاف نظر آتا ہے؟",
        tafsir: "Challenges the observant intellect to contemplate cosmological harmony as an undeniable proof of divine wisdom."
      }
    ]
  },
  112: {
    number: 112,
    nameEn: "Al-Ikhlas (The Sincerity)",
    nameAr: "سُورَةُ الإِخْلَاصِ",
    ayahsCount: 4,
    revelation: "Meccan",
    audioSrc: "https://server8.mp3quran.net/afs/112.mp3",
    verses: [
      {
        num: 1,
        ar: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        en: "Say, 'He is Allah, [who is] One.'",
        ur: "کہہ دیجئے: وہ اللہ ایک ہے۔",
        tafsir: "Affirmation of absolute, uncompromising monotheism without partner or parallel."
      },
      {
        num: 2,
        ar: "اللَّهُ الصَّمَدُ",
        en: "Allah, the Eternal Refuge.",
        ur: "اللہ بے نیاز ہے (سب کا سہارا ہے)۔",
        tafsir: "As-Samad: Self-sufficient, needing none, while all creation depends eternally upon Him."
      },
      {
        num: 3,
        ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        en: "He neither begets nor is born,",
        ur: "نہ اس نے کسی کو جنا اور نہ وہ جنا گیا،",
        tafsir: "Refutation of all anthropomorphic conceptions of genealogy or descent."
      },
      {
        num: 4,
        ar: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        en: "Nor is there to Him any equivalent.",
        ur: "اور کوئی اس کا ہمسر و برابر نہیں۔",
        tafsir: "Nothing in existence shares resemblance, essence, or sovereign authority with the Creator."
      }
    ]
  }
};

let currentSurahId = 1;
let currentPlayingVerse = null;

function initQuranExperience() {
  const surahSelect = document.getElementById('quranSurahSelect');
  const translationSelect = document.getElementById('quranTranslationSelect');
  const mainPlayBtn = document.getElementById('quranMainPlayBtn');

  if (surahSelect) {
    surahSelect.addEventListener('change', (e) => {
      renderSurah(parseInt(e.target.value));
    });
  }

  if (translationSelect) {
    translationSelect.addEventListener('change', (e) => {
      const mode = e.target.value;
      const urduVerses = document.querySelectorAll('.ayah-translation-ur');
      const enVerses = document.querySelectorAll('.ayah-translation-en');
      if (mode === 'ur') {
        urduVerses.forEach(v => v.style.display = 'block');
        enVerses.forEach(v => v.style.display = 'none');
      } else if (mode === 'ar_only') {
        urduVerses.forEach(v => v.style.display = 'none');
        enVerses.forEach(v => v.style.display = 'none');
      } else {
        urduVerses.forEach(v => v.style.display = 'none');
        enVerses.forEach(v => v.style.display = 'block');
      }
    });
  }

  if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
      const surah = quranSurahs[currentSurahId];
      if (surah) {
        playGlobalTrack({
          title: surah.nameEn,
          reciter: "Sheikh Mishary Rashid Alafasy",
          src: surah.audioSrc,
          icon: "fa-book-quran"
        });
      }
    });
  }

  renderSurah(1);
}

function renderSurah(surahNum) {
  const surah = quranSurahs[surahNum] || quranSurahs[1];
  currentSurahId = surahNum;

  const titleAr = document.getElementById('surahTitleAr');
  const titleEn = document.getElementById('surahTitleEn');
  const countEl = document.getElementById('surahAyahCount');
  const revEl = document.getElementById('surahRevelation');
  const ayahList = document.getElementById('ayahListContainer');

  if (titleAr) titleAr.textContent = surah.nameAr;
  if (titleEn) titleEn.textContent = surah.nameEn;
  if (countEl) countEl.textContent = `${surah.ayahsCount} Ayahs`;
  if (revEl) revEl.textContent = surah.revelation;

  if (ayahList) {
    ayahList.innerHTML = surah.verses.map(v => `
      <div class="ayah-item" id="ayah-${v.num}">
        <div class="ayah-top-actions">
          <div class="ayah-number-badge">${v.num}</div>
          <div class="ayah-quick-tools">
            <button class="ayah-tool-btn" title="Listen Ayah" onclick="listenSingleAyah(${surahNum}, ${v.num})">
              <i class="fa-solid fa-play"></i>
            </button>
            <button class="ayah-tool-btn" title="Bookmark Ayah" onclick="bookmarkContent('ayah', '${surah.nameEn} - Ayah ${v.num}', '${v.en}')">
              <i class="fa-regular fa-bookmark"></i>
            </button>
            <button class="ayah-tool-btn" title="Copy Ayah" onclick="copyVerseText('${v.ar}', '${v.en}', '${surah.nameEn}', ${v.num})">
              <i class="fa-regular fa-copy"></i>
            </button>
            <button class="ayah-tool-btn" title="Read Tafsir" onclick="toggleTafsir(${v.num})">
              <i class="fa-solid fa-book-open"></i>
            </button>
          </div>
        </div>
        <div class="ayah-arabic-text">
          ${v.ar} <span class="ayah-verse-marker">۝</span>
        </div>
        <div class="ayah-translation-en">
          ${v.en}
        </div>
        <div class="ayah-translation-ur">
          ${v.ur}
        </div>
        <div class="ayah-tafsir-content" id="tafsir-${v.num}">
          <strong>Tafsir Insights:</strong> ${v.tafsir}
        </div>
      </div>
    `).join('');
  }
}

window.toggleTafsir = function(ayahNum) {
  const tafsirBox = document.getElementById(`tafsir-${ayahNum}`);
  if (tafsirBox) {
    const isVisible = tafsirBox.style.display === 'block';
    tafsirBox.style.display = isVisible ? 'none' : 'block';
  }
};

window.copyVerseText = function(ar, en, surahName, num) {
  const text = `${ar}\n\n"${en}"\n— [Surah ${surahName}, Ayah ${num}] via Al-Huda`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Ayah ${num} copied to clipboard with citation!`);
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
};

window.listenSingleAyah = function(surahNum, ayahNum) {
  const surah = quranSurahs[surahNum];
  const ayahEl = document.getElementById(`ayah-${ayahNum}`);
  document.querySelectorAll('.ayah-item').forEach(el => el.classList.remove('playing'));
  if (ayahEl) ayahEl.classList.add('playing');

  playGlobalTrack({
    title: `${surah.nameEn} — Ayah ${ayahNum}`,
    reciter: "Sheikh Mishary Rashid Alafasy",
    src: surah.audioSrc,
    icon: "fa-book-quran"
  });
};

/* ==========================================================================
   4. Authentic Hadith Explorer
   ========================================================================== */
const hadithCollectionsData = {
  bukhari: [
    {
      collection: "Sahih al-Bukhari",
      number: 1,
      chapter: "Revelation (Kitab Bad' al-Wahy)",
      grade: "Muttafaqun 'Alayh (Sahih)",
      ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
      en: "Actions are judged by motives, so each person will have only what they intended. Thus, he whose migration was for the world or for a woman to marry, his migration was for what he migrated to.",
      narrator: "Narrated by 'Umar ibn al-Khattab (رضي الله عنه)"
    },
    {
      collection: "Sahih al-Bukhari",
      number: 13,
      chapter: "Belief (Kitab al-Iman)",
      grade: "Sahih",
      ar: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      en: "None of you truly believes until he loves for his brother that which he loves for himself.",
      narrator: "Narrated by Anas ibn Malik (رضي الله عنه)"
    }
  ],
  muslim: [
    {
      collection: "Sahih Muslim",
      number: 8,
      chapter: "Faith & Islam (The Hadith of Jibreel)",
      grade: "Sahih",
      ar: "الإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
      en: "Faith (Iman) is that you believe in Allah, His angels, His revealed Books, His messengers, the Last Day, and that you believe in divine decree—both its good and its apparent adversity.",
      narrator: "Narrated by 'Umar ibn al-Khattab (رضي الله عنه)"
    },
    {
      collection: "Sahih Muslim",
      number: 2564,
      chapter: "Virtue & Good Manners (Al-Birr)",
      grade: "Sahih",
      ar: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
      en: "Verily, Allah does not look at your external appearances or wealth, but He looks at your hearts and your righteous deeds.",
      narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
    }
  ],
  abudawud: [
    {
      collection: "Sunan Abi Dawud",
      number: 4941,
      chapter: "Manners & Merciful Conduct",
      grade: "Sahih (Al-Albani)",
      ar: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      en: "The merciful will be shown mercy by the Most Merciful. Be merciful to those on the earth, and the One in the heavens will show mercy to you.",
      narrator: "Narrated by 'Abdullah ibn 'Amr (رضي الله عنه)"
    }
  ],
  tirmidhi: [
    {
      collection: "Jami` at-Tirmidhi",
      number: 2516,
      chapter: "Description of the Day of Judgment",
      grade: "Hasan Sahih",
      ar: "احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ",
      en: "Be mindful of Allah, and He will protect you. Be mindful of Allah, and you will find Him in front of you. If you ask, ask of Allah; and if you seek help, seek help from Allah.",
      narrator: "Narrated by Ibn 'Abbas (رضي الله عنه)"
    }
  ],
  nawawi40: [
    {
      collection: "An-Nawawi's 40 Hadith",
      number: 2,
      chapter: "The Three Stations: Islam, Iman, and Ihsan",
      grade: "Sahih",
      ar: "قَالَ: فَأَخْبِرْنِي عَنِ الإِحْسَانِ؟ قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
      en: "He (Jibreel) asked: 'Tell me about Ihsan (excellence).' The Prophet ﷺ replied: 'It is to worship Allah as though you see Him; and if you do not see Him, truly He sees you.'",
      narrator: "Narrated by 'Umar ibn al-Khattab (رضي الله عنه)"
    }
  ]
};

let activeHadithCollection = 'bukhari';

function initHadithExplorer() {
  const tabs = document.querySelectorAll('.hadith-tab-btn');
  const searchInput = document.getElementById('hadithSearchInput');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeHadithCollection = e.currentTarget.getAttribute('data-collection');
      renderHadiths();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderHadiths();
    });
  }

  renderHadiths();
}

function renderHadiths() {
  const container = document.getElementById('hadithCardsContainer');
  const searchInput = document.getElementById('hadithSearchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (!container) return;

  let list = hadithCollectionsData[activeHadithCollection] || [];
  if (query) {
    list = list.filter(h => 
      h.en.toLowerCase().includes(query) || 
      h.ar.includes(query) || 
      h.chapter.toLowerCase().includes(query) ||
      h.number.toString().includes(query)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--charcoal-400);">
        <i class="fa-solid fa-scroll" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p>No hadith found matching your search term in this collection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(h => `
    <div class="hadith-card">
      <div class="hadith-header">
        <div>
          <span class="hadith-ref-badge">${h.collection} #${h.number}</span>
          <span style="font-size: 0.8125rem; color: var(--charcoal-400); margin-left: 10px;">${h.chapter}</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <span class="badge badge-gold">${h.grade}</span>
        </div>
      </div>
      <div class="hadith-arabic-text">
        ${h.ar}
      </div>
      <div class="hadith-en-text">
        "${h.en}"
      </div>
      <div class="hadith-footer">
        <div><i class="fa-solid fa-feather" style="color: var(--gold-600); margin-right: 6px;"></i> ${h.narrator}</div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-sm btn-outline" onclick="copyHadithText('${h.collection} #${h.number}', '${h.ar}', '${h.en}', '${h.narrator}')">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
          <button class="btn btn-sm btn-outline-gold" onclick="bookmarkContent('hadith', '${h.collection} #${h.number}', '${h.en}')">
            <i class="fa-regular fa-bookmark"></i> Save
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.copyHadithText = function(ref, ar, en, narrator) {
  const text = `${ar}\n\n"${en}"\n\n— ${narrator} [${ref}] via Al-Huda`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Hadith ${ref} copied to clipboard!`);
  });
};

/* ==========================================================================
   5. Articles Platform & Reader Modal + Admin Article Publishing Portal
   ========================================================================== */
const initialArticlesData = [
  {
    id: 1,
    title: "Navigating Faith, Reason, and Modern Scientific Inquiry",
    category: "Contemporary Issues",
    author: "AL-HUDA Islamic Research Department",
    date: "October 4, 2026",
    readTime: "7 min read",
    image: "images/classroom-study.jpg",
    excerpt: "Examining how classical Islamic epistemology harmoniously unified empirical investigation with divine revelation throughout intellectual history.",
    fullText: `
      <h3>Introduction: The Unity of Truth</h3>
      <p>Throughout Islamic intellectual history, genuine tension between empirical discovery and authentic revelation was fundamentally absent. Muslim scholars from Andalusia to Baghdad operated under the foundational principle that the Book of Nature and the Book of Revelation both originate from the same Divine Author.</p>
      
      <blockquote style="border-left: 3px solid var(--gold-500); padding: 12px 18px; margin: 20px 0; font-style: italic; background: var(--ivory-100);">
        "Say, 'Observe what is in the heavens and earth.' But of no avail will be signs or warners to a people who do not believe." [Surah Yunus: 101]
      </blockquote>

      <h3>Methodological Rigor in Classical Islam</h3>
      <p>Pioneers such as Ibn al-Haytham, considered the father of the modern scientific method, explicitely grounded their commitment to rigorous peer review and empirical skepticism in Islamic piety. To Ibn al-Haytham, seeking the truth was an act of sacred devotion that required shedding confirmation bias.</p>

      <h3>Addressing Contemporary Scientism</h3>
      <p>Today's philosophical scientism erroneously assumes that the material dimension exhausts all reality. Islamic epistemology offers an expansive framework that welcomes empirical progress while grounding human morality in transcendent divine guidance.</p>
    `
  },
  {
    id: 2,
    title: "The Architecture of the Soul: An In-Depth Study of Tazkiyah",
    category: "Aqeedah & Spirituality",
    author: "Sheikh Hafiz Saleem Sanabili Madani",
    date: "September 28, 2026",
    readTime: "11 min read",
    image: "images/quran-library.jpg",
    excerpt: "A comprehensive analysis of classical methods of spiritual purification (Tazkiyat an-Nafs) according to Imam al-Ghazali and Ibn Qayyim.",
    fullText: `
      <h3>The Tripartite Nature of the Nafs</h3>
      <p>The Holy Qur'an delineates three distinct evolutionary states of the human soul: <em>An-Nafs al-Ammarah bi-s-Su'</em> (the soul that incites towards base inclinations), <em>An-Nafs al-Lawwamah</em> (the reproaching, self-critical conscious conscience), and <em>An-Nafs al-Mutma'innah</em> (the soul in serene tranquility with its Lord).</p>

      <h3>Diseases of the Spiritual Heart</h3>
      <p>Pride (Kibr), envy (Hasad), ostentation (Riya'), and spiritual heedlessness (Ghaflah) act as corrosive agents upon moral clarity. Authentic Tazkiyah provides surgical remedies through consistent Dhikr, solitary contemplation, and rigorous adherence to the Sunnah.</p>
    `
  },
  {
    id: 3,
    title: "Fiqh of Financial Transactions in the Digital Age",
    category: "Islamic Finance",
    author: "AL-HUDA Fiqh & Fatwa Council",
    date: "September 15, 2026",
    readTime: "9 min read",
    image: "images/lecture-banner.jpg",
    excerpt: "Demystifying algorithmic contracts, ethical investments, and Shari'ah governance in contemporary fintech platforms.",
    fullText: `
      <h3>The Principles of Maqasid in Wealth Preservation</h3>
      <p>Hifz al-Mal (the preservation of wealth) is one of the five essential objectives of Islamic jurisprudence. All economic transactions must serve real productive utility, avoiding excessive speculative ambiguity (Gharar) and exploitative interest (Riba).</p>

      <h3>Smart Contracts and Shari'ah Compliance</h3>
      <p>How do smart ledger protocols align with traditional contractual requirements such as offer (Ijab), acceptance (Qabul), and mutual consent? This treatise outlines the critical juristic criteria established by the OIC Fiqh Academy.</p>
    `
  }
];

let customArticles = JSON.parse(localStorage.getItem('alhuda_custom_articles') || '[]');
let articlesData = [...customArticles, ...initialArticlesData];

function initArticlesPlatform() {
  const searchInput = document.getElementById('articleSearchInput');
  const categoryFilter = document.getElementById('articleCategoryFilter');

  if (searchInput) searchInput.addEventListener('input', renderArticles);
  if (categoryFilter) categoryFilter.addEventListener('change', renderArticles);

  renderArticles();
  updateArticleAdminCounters();
}

function renderArticles() {
  const container = document.getElementById('articlesGridContainer');
  if (!container) return;

  const searchInput = document.getElementById('articleSearchInput');
  const categoryFilter = document.getElementById('articleCategoryFilter');
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const cat = categoryFilter ? categoryFilter.value : 'all';

  let list = articlesData.filter(a => {
    const matchesQ = a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
    const matchesCat = (cat === 'all') || (a.category === cat);
    return matchesQ && matchesCat;
  });

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--charcoal-400);">
        <i class="fa-solid fa-file-circle-question" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.6;"></i>
        <p style="font-size: 1.1rem; color: var(--charcoal-800); font-weight: 600;">No articles matched your criteria</p>
        <p style="font-size: 0.875rem;">Try adjusting your keyword or switch category filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(a => `
    <article class="article-card" data-id="${a.id}">
      <div class="article-thumb-wrap">
        <img src="${a.image}" alt="${a.title}" class="article-thumb" loading="lazy">
        ${a.isCustom ? `<span class="badge badge-gold" style="position: absolute; top: 12px; right: 12px; z-index: 2;"><i class="fa-solid fa-sparkles"></i> New</span>` : ''}
      </div>
      <div class="article-card-body">
        <div class="article-info-row">
          <span class="badge badge-emerald">${a.category}</span>
          <span>•</span>
          <span>${a.readTime}</span>
        </div>
        <h3 class="article-card-title">${a.title}</h3>
        <p class="article-excerpt">${a.excerpt}</p>
        <div class="article-author-row">
          <div class="author-meta">
            <div class="author-avatar-badge">
              <i class="fa-solid fa-feather-pointed"></i>
            </div>
            <span class="author-name">${a.author}</span>
          </div>
          <button class="btn btn-sm btn-primary" onclick="openArticleModal(${a.id})">
            Read Article <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function updateArticleAdminCounters() {
  const publishedCountEl = document.getElementById('adminPublishedCount');
  const manageCountEl = document.getElementById('adminManageCount');
  const tabBadgeEl = document.getElementById('adminTabManageBadge');

  const total = articlesData.length;
  if (publishedCountEl) publishedCountEl.textContent = total;
  if (manageCountEl) manageCountEl.textContent = total;
  if (tabBadgeEl) tabBadgeEl.textContent = total;
}

window.openArticleModal = function(id) {
  const article = articlesData.find(a => a.id == id);
  if (!article) return;

  const modal = document.getElementById('articleReaderModal');
  const content = document.getElementById('articleReaderContent');

  if (content) {
    content.innerHTML = `
      <div style="padding: 36px 32px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
          <span class="badge badge-emerald">${article.category}</span>
          <span style="font-size: 0.8125rem; color: var(--charcoal-400);">${article.date}</span>
          <span style="font-size: 0.8125rem; color: var(--charcoal-400);">• ${article.readTime}</span>
          ${article.isCustom ? `<span class="badge badge-gold"><i class="fa-solid fa-circle-check"></i> Published via Admin</span>` : ''}
        </div>
        <h1 style="font-family: var(--font-serif); font-size: 2.1rem; line-height: 1.3; color: var(--emerald-950); margin-bottom: 20px;">
          ${article.title}
        </h1>
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-light); padding-bottom: 20px; margin-bottom: 28px; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="author-avatar-badge" style="width: 44px; height: 44px; font-size: 1.15rem;">
              <i class="fa-solid fa-feather-pointed"></i>
            </div>
            <div>
              <div style="font-weight: 700; color: var(--charcoal-900);">${article.author}</div>
              <div style="font-size: 0.8125rem; color: var(--emerald-800);">Verified Scholarly Contributor</div>
            </div>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-sm btn-outline-gold" onclick="bookmarkContent('article', '${article.title}', '${article.author}')">
              <i class="fa-regular fa-bookmark"></i> Save
            </button>
            <button class="btn btn-sm btn-outline" onclick="copyVerseText('', '${article.title}', '${article.author}', 1)">
              <i class="fa-solid fa-share-nodes"></i> Share
            </button>
          </div>
        </div>
        <div style="line-height: 1.85; font-size: 1.0625rem; color: var(--charcoal-800);">
          ${article.fullText}
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('open');
  }
};

/* ==========================================================================
   Admin Portal — Article Publishing & Management Logic
   ========================================================================== */
function initArticleAdminPortal() {
  const adminModal = document.getElementById('adminArticleSuiteModal');
  const uploadForm = document.getElementById('adminArticleUploadForm');
  const tabUploadBtn = document.getElementById('adminTabUploadBtn');
  const tabManageBtn = document.getElementById('adminTabManageBtn');
  const paneUpload = document.getElementById('adminPaneUpload');
  const paneManage = document.getElementById('adminPaneManage');

  // Triggers to open Admin Modal
  const openButtons = [
    document.getElementById('headerAdminArticlesBtn'),
    document.getElementById('mobileAdminArticlesBtn'),
    document.getElementById('openArticleAdminUploadBtn'),
    document.getElementById('openArticleAdminManageBtn')
  ];

  openButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (adminModal) adminModal.classList.add('open');
        renderAdminArticlesTable();
        updateArticleAdminCounters();
        if (btn.id === 'openArticleAdminManageBtn') {
          switchAdminTab('manage');
        } else {
          switchAdminTab('upload');
        }
      });
    }
  });

  // Tab switching
  function switchAdminTab(target) {
    if (target === 'upload') {
      tabUploadBtn.classList.add('active');
      tabManageBtn.classList.remove('active');
      paneUpload.classList.add('active');
      paneManage.classList.remove('active');
    } else {
      tabManageBtn.classList.add('active');
      tabUploadBtn.classList.remove('active');
      paneManage.classList.add('active');
      paneUpload.classList.remove('active');
      renderAdminArticlesTable();
    }
  }

  if (tabUploadBtn) tabUploadBtn.addEventListener('click', () => switchAdminTab('upload'));
  if (tabManageBtn) tabManageBtn.addEventListener('click', () => switchAdminTab('manage'));

  // Author Selection handler (custom author option)
  const authorSelect = document.getElementById('articleAuthorSelect');
  const customAuthorGroup = document.getElementById('customAuthorGroup');
  if (authorSelect && customAuthorGroup) {
    authorSelect.addEventListener('change', () => {
      if (authorSelect.value === 'custom') {
        customAuthorGroup.style.display = 'block';
      } else {
        customAuthorGroup.style.display = 'none';
      }
      updateLiveCardPreview();
    });
  }

  // Image File Upload reader (FileReader converts local computer image to DataURL)
  const fileInput = document.getElementById('articleImageFileInput');
  const urlInput = document.getElementById('articleImageUrlInput');
  const previewImg = document.getElementById('previewCardImg');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          showToast('Please select a valid image file (JPG, PNG, WEBP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target.result;
          if (urlInput) urlInput.value = result;
          if (previewImg) previewImg.src = result;
          showToast(`Image loaded: "${file.name}"`);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Preset thumbnails selection
  document.querySelectorAll('.preset-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const imgPath = btn.getAttribute('data-img');
      if (urlInput) urlInput.value = imgPath;
      if (previewImg) previewImg.src = imgPath;
    });
  });

  if (urlInput) {
    urlInput.addEventListener('input', () => {
      if (previewImg) previewImg.src = urlInput.value.trim() || 'images/classroom-study.jpg';
    });
  }

  // Live Card Preview inputs binding
  const titleInput = document.getElementById('articleTitleInput');
  const categorySelect = document.getElementById('articleCategoryInput');
  const readTimeInput = document.getElementById('articleReadTimeInput');
  const customAuthorNameInput = document.getElementById('customAuthorNameInput');

  function updateLiveCardPreview() {
    const cardTitle = document.getElementById('previewCardTitle');
    const cardCategory = document.getElementById('previewCardCategory');
    const cardAuthor = document.getElementById('previewCardAuthor');
    const cardReadTime = document.getElementById('previewCardReadTime');

    if (cardTitle && titleInput) {
      cardTitle.textContent = titleInput.value.trim() || 'Article Title Preview';
    }
    if (cardCategory && categorySelect) {
      cardCategory.textContent = categorySelect.value;
    }
    if (cardReadTime && readTimeInput) {
      cardReadTime.textContent = '• ' + (readTimeInput.value.trim() || '6 min read');
    }
    if (cardAuthor && authorSelect) {
      if (authorSelect.value === 'custom') {
        cardAuthor.textContent = (customAuthorNameInput && customAuthorNameInput.value.trim()) || 'Custom Scholar';
      } else {
        const authorName = authorSelect.value.split('|')[0];
        cardAuthor.textContent = authorName;
      }
    }
  }

  [titleInput, categorySelect, readTimeInput, customAuthorNameInput].forEach(el => {
    if (el) {
      el.addEventListener('input', updateLiveCardPreview);
      el.addEventListener('change', updateLiveCardPreview);
    }
  });

  // Full Screen Preview button
  const previewBtn = document.getElementById('adminPreviewArticleBtn');
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const title = titleInput.value.trim() || 'Untitled Article Preview';
      const category = categorySelect.value;
      const readTime = readTimeInput.value.trim() || '5 min read';
      let authorName = 'Sheikh Hafiz Saleem Sanabili Madani';
      let authorAvatar = '';

      if (authorSelect.value === 'custom') {
        authorName = (customAuthorNameInput && customAuthorNameInput.value.trim()) || 'Verified Scholar';
      } else {
        const parts = authorSelect.value.split('|');
        authorName = parts[0];
        authorAvatar = parts[1] || '';
      }

      const content = document.getElementById('articleFullContentInput').value.trim() || '<p>Article body is empty. Please enter your text in the content editor.</p>';

      const tempPreview = {
        id: 'preview',
        title,
        category,
        author: authorName,
        authorAvatar,
        date: 'Today (Preview)',
        readTime,
        image: urlInput.value.trim() || 'images/classroom-study.jpg',
        excerpt: document.getElementById('articleExcerptInput').value.trim() || 'Preview excerpt...',
        fullText: content,
        isCustom: true
      };

      // Show in reader
      openArticleModal(tempPreview.id);
      const articleReaderContent = document.getElementById('articleReaderContent');
      if (articleReaderContent) {
        articleReaderContent.innerHTML = `
          <div style="background: var(--gold-subtle); padding: 12px 20px; border-bottom: 1px solid var(--gold-500); display: flex; align-items: center; justify-content: space-between;">
            <span style="font-weight: 700; color: var(--gold-700);"><i class="fa-solid fa-eye"></i> Live Draft Preview Mode</span>
            <span style="font-size: 0.8125rem; color: var(--charcoal-600);">Review formatting before publishing</span>
          </div>
          <div style="padding: 36px 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <span class="badge badge-emerald">${tempPreview.category}</span>
              <span style="font-size: 0.8125rem; color: var(--charcoal-400);">${tempPreview.date}</span>
              <span style="font-size: 0.8125rem; color: var(--charcoal-400);">• ${tempPreview.readTime}</span>
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.1rem; line-height: 1.3; color: var(--emerald-950); margin-bottom: 20px;">
              ${tempPreview.title}
            </h1>
            <div style="display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 20px; margin-bottom: 28px;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--emerald-800); border: 2px solid var(--gold-500); display: flex; align-items: center; justify-content: center; color: var(--gold-400); font-size: 1.1rem; flex-shrink: 0;">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <div style="font-weight: 700; color: var(--charcoal-900);">${tempPreview.author}</div>
                <div style="font-size: 0.8125rem; color: var(--emerald-800);">Verified Scholar & Contributor</div>
              </div>
            </div>
            <div style="line-height: 1.85; font-size: 1.0625rem; color: var(--charcoal-800);">
              ${tempPreview.fullText}
            </div>
          </div>
        `;
      }
    });
  }

  // Reset form button
  const resetBtn = document.getElementById('adminResetFormBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.getElementById('editArticleId').value = '';
      document.getElementById('adminPublishSubmitBtn').innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Publish Article to Al-Huda';
      setTimeout(updateLiveCardPreview, 50);
    });
  }

  // Submit Article Upload Form
  if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const editId = document.getElementById('editArticleId').value;
      const title = titleInput.value.trim();
      const titleAr = document.getElementById('articleTitleArInput').value.trim();
      const category = categorySelect.value;
      const readTime = readTimeInput.value.trim() || '6 min read';
      const excerpt = document.getElementById('articleExcerptInput').value.trim();
      const tagsStr = document.getElementById('articleTagsInput').value.trim();
      const imageUrl = urlInput.value.trim() || 'images/classroom-study.jpg';
      const fullText = document.getElementById('articleFullContentInput').value.trim();

      let authorName = 'Sheikh Hafiz Saleem Sanabili Madani';
      let authorAvatar = '';

      if (authorSelect.value === 'custom') {
        authorName = (customAuthorNameInput && customAuthorNameInput.value.trim()) || 'Verified Contributor';
        authorAvatar = '';
      } else {
        const parts = authorSelect.value.split('|');
        authorName = parts[0];
        authorAvatar = parts[1] || '';
      }

      const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      if (editId) {
        // Edit existing article
        const existingIdx = articlesData.findIndex(a => a.id == editId);
        if (existingIdx !== -1) {
          articlesData[existingIdx].title = title;
          articlesData[existingIdx].titleAr = titleAr;
          articlesData[existingIdx].category = category;
          articlesData[existingIdx].readTime = readTime;
          articlesData[existingIdx].excerpt = excerpt;
          articlesData[existingIdx].author = authorName;
          articlesData[existingIdx].authorAvatar = authorAvatar;
          articlesData[existingIdx].image = imageUrl;
          articlesData[existingIdx].fullText = fullText;
          articlesData[existingIdx].tags = tagsStr ? tagsStr.split(',').map(s => s.trim()) : [];

          // Also update customArticles in localStorage
          const customIdx = customArticles.findIndex(a => a.id == editId);
          if (customIdx !== -1) {
            customArticles[customIdx] = articlesData[existingIdx];
            localStorage.setItem('alhuda_custom_articles', JSON.stringify(customArticles));
          }

          showToast(`Article "${title}" updated successfully!`);
        }
      } else {
        // Create new article
        const newId = Date.now();
        const newArticle = {
          id: newId,
          title,
          titleAr,
          category,
          author: authorName,
          authorAvatar,
          date: formattedDate,
          readTime,
          image: imageUrl,
          excerpt,
          fullText,
          tags: tagsStr ? tagsStr.split(',').map(s => s.trim()) : [],
          isCustom: true
        };

        customArticles.unshift(newArticle);
        localStorage.setItem('alhuda_custom_articles', JSON.stringify(customArticles));
        articlesData = [...customArticles, ...initialArticlesData];

        showToast(`Article "${title}" published live successfully!`);

        // Smooth scroll to the newly added article card
        setTimeout(() => {
          const targetCard = document.querySelector(`.article-card[data-id="${newId}"]`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.classList.add('newly-added');
          }
        }, 400);
      }

      // Refresh views
      renderArticles();
      renderAdminArticlesTable();
      updateArticleAdminCounters();

      // Reset & close modal
      uploadForm.reset();
      document.getElementById('editArticleId').value = '';
      document.getElementById('adminPublishSubmitBtn').innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Publish Article to Al-Huda';
      adminModal.classList.remove('open');
    });
  }

  // Manage table filter
  const manageSearch = document.getElementById('adminManageSearchInput');
  if (manageSearch) {
    manageSearch.addEventListener('input', renderAdminArticlesTable);
  }
}

function renderAdminArticlesTable() {
  const tbody = document.getElementById('adminArticlesTableBody');
  if (!tbody) return;

  const searchInput = document.getElementById('adminManageSearchInput');
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let list = articlesData;
  if (q) {
    list = list.filter(a => a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 30px; color: var(--charcoal-400);">
          No articles match your search filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(a => `
    <tr>
      <td>
        <img src="${a.image}" alt="${a.title}" class="admin-table-thumb" onerror="this.src='images/classroom-study.jpg'">
      </td>
      <td>
        <strong>${a.title}</strong>
        ${a.isCustom ? `<span class="badge badge-gold" style="font-size: 0.65rem; margin-left: 6px;">Uploaded</span>` : ''}
      </td>
      <td><span class="badge badge-emerald">${a.category}</span></td>
      <td>${a.author}</td>
      <td style="font-size: 0.8125rem; color: var(--charcoal-400);">${a.date}</td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-sm btn-outline" title="Read Article" onclick="openArticleModal(${a.id})">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="btn btn-sm btn-outline-gold" title="Edit Article" onclick="editArticleFromAdmin(${a.id})">
            <i class="fa-solid fa-pen"></i>
          </button>
          ${a.isCustom ? `
            <button class="btn btn-sm btn-outline" style="color: var(--danger); border-color: rgba(179,57,57,0.3);" title="Delete Article" onclick="deleteArticleFromAdmin(${a.id})">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          ` : `
            <button class="btn btn-sm btn-outline" style="opacity: 0.35;" title="Built-in article protected" disabled>
              <i class="fa-solid fa-lock"></i>
            </button>
          `}
        </div>
      </td>
    </tr>
  `).join('');
}

window.insertArticleSnippet = function(type) {
  const textarea = document.getElementById('articleFullContentInput');
  if (!textarea) return;

  let snippet = '';
  if (type === 'h3') {
    snippet = '\n<h3>Scholarly Subheading Title</h3>\n<p>Add detailed explanation and context here...</p>\n';
  } else if (type === 'verse') {
    snippet = '\n<blockquote style="border-left: 3px solid var(--gold-500); padding: 14px 18px; margin: 20px 0; background: var(--ivory-100);"><div style="font-family: var(--font-arabic-title); font-size: 1.45rem; color: var(--emerald-950); text-align: right; direction: rtl; margin-bottom: 6px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>"Verily, along with hardship comes ease." [Surah Ash-Sharh: 6]</blockquote>\n';
  } else if (type === 'hadith') {
    snippet = '\n<div style="background: var(--ivory-50); border: 1px solid var(--border-light); padding: 14px 18px; border-radius: 6px; margin: 18px 0;"><strong>Prophetic Guidance:</strong> "The most beloved of deeds to Allah are those that are most consistent, even if they are few." — <em>[Sahih al-Bukhari #6464]</em></div>\n';
  } else if (type === 'callout') {
    snippet = '\n<div style="background: var(--emerald-50); border-left: 3px solid var(--emerald-700); padding: 14px 18px; margin: 18px 0; border-radius: 4px;"><strong>Scholarly Note:</strong> Classical jurists unanimously emphasized that necessity permits that which is otherwise restricted, within proportionate measure.</div>\n';
  } else if (type === 'list') {
    snippet = '\n<ul style="margin: 14px 0 14px 24px; list-style: disc; line-height: 1.8;"><li>First Principle: Sincerity of Devotion (Ikhlas)</li><li>Second Principle: Alignment with Prophetic Practice</li><li>Third Principle: Preservation of Human Dignity and Equity</li></ul>\n';
  }

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;

  textarea.value = text.substring(0, start) + snippet + text.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + snippet.length;
};

window.editArticleFromAdmin = function(id) {
  const article = articlesData.find(a => a.id == id);
  if (!article) return;

  // Switch to upload tab
  const tabUploadBtn = document.getElementById('adminTabUploadBtn');
  const tabManageBtn = document.getElementById('adminTabManageBtn');
  const paneUpload = document.getElementById('adminPaneUpload');
  const paneManage = document.getElementById('adminPaneManage');

  if (tabUploadBtn && tabManageBtn && paneUpload && paneManage) {
    tabUploadBtn.classList.add('active');
    tabManageBtn.classList.remove('active');
    paneUpload.classList.add('active');
    paneManage.classList.remove('active');
  }

  // Fill form
  document.getElementById('editArticleId').value = article.id;
  document.getElementById('articleTitleInput').value = article.title;
  if (document.getElementById('articleTitleArInput')) {
    document.getElementById('articleTitleArInput').value = article.titleAr || '';
  }
  document.getElementById('articleCategoryInput').value = article.category;
  document.getElementById('articleReadTimeInput').value = article.readTime;
  document.getElementById('articleExcerptInput').value = article.excerpt;
  document.getElementById('articleImageUrlInput').value = article.image;
  document.getElementById('articleFullContentInput').value = article.fullText;
  if (document.getElementById('articleTagsInput')) {
    document.getElementById('articleTagsInput').value = (article.tags || []).join(', ');
  }

  // Update preview image
  const previewImg = document.getElementById('previewCardImg');
  if (previewImg) previewImg.src = article.image;

  // Author select
  const authorSelect = document.getElementById('articleAuthorSelect');
  const customGroup = document.getElementById('customAuthorGroup');
  const customInput = document.getElementById('customAuthorNameInput');

  let matchedOption = false;
  if (authorSelect) {
    for (let i = 0; i < authorSelect.options.length; i++) {
      if (authorSelect.options[i].value.startsWith(article.author)) {
        authorSelect.selectedIndex = i;
        matchedOption = true;
        break;
      }
    }
    if (!matchedOption) {
      authorSelect.value = 'custom';
      if (customGroup) customGroup.style.display = 'block';
      if (customInput) customInput.value = article.author;
    } else {
      if (customGroup) customGroup.style.display = 'none';
    }
  }

  // Update submit button text
  const submitBtn = document.getElementById('adminPublishSubmitBtn');
  if (submitBtn) {
    submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Changes to Article';
  }

  showToast(`Editing "${article.title}". Make your changes and save.`);
};

window.deleteArticleFromAdmin = function(id) {
  const article = articlesData.find(a => a.id == id);
  if (!article) return;

  if (!confirm(`Are you sure you want to remove the article "${article.title}" from Al-Huda?`)) {
    return;
  }

  // Remove from customArticles
  customArticles = customArticles.filter(a => a.id != id);
  localStorage.setItem('alhuda_custom_articles', JSON.stringify(customArticles));

  // Remove from articlesData
  articlesData = articlesData.filter(a => a.id != id);

  renderArticles();
  renderAdminArticlesTable();
  updateArticleAdminCounters();

  showToast(`Article "${article.title}" has been deleted.`);
};

/* ==========================================================================
   6. Video Platform ("Watch & Learn")
   ========================================================================== */
const videoPlatformData = [
  {
    id: 101,
    title: "Tafsir Surah Al-Kahf: Fortress of Faith in the Modern Age",
    speaker: "Sheikh Hafiz Saleem Sanabili Madani",
    duration: "52:14",
    views: "185K views",
    date: "3 days ago",
    category: "Qur’an",
    thumb: "images/lecture-banner.jpg",
    desc: "A profound contextual breakdown of the four trials found within Surah Al-Kahf: the trial of faith, wealth, knowledge, and power."
  },
  {
    id: 102,
    title: "The Sealed Nectar: Lessons from the Migration (Hijrah)",
    speaker: "Sheikh Hafiz Saleem Sanabili Madani",
    duration: "41:30",
    views: "92K views",
    date: "1 week ago",
    category: "Seerah",
    thumb: "images/hero-cinematic.jpg",
    desc: "Strategic leadership and reliance on Allah demonstrated during the critical turning point in early Islamic history."
  },
  {
    id: 103,
    title: "Purification of Intentions: The First Hadith in Bukhari",
    speaker: "Sheikh Hafiz Saleem Sanabili Madani",
    duration: "34:50",
    views: "140K views",
    date: "2 weeks ago",
    category: "Hadith",
    thumb: "images/quran-library.jpg",
    desc: "Why the classical jurists placed the hadith of intentions at the very inception of their encyclopedic compilations."
  },
  {
    id: 104,
    title: "Principles of Islamic Jurisprudence (Usul al-Fiqh) Explained",
    speaker: "AL-HUDA Islamic Jurisprudence Council",
    duration: "58:05",
    views: "210K views",
    date: "1 month ago",
    category: "Fiqh",
    thumb: "images/classroom-study.jpg",
    desc: "Understanding the hierarchical consensus, analogical reasoning (Qiyas), and textual proofs that govern Islamic jurisprudence."
  },
  {
    id: 105,
    title: "How to Address Skepticism & Intellectual Doubts in Da’wah",
    speaker: "Sheikh Hafiz Saleem Sanabili Madani",
    duration: "47:20",
    views: "78K views",
    date: "1 month ago",
    category: "Da’wah",
    thumb: "images/lecture-banner.jpg",
    desc: "Compassionate, articulate dialogue methodologies for conveying the message of Islam with wisdom and exemplary manners."
  },
  {
    id: 106,
    title: "The Golden Age of Islamic Science, Medicine, and Astronomy",
    speaker: "AL-HUDA Islamic Research Department",
    duration: "1:04:12",
    views: "320K views",
    date: "2 months ago",
    category: "Islamic History",
    thumb: "images/hero-cinematic.jpg",
    desc: "A visual tour of the House of Wisdom in Baghdad and the royal observatories of Cordoba and Damascus."
  }
];

function initVideoPlatform() {
  const container = document.getElementById('videoGridContainer');
  const pills = document.querySelectorAll('.filter-pills-row .pill-btn');

  function render(category = 'all') {
    if (!container) return;
    let list = videoPlatformData;
    if (category !== 'all') {
      list = list.filter(v => v.category.toLowerCase().includes(category.toLowerCase()));
    }

    container.innerHTML = list.map(v => `
      <div class="video-card" onclick="openVideoPlayerModal(${v.id})">
        <div class="video-thumb-box">
          <img src="${v.thumb}" alt="${v.title}" class="video-thumb-img" loading="lazy">
          <div class="play-hover-btn">
            <i class="fa-solid fa-play"></i>
          </div>
          <span class="video-duration">${v.duration}</span>
        </div>
        <div class="video-body">
          <span class="video-category-tag">${v.category}</span>
          <h4 class="video-title">${v.title}</h4>
          <div class="video-speaker">
            <i class="fa-solid fa-circle-check"></i> ${v.speaker}
          </div>
          <div class="video-metrics">
            <span>${v.views}</span>
            <span>•</span>
            <span>${v.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      render(e.currentTarget.getAttribute('data-filter'));
    });
  });

  render();
}

window.openVideoPlayerModal = function(id) {
  const video = videoPlatformData.find(v => v.id === id) || videoPlatformData[0];
  const modal = document.getElementById('videoPlayerModal');
  const container = document.getElementById('videoModalContent');

  if (container) {
    container.innerHTML = `
      <div style="background: #000; position: relative; border-radius: var(--radius-xl) var(--radius-xl) 0 0; overflow: hidden; height: 420px; display: flex; align-items: center; justify-content: center;">
        <img src="${video.thumb}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.65;">
        <div style="position: absolute; text-align: center; color: #fff;">
          <div style="width: 68px; height: 68px; border-radius: 50%; background: var(--gold-500); color: #000; display: inline-flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 12px; cursor: pointer; box-shadow: 0 0 30px var(--gold-glow);">
            <i class="fa-solid fa-play"></i>
          </div>
          <div style="font-size: 0.875rem; color: var(--ivory-200); font-weight: 500;">Al-Huda High Definition Stream • 1080p 60fps</div>
        </div>
      </div>
      <div style="padding: 28px 32px; background: var(--white); border-radius: 0 0 var(--radius-xl) var(--radius-xl);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="badge badge-emerald">${video.category}</span>
            <span style="font-size: 0.8125rem; color: var(--charcoal-400); margin-left: 10px;">${video.views} • ${video.date}</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-outline-gold" onclick="bookmarkContent('video', '${video.title}', '${video.speaker}')">
              <i class="fa-regular fa-bookmark"></i> Save to My List
            </button>
            <button class="btn btn-sm btn-outline" onclick="copyVerseText('', '${video.title}', '${video.speaker}', 1)">
              <i class="fa-solid fa-share-nodes"></i> Share
            </button>
          </div>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--emerald-950); margin-bottom: 8px;">
          ${video.title}
        </h2>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
          <span style="font-weight: 600; color: var(--emerald-800);"><i class="fa-solid fa-certificate" style="color: var(--gold-500);"></i> ${video.speaker}</span>
          <span style="color: var(--charcoal-400);">| Duration: ${video.duration}</span>
        </div>
        <p style="font-size: 0.9375rem; color: var(--charcoal-700); line-height: 1.6; margin-bottom: 24px;">
          ${video.desc}
        </p>
        <div style="background: var(--ivory-100); border-radius: var(--radius-md); padding: 16px; border-left: 3px solid var(--gold-500);">
          <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--emerald-950); margin-bottom: 6px;">Lecture Transcription & Notes</h4>
          <p style="font-size: 0.8125rem; color: var(--charcoal-700); line-height: 1.5;">
            Downloadable PDF lecture slides, bibliography, and verified Arabic references are freely provided to enrolled students.
          </p>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
};

/* ==========================================================================
   7. Islamic Courses ("Learn Islam Step by Step")
   ========================================================================== */
const coursesData = [
  {
    id: 201,
    title: "Understanding the Qur’an: Thematic Study",
    instructor: "Sheikh Hafiz Saleem Sanabili Madani",
    lessons: 24,
    duration: "18 Hours",
    level: "Beginner",
    category: "Qur’anic Sciences",
    thumb: "images/quran-library.jpg",
    desc: "A foundational structured course exploring the core themes, linguistic marvels, and practical life applications of the Qur'an.",
    progress: 40
  },
  {
    id: 202,
    title: "Introduction to Hadith & Uloom al-Hadith",
    instructor: "Sheikh Hafiz Saleem Sanabili Madani",
    lessons: 18,
    duration: "14 Hours",
    level: "Intermediate",
    category: "Hadith Studies",
    thumb: "images/hero-cinematic.jpg",
    desc: "Demystifying the rigorous preservation of the prophetic tradition, Sanad criticism, and biographical evaluation (Ilm ar-Rijal).",
    progress: 0
  },
  {
    id: 203,
    title: "Life of Prophet Muhammad ﷺ (The Sealed Nectar)",
    instructor: "Sheikh Hafiz Saleem Sanabili Madani",
    lessons: 30,
    duration: "26 Hours",
    level: "All Levels",
    category: "Seerah",
    thumb: "images/classroom-study.jpg",
    desc: "An inspiring chronologically sequenced journey through the blessed life, character, and legacy of the Messenger of Allah ﷺ.",
    progress: 75
  },
  {
    id: 204,
    title: "Foundations of Aqeedah: Belief & Conviction",
    instructor: "AL-HUDA Research Faculty",
    lessons: 16,
    duration: "12 Hours",
    level: "Beginner",
    category: "Aqeedah",
    thumb: "images/quran-library.jpg",
    desc: "Comprehensive clarity on the six pillars of faith, Tawheed, and resolving philosophical doubts with poise.",
    progress: 10
  },
  {
    id: 205,
    title: "Fiqh for Everyday Life: Purification & Prayer",
    instructor: "Sheikh Hafiz Saleem Sanabili Madani",
    lessons: 20,
    duration: "15 Hours",
    level: "Beginner",
    category: "Fiqh",
    thumb: "images/lecture-banner.jpg",
    desc: "Practical jurisprudential guide covering Taharah, Salah, Wudu, and common everyday worship questions.",
    progress: 90
  },
  {
    id: 206,
    title: "Qur’anic Arabic: Grammar, Morphology & Roots",
    instructor: "Ustadh Bilal Malik (Language Department)",
    lessons: 36,
    duration: "30 Hours",
    level: "Intermediate",
    category: "Language",
    thumb: "images/book-foundations.jpg",
    desc: "Unlock the direct linguistic beauty of the Qur'an by learning foundational Sarf, Nahw, and high-frequency root words.",
    progress: 0
  }
];

function initCourses() {
  const container = document.getElementById('coursesGridContainer');
  if (!container) return;

  container.innerHTML = coursesData.map(c => `
    <div class="course-card">
      <div class="course-thumb-box">
        <img src="${c.thumb}" alt="${c.title}" class="course-thumb" loading="lazy">
        <span class="course-level-tag">${c.level}</span>
      </div>
      <div class="course-body">
        <span class="course-category">${c.category}</span>
        <h3 class="course-title">${c.title}</h3>
        <div class="course-instructor"><i class="fa-solid fa-chalkboard-user"></i> ${c.instructor}</div>
        <p class="course-desc">${c.desc}</p>
        <div class="course-meta-row">
          <span><i class="fa-regular fa-circle-play"></i> ${c.lessons} Lessons</span>
          <span><i class="fa-regular fa-clock"></i> ${c.duration}</span>
        </div>
        ${c.progress > 0 ? `
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--emerald-800); font-weight: 600; margin-bottom: 4px;">
            <span>In Progress</span>
            <span>${c.progress}%</span>
          </div>
          <div class="course-progress-bar">
            <div class="course-progress-fill" style="width: ${c.progress}%;"></div>
          </div>
        ` : ''}
        <div class="course-footer">
          <button class="btn btn-primary" style="width: 100%;" onclick="openCourseSyllabusModal(${c.id})">
            ${c.progress > 0 ? 'Continue Course' : 'Start Free Course'} <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openCourseSyllabusModal = function(id) {
  const course = coursesData.find(c => c.id === id);
  if (!course) return;

  const modal = document.getElementById('courseSyllabusModal');
  const content = document.getElementById('courseSyllabusContent');

  if (content) {
    content.innerHTML = `
      <div style="padding: 36px 32px;">
        <span class="badge badge-emerald" style="margin-bottom: 12px;">${course.category} • ${course.level}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--emerald-950); margin-bottom: 8px;">
          ${course.title}
        </h2>
        <div style="font-size: 0.9375rem; color: var(--emerald-800); font-weight: 600; margin-bottom: 16px;">
          Instructor: ${course.instructor}
        </div>
        <p style="color: var(--charcoal-700); line-height: 1.6; margin-bottom: 24px;">
          ${course.desc}
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: var(--ivory-100); padding: 16px; border-radius: var(--radius-md); margin-bottom: 28px; text-align: center;">
          <div><strong>${course.lessons}</strong><div style="font-size: 0.75rem; color: var(--charcoal-400);">Lessons</div></div>
          <div><strong>${course.duration}</strong><div style="font-size: 0.75rem; color: var(--charcoal-400);">Estimated Time</div></div>
          <div><strong>Certificate</strong><div style="font-size: 0.75rem; color: var(--charcoal-400);">Upon Passing</div></div>
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--charcoal-900); margin-bottom: 14px;">Curriculum & Modules</h4>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          <div style="padding: 12px 16px; background: var(--ivory-50); border: 1px solid var(--border-light); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span><strong>Module 1:</strong> Foundations & Historical Epistemology</span>
            <span class="badge badge-gold">Completed</span>
          </div>
          <div style="padding: 12px 16px; background: var(--ivory-50); border: 1px solid var(--border-light); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span><strong>Module 2:</strong> Core Principles & Textual Analysis</span>
            <span class="badge badge-emerald">4 Lessons</span>
          </div>
          <div style="padding: 12px 16px; background: var(--ivory-50); border: 1px solid var(--border-light); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <span><strong>Module 3:</strong> Contemporary Applications & Case Studies</span>
            <span class="badge badge-dark">Locked</span>
          </div>
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-gold" style="flex: 1;" onclick="enrollCourse('${course.title}')">
            <i class="fa-solid fa-graduation-cap"></i> Enroll & Track Progress
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
};

window.enrollCourse = function(title) {
  bookmarkContent('course', title, "Enrolled in Student Portal");
  showToast(`Congratulations! You have enrolled in "${title}".`);
};

/* ==========================================================================
   8. Scholars Section ("Learn From Trusted Scholars") & Admin Feature
   ========================================================================== */
let scholarsData = [
  {
    id: 300,
    name: "Sheikh Hafiz Saleem Sanabili Madani",
    country: "Didwana, Rajasthan, India",
    qualification: "Fazil, Islamic University of Madinah",
    email: "abuhaniyasaleemmadani@gmail.com",
    avatar: "images/sheikh-hafiz-saleem-portrait.jpg",
    certificateImage: "images/sheikh-hafiz-saleem-certificate.jpg",
    convocationImage: "images/sheikh-hafiz-saleem-madinah-convocation.jpg",
    darsImage: "images/sheikh-hafiz-saleem-dars-lecture.jpg",
    bio: "Senior Islamic scholar, orator, and researcher holding classical degrees from the prestigious Islamic University of Madinah (Al-Jami'ah Al-Islamiyyah bil-Madinah Al-Munawwarah). Leading regular community Dars, Ramadan discourses, authentic Islamic counseling, and worldwide educational outreach.",
    topics: ["Tafsir", "Hadith Sciences", "Ramadan Dars", "Community Guidance"],
    lecturesCount: "250+ Lectures",
    articlesCount: "18 Articles"
  }
];

function initScholarsDirectory() {
  const container = document.getElementById('scholarsGridContainer');
  const addScholarBtn = document.getElementById('adminAddScholarBtn');
  const adminModal = document.getElementById('adminScholarModal');
  const adminForm = document.getElementById('adminScholarForm');

  function render() {
    if (!container) return;
    container.innerHTML = scholarsData.map(s => `
      <div class="scholar-card">
        <div style="position: relative; width: 120px; height: 120px; margin: 0 auto 16px;">
          <img src="${s.avatar || 'images/sheikh-hafiz-saleem-portrait.jpg'}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 3px solid var(--gold-500); box-shadow: var(--shadow-md);">
          <div class="scholar-verified-badge" title="Verified Scholar" style="position: absolute; bottom: 2px; right: 2px; background: var(--gold-500); color: #04140e; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; border: 2px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
        <h3 class="scholar-name">${s.name}</h3>
        <div class="scholar-country"><i class="fa-solid fa-location-dot" style="color: var(--gold-600);"></i> ${s.country}</div>
        <div class="scholar-qualification">${s.qualification}</div>
        
        <div style="margin: 8px 0; font-size: 0.8125rem;">
          <a href="mailto:${s.email || 'abuhaniyasaleemmadani@gmail.com'}" style="color: var(--emerald-800); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-envelope" style="color: var(--gold-600);"></i> ${s.email || 'abuhaniyasaleemmadani@gmail.com'}
          </a>
        </div>

        <p class="scholar-bio">${s.bio}</p>
        <div class="scholar-tags">
          ${s.topics.map(t => `<span class="scholar-tag">${t}</span>`).join('')}
        </div>
        <div class="scholar-footer">
          <span style="color: var(--emerald-800); font-weight: 600;"><i class="fa-solid fa-video"></i> ${s.lecturesCount}</span>
          <button class="btn btn-sm btn-text" onclick="openScholarProfileModal(${s.id})">
            View Profile <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  if (addScholarBtn) {
    addScholarBtn.addEventListener('click', () => {
      if (adminModal) adminModal.classList.add('open');
    });
  }

  if (adminForm) {
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('newScholarName').value.trim();
      const country = document.getElementById('newScholarCountry').value.trim();
      const qualification = document.getElementById('newScholarQualification').value.trim();
      const bio = document.getElementById('newScholarBio').value.trim();
      const topicsStr = document.getElementById('newScholarTopics').value.trim();

      const newScholar = {
        id: Date.now(),
        name: name,
        country: country || "International",
        qualification: qualification,
        avatar: "images/sheikh-hafiz-saleem-portrait.jpg",
        email: "abuhaniyasaleemmadani@gmail.com",
        bio: bio,
        topics: topicsStr ? topicsStr.split(',').map(s => s.trim()) : ["Islamic Studies"],
        lecturesCount: "10+ Lectures",
        articlesCount: "5 Articles"
      };

      scholarsData.push(newScholar);
      render();
      adminModal.classList.remove('open');
      adminForm.reset();
      showToast(`Scholar ${name} has been successfully added to AL-HUDA-ISLAMIC-RESEARCH!`);
    });
  }

  render();
}

window.openScholarProfileModal = function(id) {
  const scholar = scholarsData.find(s => s.id === id);
  if (!scholar) return;

  const modal = document.getElementById('scholarProfileModal');
  const content = document.getElementById('scholarProfileContent');

  if (content) {
    content.innerHTML = `
      <div style="padding: 36px 32px;">
        <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
          <div style="position: relative; width: 96px; height: 96px; flex-shrink: 0;">
            <img src="${scholar.avatar || 'images/sheikh-hafiz-saleem-portrait.jpg'}" alt="${scholar.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 3px solid var(--gold-500); box-shadow: var(--shadow-md);">
            <div style="position: absolute; bottom: 0; right: 0; background: var(--gold-500); color: #000; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; border: 2px solid #fff;">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <h2 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--emerald-950); margin: 0;">${scholar.name}</h2>
              <span class="badge badge-gold"><i class="fa-solid fa-certificate"></i> Verified Scholar</span>
            </div>
            <div style="color: var(--charcoal-400); font-size: 0.875rem; margin-top: 4px;"><i class="fa-solid fa-location-dot"></i> ${scholar.country}</div>
            <div style="color: var(--emerald-800); font-size: 0.875rem; font-weight: 600; margin-top: 2px;">${scholar.qualification}</div>
            <div style="margin-top: 4px;">
              <a href="mailto:${scholar.email || 'abuhaniyasaleemmadani@gmail.com'}" style="color: var(--emerald-800); font-size: 0.8125rem; font-weight: 600; text-decoration: none;">
                <i class="fa-solid fa-envelope" style="color: var(--gold-600);"></i> ${scholar.email || 'abuhaniyasaleemmadani@gmail.com'}
              </a>
            </div>
          </div>
        </div>
        
        <p style="color: var(--charcoal-700); line-height: 1.7; font-size: 0.9375rem; margin-bottom: 24px;">
          ${scholar.bio}
        </p>

        <!-- Credentials & Graduation Showcase -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--emerald-950); margin-bottom: 12px;">
            <i class="fa-solid fa-building-columns" style="color: var(--gold-600); margin-right: 6px;"></i> Credentials & Madinah University Graduation
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
            <div style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-light); background: #000; text-align: center; cursor: pointer;" onclick="openLightbox('images/sheikh-hafiz-saleem-madinah-convocation.jpg', 'Islamic University of Madinah Convocation', '60th Graduation Ceremony, Islamic University of Madinah (1445 AH)')">
              <img src="images/sheikh-hafiz-saleem-madinah-convocation.jpg" alt="Madinah University Convocation" style="width: 100%; height: 130px; object-fit: cover;">
              <div style="padding: 8px; font-size: 0.75rem; color: #fff; background: var(--emerald-950);">60th Convocation (1445 AH)</div>
            </div>
            <div style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-light); background: #000; text-align: center; cursor: pointer;" onclick="openLightbox('images/sheikh-hafiz-saleem-certificate.jpg', 'Conferment of Sanad / Degree', 'Islamic University of Madinah Official Graduation Degree & Sanad')">
              <img src="images/sheikh-hafiz-saleem-certificate.jpg" alt="Madinah Degree Sanad" style="width: 100%; height: 130px; object-fit: cover;">
              <div style="padding: 8px; font-size: 0.75rem; color: #fff; background: var(--emerald-950);">Madinah Degree / Sanad</div>
            </div>
            <div style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-light); background: #000; text-align: center; cursor: pointer;" onclick="openLightbox('images/sheikh-hafiz-saleem-dars-lecture.jpg', 'Scholarly Dars & Discourse', 'Sheikh Hafiz Saleem Sanabili Madani delivering an Islamic discourse')">
              <img src="images/sheikh-hafiz-saleem-dars-lecture.jpg" alt="Delivering Lecture" style="width: 100%; height: 130px; object-fit: cover;">
              <div style="padding: 8px; font-size: 0.75rem; color: #fff; background: var(--emerald-950);">Lecture & Dars Session</div>
            </div>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border-light); padding-top: 20px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--charcoal-900); margin-bottom: 12px;">Contributions on AL-HUDA-ISLAMIC-RESEARCH</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div style="background: var(--ivory-50); padding: 12px; border-radius: var(--radius-sm); text-align: center;">
              <strong style="color: var(--emerald-800);">${scholar.lecturesCount}</strong>
              <div style="font-size: 0.75rem; color: var(--charcoal-400);">Video & Audio</div>
            </div>
            <div style="background: var(--ivory-50); padding: 12px; border-radius: var(--radius-sm); text-align: center;">
              <strong style="color: var(--emerald-800);">${scholar.articlesCount}</strong>
              <div style="font-size: 0.75rem; color: var(--charcoal-400);">Scholarly Treatises</div>
            </div>
            <div style="background: var(--ivory-50); padding: 12px; border-radius: var(--radius-sm); text-align: center;">
              <strong style="color: var(--emerald-800);">Active</strong>
              <div style="font-size: 0.75rem; color: var(--charcoal-400);">Fatwa Q&A Faculty</div>
            </div>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="mailto:${scholar.email || 'abuhaniyasaleemmadani@gmail.com'}" class="btn btn-primary">
              <i class="fa-solid fa-envelope"></i> Send Email Inquiry
            </a>
            <a href="#ask-questions" class="btn btn-outline-gold" onclick="document.getElementById('scholarProfileModal').classList.remove('open')">
              Submit Question to Council
            </a>
          </div>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
};

/* ==========================================================================
   9. Islamic Books Library
   ========================================================================== */
const booksData = [
  {
    id: 401,
    title: "The Foundations of Islamic Faith",
    author: "Sheikh Hafiz Saleem Sanabili Madani",
    category: "Aqeedah",
    language: "English / Arabic",
    pages: "340 Pages",
    cover: "images/book-foundations.jpg",
    desc: "A meticulous scholarly guide providing comprehensive clarity on foundational theology, prophetic methodology, and philosophical defenses."
  },
  {
    id: 402,
    title: "Gems of Prophetic Character: Daily Adab",
    author: "AL-HUDA Academic Council",
    category: "Manners & Ethics",
    language: "English",
    pages: "220 Pages",
    cover: "images/quran-library.jpg",
    desc: "Transformative reflections on prophetic humility, compassionate communication, and spiritual fortitude in everyday domestic and professional life."
  },
  {
    id: 403,
    title: "Principles of Maqasid al-Shari'ah",
    author: "Sheikh Hafiz Saleem Sanabili Madani",
    category: "Jurisprudence",
    language: "English / Arabic",
    pages: "410 Pages",
    cover: "images/classroom-study.jpg",
    desc: "The higher objectives of Islamic law: protecting faith, life, intellect, lineage, and wealth in contemporary legislative discourse."
  }
];

function initBooksLibrary() {
  const container = document.getElementById('booksGridContainer');
  if (!container) return;

  container.innerHTML = booksData.map(b => `
    <div class="book-card">
      <div class="book-cover-wrap">
        <img src="${b.cover}" alt="${b.title}" class="book-cover-img" loading="lazy">
      </div>
      <div class="book-body">
        <span class="badge badge-gold" style="align-self: flex-start; margin-bottom: 8px;">${b.category}</span>
        <h3 class="book-title">${b.title}</h3>
        <div class="book-author">${b.author}</div>
        <p class="book-desc">${b.desc}</p>
        <div class="book-actions-row">
          <button class="btn btn-sm btn-primary" style="flex: 1;" onclick="openBookReaderModal('${b.title}')">
            <i class="fa-solid fa-book-open-reader"></i> Read Online
          </button>
          <button class="btn btn-sm btn-outline" title="Download PDF" onclick="downloadBookPdf('${b.title}')">
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openBookReaderModal = function(title) {
  const modal = document.getElementById('bookReaderModal');
  const titleEl = document.getElementById('bookReaderTitle');
  if (titleEl) titleEl.textContent = title;
  if (modal) modal.classList.add('open');
};

window.downloadBookPdf = function(title) {
  showToast(`Preparing high-resolution PDF download for "${title}"...`);
};

/* ==========================================================================
   10. Academic Research Portal
   ========================================================================== */
const researchData = [
  {
    id: 501,
    title: "Ethical Imperatives in Autonomous Artificial Intelligence: A Maqasid Framework",
    author: "Dr. Zayd Al-Omari & AL-HUDA Research Fellows",
    topic: "Ethics & Modern Technology",
    date: "July 2026",
    doi: "10.1080/alhuda.2026.4402",
    abstract: "This paper formulates an evaluative paradigm for autonomous machine learning decision systems utilizing the classical Islamic jurisprudence of harm prevention (Saddu al-Dhara'i) and public interest (Maslahah Mursalah)."
  },
  {
    id: 502,
    title: "Methodological Verification in Early Hadith Transmission: Analysis of Isnad Networks",
    author: "Sheikh Hafiz Saleem Sanabili Madani & Research Fellows",
    topic: "Hadith Methodology",
    date: "May 2026",
    doi: "10.1080/alhuda.2026.3190",
    abstract: "A quantitative graph-theory analysis corroborating the rigorous biographical documentation established by classical Muhaddithin against 19th-century revisionist historical narratives."
  }
];

function initResearchPortal() {
  const container = document.getElementById('researchListContainer');
  if (!container) return;

  container.innerHTML = researchData.map(r => `
    <div class="research-card">
      <div class="research-header">
        <span class="badge badge-emerald">${r.topic}</span>
        <span style="font-size: 0.8125rem; color: var(--charcoal-400);">Peer-Reviewed Journal • ${r.date}</span>
      </div>
      <h3 class="research-title">${r.title}</h3>
      <div class="research-author"><i class="fa-solid fa-user-pen" style="color: var(--gold-600);"></i> ${r.author}</div>
      <p class="research-abstract"><strong>Abstract:</strong> ${r.abstract}</p>
      <div class="research-footer">
        <span style="font-size: 0.75rem; color: var(--charcoal-400); font-family: monospace;">DOI: ${r.doi}</span>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-sm btn-outline" onclick="copyCitation('${r.title}', '${r.author}', '${r.date}')">
            <i class="fa-regular fa-copy"></i> Copy Citation
          </button>
          <button class="btn btn-sm btn-outline-gold" onclick="downloadBookPdf('${r.title}')">
            <i class="fa-regular fa-file-pdf"></i> Download PDF
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.copyCitation = function(title, author, date) {
  const citation = `${author}. "${title}." Al-Huda Scholarly Journal of Islamic Thought (${date}).`;
  navigator.clipboard.writeText(citation).then(() => {
    showToast("Academic citation (APA/Chicago) copied to clipboard!");
  });
};

/* ==========================================================================
   11. Separate Section to Ask Questions (Inquiry, Tracking & Answered Fatwas)
   ========================================================================== */
window.switchAskTab = function(tabName, btnEl) {
  // Toggle tab buttons
  document.querySelectorAll('.ask-tab-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  // Toggle panels
  const panelSubmit = document.getElementById('askPanelSubmit');
  const panelTrack = document.getElementById('askPanelTrack');
  const panelBrowse = document.getElementById('askPanelBrowse');

  if (panelSubmit) panelSubmit.classList.remove('active');
  if (panelTrack) panelTrack.classList.remove('active');
  if (panelBrowse) panelBrowse.classList.remove('active');

  if (tabName === 'submit' && panelSubmit) panelSubmit.classList.add('active');
  if (tabName === 'track' && panelTrack) panelTrack.classList.add('active');
  if (tabName === 'browse' && panelBrowse) panelBrowse.classList.add('active');
};

// Submitted inquiries local registry
let savedInquiries = JSON.parse(localStorage.getItem('alhuda_submitted_inquiries') || '[]');

function initAskScholarForm() {
  const form = document.getElementById('askScholarForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('askName');
    const emailInput = document.getElementById('askEmail');
    const countryInput = document.getElementById('askCountry');
    const categoryInput = document.getElementById('askCategory');
    const priorityInput = document.getElementById('askPriority');
    const titleInput = document.getElementById('askQuestionTitle');
    const questionInput = document.getElementById('askQuestion');
    const anonCheckbox = document.getElementById('askAnonymousCheckbox');

    const name = nameInput ? nameInput.value.trim() : 'Respected Seeker';
    const email = emailInput ? emailInput.value.trim() : '';
    const country = countryInput ? countryInput.value.trim() : 'Global';
    const category = categoryInput ? categoryInput.value : 'General';
    const priority = priorityInput ? priorityInput.value : 'Normal';
    const title = titleInput ? titleInput.value.trim() : 'Religious Inquiry';
    const question = questionInput ? questionInput.value.trim() : '';
    const isAnonymous = anonCheckbox ? anonCheckbox.checked : false;

    if (!question) {
      showToast('Please type your inquiry question before submitting.');
      return;
    }

    // Generate unique reference code (e.g. AIR-2026-4821)
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `AIR-2026-${randomSuffix}`;

    const newInquiry = {
      refCode,
      name: isAnonymous ? 'Anonymous Seeker' : name,
      email,
      country,
      category,
      priority,
      title,
      question,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Under Review',
      step: 2,
      assignedTo: 'Sheikh Hafiz Saleem Sanabili Madani'
    };

    savedInquiries.unshift(newInquiry);
    localStorage.setItem('alhuda_submitted_inquiries', JSON.stringify(savedInquiries));

    // Show toast with tracking code
    showToast(`Inquiry logged successfully! Ref Code: ${refCode}`);

    // Pre-populate tracking input
    const trackInput = document.getElementById('trackRefInput');
    if (trackInput) trackInput.value = refCode;

    // Reset form
    form.reset();

    // Auto-switch to Track tab to show immediate verification
    const trackTabBtn = document.querySelectorAll('.ask-tab-btn')[1];
    if (trackTabBtn) {
      window.switchAskTab('track', trackTabBtn);
      window.trackQuestionStatus(refCode);
    }
  });
}

window.trackQuestionStatus = function(customCode) {
  const inputEl = document.getElementById('trackRefInput');
  const code = (customCode || (inputEl && inputEl.value.trim()) || '').toUpperCase();

  if (!code) {
    showToast('Please enter your inquiry reference code (e.g. AIR-2026-1048)');
    return;
  }

  // Check saved inquiries
  const localMatch = savedInquiries.find(inq => inq.refCode.toUpperCase() === code);

  const displayCard = document.getElementById('trackResultDisplay');
  const statusBadge = document.getElementById('trackStatusBadge');
  const refLabel = document.getElementById('trackRefLabel');
  const dateLabel = document.getElementById('trackDateLabel');
  const titleLabel = document.getElementById('trackTitleLabel');
  const messageLabel = document.getElementById('trackMessageLabel');
  const step2Icon = document.getElementById('step2Icon');
  const step3Icon = document.getElementById('step3Icon');

  if (displayCard) displayCard.style.display = 'block';

  if (localMatch) {
    if (statusBadge) {
      statusBadge.textContent = localMatch.status;
      statusBadge.className = 'badge badge-gold';
    }
    if (refLabel) refLabel.textContent = `Ref #${localMatch.refCode}`;
    if (dateLabel) dateLabel.textContent = `Submitted: ${localMatch.date}`;
    if (titleLabel) titleLabel.textContent = `"${localMatch.title}"`;
    if (messageLabel) {
      messageLabel.textContent = `Your inquiry has been assigned to ${localMatch.assignedTo}. The scholarly response will be dispatched directly to ${localMatch.email} once textual verification is complete.`;
    }
    if (step2Icon) step2Icon.classList.remove('pending');
    if (step3Icon) step3Icon.classList.add('pending');
    showToast(`Status loaded for inquiry #${localMatch.refCode}`);
  } else if (code === 'AIR-2026-1048') {
    // Demo standard code
    if (statusBadge) {
      statusBadge.textContent = 'Under Review';
      statusBadge.className = 'badge badge-emerald';
    }
    if (refLabel) refLabel.textContent = 'Ref #AIR-2026-1048';
    if (dateLabel) dateLabel.textContent = 'Submitted: Today';
    if (titleLabel) titleLabel.textContent = '"Ruling on combined prayers during severe travel delay"';
    if (messageLabel) {
      messageLabel.textContent = 'Your inquiry has been assigned to Sheikh Hafiz Saleem Sanabili Madani. The scholarly response will be dispatched to your email address once verified against classical sources.';
    }
    if (step2Icon) step2Icon.classList.remove('pending');
    if (step3Icon) step3Icon.classList.add('pending');
    showToast('Status loaded: Under Scholarly Review');
  } else {
    // Generate active simulated status for any entered valid-format code
    if (statusBadge) {
      statusBadge.textContent = 'In Review';
      statusBadge.className = 'badge badge-emerald';
    }
    if (refLabel) refLabel.textContent = `Ref #${code}`;
    if (dateLabel) dateLabel.textContent = 'Submitted: Recently';
    if (titleLabel) titleLabel.textContent = '"Islamic Jurisprudence & Ethical Guidance Inquiry"';
    if (messageLabel) {
      messageLabel.textContent = 'Your submitted question is currently registered in our Fatwa Council queue and undergoing verification by AL-HUDA scholars.';
    }
    showToast(`Reference ${code} found in Fatwa Council queue.`);
  }
};

window.filterAnsweredFAQs = function() {
  const searchInput = document.getElementById('faqSearchInput');
  const catSelect = document.getElementById('faqCategoryFilter');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCat = catSelect ? catSelect.value : 'all';

  const cards = document.querySelectorAll('.qa-feed .qa-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    const cardText = card.textContent.toLowerCase();

    const matchesCat = (selectedCat === 'all' || cardCat.toLowerCase() === selectedCat.toLowerCase());
    const matchesQuery = (!query || cardText.includes(query));

    if (matchesCat && matchesQuery) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

/* ==========================================================================
   12. Dedicated Donations & Sadaqah Jariyah System
   ========================================================================== */
let currentDonationFrequency = 'one-time';

function initDonationsSystem() {
  // Sync amount input with presets
  const amountInput = document.getElementById('donationAmountInput');
  if (amountInput) {
    amountInput.addEventListener('input', () => {
      const val = parseInt(amountInput.value, 10);
      document.querySelectorAll('.amount-btn').forEach(btn => {
        const btnVal = parseInt(btn.textContent.replace(/[^\d]/g, ''), 10);
        if (btnVal === val) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });
  }
}

window.setDonationFrequency = function(freq) {
  currentDonationFrequency = freq;
  const btnOne = document.getElementById('btnFreqOneTime');
  const btnMonthly = document.getElementById('btnFreqMonthly');

  if (freq === 'one-time') {
    if (btnOne) btnOne.classList.add('active');
    if (btnMonthly) btnMonthly.classList.remove('active');
  } else {
    if (btnMonthly) btnMonthly.classList.add('active');
    if (btnOne) btnOne.classList.remove('active');
  }
};

window.selectDonationAmount = function(val, btnEl) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const amountInput = document.getElementById('donationAmountInput');
  if (!amountInput) return;

  if (val === 'custom') {
    amountInput.focus();
    amountInput.select();
  } else {
    amountInput.value = val;
  }
};

window.generateDonationReceipt = function() {
  const nameInput = document.getElementById('donorNameInput');
  const emailInput = document.getElementById('donorEmailInput');
  const causeSelect = document.getElementById('donationCauseSelect');
  const amountInput = document.getElementById('donationAmountInput');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const cause = causeSelect ? causeSelect.value : "General Islamic Research & Da'wah";
  const amount = amountInput ? parseInt(amountInput.value, 10) : 1000;

  if (!name) {
    showToast('Please enter your full name for the donation receipt.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (!email) {
    showToast('Please enter your email address to receive the official tax receipt.');
    if (emailInput) emailInput.focus();
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    showToast('Please enter a valid donation amount.');
    if (amountInput) amountInput.focus();
    return;
  }

  const receiptModal = document.getElementById('donationReceiptModal');
  const receiptNum = `ALH-REC-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const labelNum = document.getElementById('receiptNumberLabel');
  const labelName = document.getElementById('receiptDonorName');
  const labelEmail = document.getElementById('receiptDonorEmail');
  const labelCause = document.getElementById('receiptCause');
  const labelFreq = document.getElementById('receiptFrequency');
  const labelAmount = document.getElementById('receiptAmount');
  const labelDate = document.getElementById('receiptDate');

  if (labelNum) labelNum.textContent = receiptNum;
  if (labelName) labelName.textContent = name;
  if (labelEmail) labelEmail.textContent = email;
  if (labelCause) labelCause.textContent = cause;
  if (labelFreq) labelFreq.textContent = currentDonationFrequency === 'monthly' ? 'Monthly Sadaqah Jariyah' : 'One-Time Contribution';
  if (labelAmount) labelAmount.textContent = `₹${amount.toLocaleString('en-IN')} INR`;
  if (labelDate) labelDate.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (receiptModal) {
    receiptModal.classList.add('open');
  }

  showToast(`Receipt ${receiptNum} generated! Jazakum Allahu Khayran.`);
};

window.copyToClipboard = function(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
};

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(successMsg || 'Copied to clipboard!');
}

/* ==========================================================================
   12. Live Stream Countdown & Interactive Stream
   ========================================================================== */
function initLiveCountdown() {
  const timerEl = document.getElementById('liveCountdownTimer');
  if (!timerEl) return;

  let totalSeconds = (3 * 3600) + (42 * 60) + 15; // 3 hours 42 mins from now

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    timerEl.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

window.setReminder = function(eventTitle) {
  showToast(`Reminder set for "${eventTitle}"! A notification will sound 15 minutes before.`);
};

/* ==========================================================================
   13. Global Persistent Audio Bar (Bottom Player)
   ========================================================================== */
let globalAudioElement = new Audio();
let isAudioPlaying = false;

function initGlobalAudioBar() {
  const playBtn = document.getElementById('audioBarPlayBtn');
  const closeBtn = document.getElementById('audioBarCloseBtn');
  const progressBar = document.getElementById('audioProgressBar');
  const progressFill = document.getElementById('audioProgressFill');
  const currentTimeEl = document.getElementById('audioCurrentTime');
  const totalTimeEl = document.getElementById('audioTotalTime');

  if (playBtn) {
    playBtn.addEventListener('click', toggleGlobalAudio);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      globalAudioElement.pause();
      isAudioPlaying = false;
      document.getElementById('globalAudioBar').classList.remove('active');
    });
  }

  globalAudioElement.addEventListener('timeupdate', () => {
    if (!globalAudioElement.duration) return;
    const pct = (globalAudioElement.currentTime / globalAudioElement.duration) * 100;
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatAudioTime(globalAudioElement.currentTime);
    if (totalTimeEl) totalTimeEl.textContent = formatAudioTime(globalAudioElement.duration);
  });

  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      if (globalAudioElement.duration) {
        globalAudioElement.currentTime = pct * globalAudioElement.duration;
      }
    });
  }
}

function playGlobalTrack(track) {
  const bar = document.getElementById('globalAudioBar');
  const title = document.getElementById('audioBarTitle');
  const reciter = document.getElementById('audioBarReciter');
  const playBtn = document.getElementById('audioBarPlayBtn');

  if (title) title.textContent = track.title;
  if (reciter) reciter.textContent = track.reciter;
  if (bar) bar.classList.add('active');

  globalAudioElement.src = track.src;
  globalAudioElement.play().then(() => {
    isAudioPlaying = true;
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    showToast(`Now Playing: ${track.title}`);
  }).catch(() => {
    // If external stream blocked, simulate playback
    isAudioPlaying = true;
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    showToast(`Playing recitation: ${track.title}`);
  });
}

function toggleGlobalAudio() {
  const playBtn = document.getElementById('audioBarPlayBtn');
  if (isAudioPlaying) {
    globalAudioElement.pause();
    isAudioPlaying = false;
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    globalAudioElement.play();
    isAudioPlaying = true;
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
}

function formatAudioTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* ==========================================================================
   14. Universal Global Search (Ctrl + K / Search Icon)
   ========================================================================== */
function initGlobalSearch() {
  const searchTriggerBtn = document.getElementById('globalSearchBtn');
  const searchModal = document.getElementById('globalSearchModal');
  const searchInput = document.getElementById('universalSearchInput');
  const resultsContainer = document.getElementById('universalSearchResults');

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('open');
      if (searchInput) {
        searchInput.focus();
        renderResults(searchInput.value.trim());
      }
    }
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderResults(searchInput.value.trim());
    });
  }

  function renderResults(q) {
    if (!resultsContainer) return;
    if (!q) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--charcoal-400);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 8px;"></i>
          <p>Type keywords to search across Qur'an, Hadith, Articles, Videos, Courses, and Scholars.</p>
        </div>
      `;
      return;
    }

    const qLower = q.toLowerCase();
    let matches = [];

    // Articles
    articlesData.forEach(a => {
      if (a.title.toLowerCase().includes(qLower) || a.excerpt.toLowerCase().includes(qLower)) {
        matches.push({ type: 'Article', title: a.title, sub: a.author, action: () => openArticleModal(a.id) });
      }
    });

    // Videos
    videoPlatformData.forEach(v => {
      if (v.title.toLowerCase().includes(qLower) || v.speaker.toLowerCase().includes(qLower)) {
        matches.push({ type: 'Video', title: v.title, sub: v.speaker, action: () => openVideoPlayerModal(v.id) });
      }
    });

    // Scholars
    scholarsData.forEach(s => {
      if (s.name.toLowerCase().includes(qLower) || s.qualification.toLowerCase().includes(qLower)) {
        matches.push({ type: 'Scholar', title: s.name, sub: s.country, action: () => openScholarProfileModal(s.id) });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--charcoal-400);">
          No results found matching "<strong>${q}</strong>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map((m, idx) => `
      <div class="search-result-item" onclick="handleSearchResultClick(${idx})">
        <div>
          <span class="badge badge-gold" style="font-size: 0.6875rem; margin-bottom: 4px;">${m.type}</span>
          <div style="font-weight: 600; color: var(--charcoal-900);">${m.title}</div>
          <div style="font-size: 0.75rem; color: var(--charcoal-400);">${m.sub}</div>
        </div>
        <i class="fa-solid fa-chevron-right" style="color: var(--charcoal-400); font-size: 0.8125rem;"></i>
      </div>
    `).join('');

    window.searchMatchesCache = matches;
  }
}

window.handleSearchResultClick = function(index) {
  const match = window.searchMatchesCache && window.searchMatchesCache[index];
  if (match) {
    document.getElementById('globalSearchModal').classList.remove('open');
    match.action();
  }
};

/* ==========================================================================
   15. Bookmarks Drawer ("My List") Engine
   ========================================================================== */
let bookmarksList = JSON.parse(localStorage.getItem('alhuda_bookmarks') || '[]');

function initMyListDrawer() {
  const triggerBtn = document.getElementById('myListDrawerBtn');
  const drawer = document.getElementById('myListDrawer');
  const closeBtn = document.getElementById('myListDrawerClose');
  const countBadge = document.getElementById('myListCountBadge');

  if (countBadge) countBadge.textContent = bookmarksList.length;

  if (triggerBtn && drawer) {
    triggerBtn.addEventListener('click', () => {
      renderBookmarks();
      drawer.classList.add('open');
      document.getElementById('mobileNavOverlay').classList.add('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.getElementById('mobileNavOverlay').classList.remove('open');
    });
  }
}

function renderBookmarks() {
  const container = document.getElementById('myListItemsContainer');
  if (!container) return;

  if (bookmarksList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 16px; color: var(--charcoal-400);">
        <i class="fa-regular fa-bookmark" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p>Your saved list is currently empty.</p>
        <span style="font-size: 0.8125rem;">Bookmark ayahs, hadiths, videos, articles, and courses to review them here anytime.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = bookmarksList.map((item, idx) => `
    <div style="padding: 14px; background: var(--ivory-50); border: 1px solid var(--border-light); border-radius: var(--radius-sm); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <span class="badge badge-emerald" style="font-size: 0.65rem; text-transform: uppercase;">${item.type}</span>
        <div style="font-weight: 600; font-size: 0.875rem; color: var(--charcoal-900); margin-top: 4px;">${item.title}</div>
        <div style="font-size: 0.75rem; color: var(--charcoal-400);">${item.sub}</div>
      </div>
      <button onclick="removeBookmark(${idx})" style="color: var(--charcoal-400); padding: 6px; font-size: 0.9375rem;" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

window.bookmarkContent = function(type, title, sub) {
  const exists = bookmarksList.some(b => b.title === title);
  if (exists) {
    showToast(`"${title}" is already in your saved list.`);
    return;
  }

  bookmarksList.push({ type, title, sub: sub.slice(0, 70), date: new Date().toLocaleDateString() });
  localStorage.setItem('alhuda_bookmarks', JSON.stringify(bookmarksList));
  
  const badge = document.getElementById('myListCountBadge');
  if (badge) badge.textContent = bookmarksList.length;

  showToast(`Added to your saved list: "${title}"`);
};

window.removeBookmark = function(idx) {
  bookmarksList.splice(idx, 1);
  localStorage.setItem('alhuda_bookmarks', JSON.stringify(bookmarksList));
  renderBookmarks();
  const badge = document.getElementById('myListCountBadge');
  if (badge) badge.textContent = bookmarksList.length;
  showToast("Item removed from your saved list.");
};

/* ==========================================================================
   16. Authentication & User Profile Modal
   ========================================================================== */
function initAuthModals() {
  const loginBtn = document.getElementById('headerLoginBtn');
  const joinBtn = document.getElementById('headerJoinBtn');
  const authModal = document.getElementById('authModal');
  const authForm = document.getElementById('authForm');
  const tabLogin = document.getElementById('authTabLogin');
  const tabRegister = document.getElementById('authTabRegister');
  const authSubmitBtn = document.getElementById('authSubmitBtn');

  function openAuth(mode = 'login') {
    if (!authModal) return;
    authModal.classList.add('open');
    if (mode === 'login') {
      tabLogin.classList.add('active');
      tabRegister.classList.remove('active');
      authSubmitBtn.textContent = 'Login to Al-Huda';
    } else {
      tabRegister.classList.add('active');
      tabLogin.classList.remove('active');
      authSubmitBtn.textContent = 'Create Student Account';
    }
  }

  if (loginBtn) loginBtn.addEventListener('click', () => openAuth('login'));
  if (joinBtn) joinBtn.addEventListener('click', () => openAuth('register'));

  if (tabLogin) tabLogin.addEventListener('click', () => openAuth('login'));
  if (tabRegister) tabRegister.addEventListener('click', () => openAuth('register'));

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('authEmail').value.trim();
      const name = email.split('@')[0];
      authModal.classList.remove('open');
      showToast(`Welcome to Al-Huda, ${name}! Your learning portal is active.`);
      if (loginBtn) {
        loginBtn.innerHTML = `<i class="fa-solid fa-user-check"></i> ${name}`;
      }
    });
  }
}

/* ==========================================================================
   17. Common Modal Backdrop Closes
   ========================================================================== */
function initModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) modal.classList.remove('open');
    });
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-400);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   Campus, Dars & Community Gallery Engine
   ========================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        items.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  const lightboxModal = document.getElementById('imageLightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  if (closeBtn && lightboxModal) {
    closeBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('open');
    });
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('open');
      }
    });
  }
}

window.openLightbox = function(src, title, subtitle) {
  const modal = document.getElementById('imageLightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const subEl = document.getElementById('lightboxSub');
  if (!modal || !img) return;

  img.src = src;
  if (titleEl) titleEl.textContent = title || '';
  if (subEl) subEl.textContent = subtitle || '';
  modal.classList.add('open');
};

