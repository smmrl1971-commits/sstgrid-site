const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-button");
const links = document.querySelectorAll(".nav-links a");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

links.forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("lead-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "");
  const company = String(data.get("company") || "");
  const email = String(data.get("email") || "");
  const employees = String(data.get("employees") || "");
  const subject = encodeURIComponent("Solicitação de demonstração — SST Grid");
  const body = encodeURIComponent(
    "Olá, gostaria de conhecer o SST Grid.\n\n" +
    "Nome: " + name + "\n" +
    "Empresa: " + company + "\n" +
    "E-mail: " + email + "\n" +
    "Quantidade de funcionários: " + employees + "\n"
  );
  window.location.href = "mailto:comercial@sstgrid.com.br?subject=" + subject + "&body=" + body;
});
