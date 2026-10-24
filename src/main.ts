import "./style.css";

const toggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
const nav = document.querySelector<HTMLElement>("#nav");

if (toggle && nav) {
  const setMenu = (open: boolean): void => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  // Abrir o cerrar con el botón
  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Cerrar al pulsar cualquier enlace del menú
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  // Cerrar si la pantalla pasa a tamaño escritorio
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}