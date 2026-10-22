(function () {
  const toggle = document.querySelector(".menu-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const backdrop = document.querySelector(".menu-backdrop");

  if (!toggle || !drawer || !backdrop) return;

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    drawer.hidden = !open;
    backdrop.hidden = !open;

    if (open) {
      const firstLink = drawer.querySelector("a");
      if (firstLink) firstLink.focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", function () {
    setMenu(!document.body.classList.contains("menu-open"));
  });

  backdrop.addEventListener("click", function () {
    setMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (!document.body.classList.contains("menu-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = drawer.querySelectorAll("a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
