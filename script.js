document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/\b\w/g, char => char.toUpperCase());
  });

  document.getElementById('message').addEventListener('input', function () {
    let value = this.value;
    this.value = value.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
  });

const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");

menuToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
});