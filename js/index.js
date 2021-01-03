$(document).ready(function () {
  /*SIDEBAR MENU JS START*/
  // $(".button-left").click(function () {
  //   $(".sidebar-mini").toggleClass("sidebar-collapse");
  // });

  /*RESPONSIVE SIDEBAR FOR MOBILE DEVICE START*/
  // function myFunction(x) {
  //   if (x.matches) {
  //     // If media query matches
  //     $(".sidebar-mini").toggleClass("sidebar-collapse");
  //     // $(".sidebar-mini").toggleClass("sidebar-bg");
  //     // $(".layout-margin").toggleClass("side-layout-margin");
  //   }
  // }
  // var x = window.matchMedia("(max-width: 575.98px)");
  // myFunction(x); // Call listener function at run time
  // x.addListener(myFunction); // Attach listener function on state changes
  /*RESPONSIVE SIDEBAR FOR MOBILE DEVICE END*/
  /*SIDEBAR MENU JS END*/

  /*SHOW OR HIDE PASSWORD START*/
  // $(".toggle-password").click(function () {
  //   $(this).toggleClass("fa-eye fa-eye-slash");
  //   var input = $($(this).attr("toggle"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //   } else {
  //     input.attr("type", "password");
  //   }
  // });
  /*SHOW OR HIDE PASSWORD END*/
  /*Update password button Hover Shadow start*/
  $(".btn-update").hover(
    function () {
      $(this).addClass("shadow").css("cursor", "pointer");
    },
    function () {
      $(this).removeClass("shadow");
    }
  );
  /*Update password button Hover Shadow end*/
  /*Login button Hover Shadow start*/
  $(".login100-form-btn").hover(
    function () {
      $(this).addClass("shadow").css("cursor", "pointer");
    },
    function () {
      $(this).removeClass("shadow");
    }
  );
  /*Login button Hover Shadow end*/
});
