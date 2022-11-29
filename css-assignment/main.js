window.addEventListener("load", () => {
  let bars = document.querySelector(".navBars");
  let cross = document.querySelector(".navCross");
  let navBarButton = document.querySelector(".navBarMobile");
  let sideNav = document.querySelector(".navLinksFlexMobile");

  navBarButton.addEventListener("click", function () {
    if (bars.style.display == "flex") {
      bars.style.display = "none";
      cross.style.display = "flex";
      sideNav.style.left = 0;
    } else {
      bars.style.display = "flex";
      cross.style.display = "none";
      sideNav.style.left = "-80%";
    }
  });
});
