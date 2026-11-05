
// PAGE NAVIGATION

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  document.getElementById("navLinks").classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// MOBILE MENU

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

// ACCESSIBILITY: HIGH CONTRAST

function toggleContrast() {
  document.body.classList.toggle("high-contrast");

  const enabled = document.body.classList.contains("high-contrast");

  document.querySelector(".access-btn").setAttribute(
    "aria-pressed",
    String(enabled)
  );
}

// SAFETY GUIDES
// Initial educational content; verify against official local guidance before publication.

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

function openGuide(type) {
  const guide = safetyGuides[type];

  if (!guide) return;

  document.getElementById("guideTitle").textContent = guide.title;

  document.getElementById("guideContent").innerHTML = `
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

  document.getElementById("guideModal").classList.add("open");
  document.getElementById("guideModal").querySelector(".close-btn").focus();
}

// CLOSE GUIDE

function closeGuide() {
  document.getElementById("guideModal").classList.remove("open");
}

// CLOSE MODAL BY CLICKING OUTSIDE

document.getElementById("guideModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeGuide();
  }
});

// CLOSE MODAL WITH ESCAPE

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeGuide();
  }
});
