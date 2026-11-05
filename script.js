
// =====================================
// SAFE-HORIZON | MAIN JAVASCRIPT
// =====================================


// PAGE NAVIGATION

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// MOBILE MENU

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.toggle("open");
}


// ACCESSIBILITY: HIGH CONTRAST

function toggleContrast() {
  document.body.classList.toggle("high-contrast");

  const enabled = document.body.classList.contains("high-contrast");

  const contrastButton = document.querySelector(
    '[aria-label="Toggle high contrast"]'
  );

  if (contrastButton) {
    contrastButton.setAttribute("aria-pressed", String(enabled));
  }
}


// ACCESSIBILITY: FONT SIZE

let largeFont = false;

function changeFontSize() {
  largeFont = !largeFont;

  document.body.classList.toggle("large-text", largeFont);

  const fontButton = document.querySelector(
    '[aria-label="Change text size"]'
  );

  if (fontButton) {
    fontButton.setAttribute("aria-pressed", String(largeFont));
  }
}


// LANGUAGE SYSTEM

let currentLanguage = "en";

const translations = {
  ar: {
    home: "الرئيسية",
    dashboard: "استكشف الأرض",
    safety: "مركز السلامة",
    explore: "استكشف الأرض",
    safetyCenter: "مركز السلامة",
    eyebrow: "🌍 الوعي العالمي بالأرض",
    heading: "افهم كوكب الأرض.<br><span>كن مستعدًا.</span>",
    description: "استكشف المخاطر الطبيعية حول العالم، وافهم التغيرات البيئية، وتعلم كيف تحافظ على سلامتك عند حدوث الكوارث.",
    mission: "المعرفة هي الخطوة الأولى نحو السلامة.",
    missionDesc: "يجمع Safe-Horizon الوعي بالمخاطر الطبيعية والتعليم المتاح للجميع ومعلومات البيئة العالمية في منصة بسيطة.",
    dashHeading: "استكشف كوكبنا",
    dashDesc: "اكتشف المخاطر الطبيعية والأحداث البيئية.",
    safetyHeading: "مركز السلامة من الكوارث",
    safetyDesc: "تعلم كيفية الاستعداد والتصرف والبقاء على اطلاع.",
    emergency: "🆘 مساعدة الطوارئ",
    mapTitle: "خريطة المخاطر العالمية",
    eventsTitle: "أحدث الأحداث الطبيعية",
    earthquake: "الزلازل",
    volcano: "النشاط البركاني",
    flood: "الفيضانات",
    storm: "العواصف الشديدة",
    wildfire: "حرائق الغابات",
    cyclone: "الأعاصير"
  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  const button = document.getElementById("languageBtn");

  if (button) {
    button.textContent = currentLanguage === "ar" ? "English" : "عربي";
  }

  if (currentLanguage === "ar") {
    applyArabic();
  } else {
    location.reload();
  }
}

function applyArabic() {
  const t = translations.ar;

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  setText("heroEyebrow", t.eyebrow);

  const heading = document.getElementById("heroHeading");
  if (heading) heading.innerHTML = t.heading;

  setText("heroDesc", t.description);
  setText("missionHeading", t.mission);
  setText("missionDesc", t.missionDesc);
  setText("dashHeading", t.dashHeading);
  setText("dashDesc", t.dashDesc);
  setText("safetyHeading", t.safetyHeading);
  setText("safetyDesc", t.safetyDesc);
  setText("mapTitle", t.mapTitle);
  setText("eventsTitle", t.eventsTitle);

  setText("statEq", t.earthquake);
  setText("cardEqTitle", t.earthquake);
  setText("cardVolTitle", t.volcano);
  setText("cardFloodTitle", t.flood);
  setText("cardStormTitle", t.storm);
  setText("cardFireTitle", t.wildfire);
  setText("cardCycTitle", t.cyclone);

  document.querySelectorAll(".emergency-btn").forEach(button => {
    button.textContent = t.emergency;
  });

  const nav = document.querySelectorAll("#navLinks a");

  if (nav.length >= 3) {
    nav[0].textContent = t.home;
    nav[1].textContent = t.dashboard;
    nav[2].textContent = t.safety;
  }

  document.querySelectorAll(".hero-buttons button").forEach((button, index) => {
    button.textContent = index === 0 ? t.explore : t.safetyCenter;
  });
}


// =====================================
// SAFETY GUIDES
// =====================================

const safetyGuides = {
  earthquake: {
    title: "Earthquake Safety",
    before: "Prepare an emergency plan, identify safer places in each room, and secure heavy furniture.",
    during: "If indoors, Drop, Cover, and Hold On. Stay away from windows. If outside, move to an open area away from buildings and power lines.",
    after: "Check for injuries and hazards. Expect aftershocks, follow official instructions, and avoid damaged buildings."
  },

  volcano: {
    title: "Volcanic Activity Safety",
    before: "Learn local evacuation routes and monitor official volcano observatory updates.",
    during: "Follow evacuation orders immediately. If ash is falling, stay indoors when possible and follow official respiratory protection guidance.",
    after: "Return only when authorities say it is safe. Avoid ash-covered areas and follow public health advice."
  },

  flood: {
    title: "Flood Safety",
    before: "Know your local flood risk, prepare an emergency kit, and monitor weather alerts.",
    during: "Move to higher ground when instructed. Never walk or drive through floodwater.",
    after: "Return only when authorities say it is safe. Avoid floodwater and report damaged utilities to the appropriate authorities."
  },

  storm: {
    title: "Severe Storm Safety",
    before: "Monitor official weather warnings and identify a sturdy indoor shelter.",
    during: "Stay indoors and away from windows. Follow local emergency alerts and instructions.",
    after: "Avoid fallen power lines, damaged structures, and flooded areas. Wait for official updates."
  },

  wildfire: {
    title: "Wildfire Safety",
    before: "Know evacuation routes, prepare essential supplies, and monitor local fire and weather alerts.",
    during: "Follow evacuation orders promptly. Keep away from active fire areas and follow official air-quality advice.",
    after: "Do not return until authorities confirm the area is safe. Watch for changing conditions and damaged infrastructure."
  },

  cyclone: {
    title: "Cyclone Safety",
    before: "Know your evacuation zone, prepare essential supplies, and monitor official cyclone warnings.",
    during: "Follow evacuation instructions. If sheltering, stay in a strong building away from windows and continue monitoring official updates.",
    after: "Remain in a safe location until authorities allow return. Avoid floodwater and damaged buildings."
  }
};


// OPEN GUIDE

let lastGuideTrigger = null;

function openGuide(type) {
  const guide = safetyGuides[type];

  if (!guide) return;

  const modal = document.getElementById("guideModal");
  const title = document.getElementById("guideTitle");
  const content = document.getElementById("guideContent");

  if (!modal || !title || !content) return;

  lastGuideTrigger = document.activeElement;

  title.textContent = guide.title;

  content.innerHTML = `
    <div class="guide-section">
      <h3>1. Before the event</h3>
      <p>${guide.before}</p>
    </div>

    <div class="guide-section">
      <h3>2. During the event</h3>
      <p>${guide.during}</p>
    </div>

    <div class="guide-section">
      <h3>3. After the event</h3>
      <p>${guide.after}</p>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  const closeButton = modal.querySelector(".close-btn");
  if (closeButton) closeButton.focus();
}


// CLOSE GUIDE

function closeGuide() {
  const modal = document.getElementById("guideModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (lastGuideTrigger) {
    lastGuideTrigger.focus();
  }
}


// CLOSE GUIDE BY CLICKING OUTSIDE

document.getElementById("guideModal")?.addEventListener("click", function(event) {
  if (event.target === this) {
    closeGuide();
  }
});


// =====================================
// EMERGENCY MODE
// =====================================

function emergencyMode() {
  const panel = document.getElementById("emergencyPanel");

  if (!panel) return;

  panel.style.display = "flex";
  panel.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  const closeButton = panel.querySelector(".close-emergency");

  if (closeButton) closeButton.focus();
}

function closeEmergency() {
  const panel = document.getElementById("emergencyPanel");

  if (!panel) return;

  panel.style.display = "none";
  panel.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


// KEYBOARD SUPPORT

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeGuide();
    closeEmergency();
  }
});


// CLOSE EMERGENCY PANEL BY CLICKING OUTSIDE

document.getElementById("emergencyPanel")?.addEventListener("click", function(event) {
  if (event.target === this) {
    closeEmergency();
  }
});

