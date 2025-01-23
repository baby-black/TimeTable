const translations = {
  vn: null,
  en: null
};

// Tải file ngôn ngữ
async function loadLanguage(lang) {
  try {
    const response = await fetch(`./assets/lang/lang-${lang}.json`);
    if (!response.ok) throw new Error("Không thể tải file ngôn ngữ");
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return {};
  }
}

// Áp dụng ngôn ngữ
function applyLanguage(langData) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (langData[key]) {
      el.textContent = langData[key];
    }
  });
}

// Chuyển ngôn ngữ
async function switchLanguage(lang) {
  if (!translations[lang]) {
    translations[lang] = await loadLanguage(lang);
  }
  applyLanguage(translations[lang]);
}

// Kết nối nút chuyển ngôn ngữ
document.getElementById("btn-vn").addEventListener("click", () => switchLanguage("vn"));
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));
