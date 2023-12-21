// import "./scss/core.scss";
import "./css/gogle.css";
import "./css/core.css";


// add nav link click event
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navbar-link").forEach((nav:Element) => {
    nav.addEventListener("click", function () {
      const dropdown = nav.parentNode?.querySelector(".navbar-dropdown");
      dropdown?.classList.toggle('show')
    })
  })
})