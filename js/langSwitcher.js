// js/langSwitcher.js

async function loadTranslations(lang) {
  try {
    const response = await fetch(`../json/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
    return await response.json();
  } catch (e) {
    console.error(e);
    return {};
  }
}

async function applyTranslations(lang) {
  const translations = await loadTranslations(lang);
  if (!translations || Object.keys(translations).length === 0) {
    console.warn(`No translations found for language: ${lang}`);
    return;
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
  document.documentElement.lang = lang;
  console.log(`Applied translations for: ${lang}`);
}

function setupLanguageSwitcher() {
  const langEnButton = document.getElementById("lang-en");
  const langDeButton = document.getElementById("lang-de");

  if (!langEnButton || !langDeButton) {
    console.error("Language buttons not found in DOM");
    return;
  }

  langEnButton.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    applyTranslations("en");
  });

  langDeButton.addEventListener("click", () => {
    localStorage.setItem("lang", "de");
    applyTranslations("de");
  });

  const savedLang = localStorage.getItem("lang") || "en";
  applyTranslations(savedLang);
}

// Export the setup function if using modules (optional)
// export { setupLanguageSwitcher };

// Or just call setupLanguageSwitcher on DOMContentLoaded
document.addEventListener("DOMContentLoaded", setupLanguageSwitcher);
