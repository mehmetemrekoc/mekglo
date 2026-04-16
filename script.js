const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const mailForm = document.querySelector("[data-mail-form]");

if (mailForm) {
  mailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(mailForm);
    const values = Object.fromEntries(formData.entries());
    const subject = `Teklif Talebi - ${values.firma || "MEK Global Lojistik Web Sitesi"}`;
    const body = [
      "Yeni teklif talebi",
      "",
      `Ad Soyad: ${values.adSoyad || ""}`,
      `Firma Adi: ${values.firma || ""}`,
      `Telefon: ${values.telefon || ""}`,
      `E-posta: ${values.eposta || ""}`,
      `Hizmet Turu: ${values.hizmet || ""}`,
      `Hat / Guzergah: ${values.hat || ""}`,
      "",
      "Yuk Detayi:",
      values.detay || "",
      "",
      "Bu talep MEK Global Lojistik web sitesi teklif formu uzerinden olusturulmustur."
    ].join("\n");

    window.location.href = `mailto:emre@mekglo.com.tr?cc=mert.mekglo@gmail.com,infomekglo@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}