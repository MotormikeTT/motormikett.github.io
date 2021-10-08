$(function () {
  // Get the container element
  var btns = document.querySelectorAll(".skill-card li");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var currentImgs = document.querySelectorAll(".skill-card li img.hidden");

      var currentDivs = document.querySelectorAll(
        ".skill-card li div:not(.hidden)"
      );
      // If there's no active class
      if (currentImgs.length > 0 && currentDivs.length > 0) {
        $(currentImgs[0]).toggleClass("hidden");
        $(currentDivs[0]).toggleClass("hidden");
      }
      var img = $(this.children[0]);
      var div = $(this.children[1]);
      img.toggleClass("hidden");
      div.toggleClass("hidden");
    });
  }
});
