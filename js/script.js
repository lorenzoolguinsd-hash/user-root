// Interacciones pequeñas del sitio USER:ROOT.
document.addEventListener("DOMContentLoaded", () => {
  // Cierra el menú hamburguesa después de elegir una sección en dispositivos móviles.
  const menu = document.getElementById("menuPrincipal");
  const menuLinks = document.querySelectorAll("#menuPrincipal .nav-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && menu.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(menu);
        collapse.hide();
      }
    });
  });

  // El formulario es demostrativo: valida el correo y muestra una respuesta sin enviar datos.
  const form = document.getElementById("newsletterForm");
  const email = document.getElementById("email");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    feedback.textContent = "¡Listo! La interacción funciona como demostración académica.";
    feedback.classList.add("success-message");
    form.reset();
  });
});
