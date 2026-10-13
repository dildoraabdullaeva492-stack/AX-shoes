const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("active");
});
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    cards.forEach((card) => {
      const show =
        btn.dataset.filter === "all" || card.dataset.cat === btn.dataset.filter;
      card.classList.toggle("hide", !show);
    });
  });
});
const cartCount = document.querySelector(".cart-count");
let total = 0;
document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount.textContent = ++total;
    btn.textContent = "Qo'shildi ✓";
    btn.classList.add("done");
    setTimeout(() => {
      btn.textContent = "Savatga";
      btn.classList.remove("done");
    }, 1500);
  });
});
document
  .querySelectorAll(".like-btn")
  .forEach((btn) =>
    btn.addEventListener("click", () => btn.classList.toggle("liked"))
  );
const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((e) => e.isIntersecting)
      .forEach((e) => {
        e.target.classList.add("seen");
        observer.unobserve(e.target);
      });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".pic").forEach((p) => observer.observe(p));
document.querySelectorAll(".pic img").forEach((img) => {
  img.addEventListener("error", () =>
    img.parentElement.classList.add("broken")
  );
});
const sendBtn = document.querySelector(".contact-form button");
if (sendBtn)
  sendBtn.addEventListener("click", (e) => {
    if (!sendBtn.form.checkValidity()) return;
    e.preventDefault();
    sendBtn.textContent = "Yuborildi ✓";
    sendBtn.form.reset();
  });
