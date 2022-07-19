function mobileMenu() {
  const x = document.getElementById("listinfo");
  const icon = document.getElementById("menu-icon");
  if (x.style.display === "block") {
    icon.innerHTML = '<i class="fa fa-bars 2x"></i>';
    x.style.display = "none";
  } else {
    icon.innerHTML = '<i class="fa fa-times-circle"></i>';
    x.style.display = "block";
  }
}
const element = document.getElementById("menu-icon");
element.addEventListener("click", mobileMenu);
