$(window).on("load", function () {
  $(".loder .inner").fadeOut(500, function () {
    $(".loder").fadeOut(750);
  });
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});
$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });
  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Student."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    item: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      760: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 250) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        Linewidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }
  });

  // $(".counter").countup(200);

  // protfolio
  $("[data-fancybox]").fancybox();

  // move upper section due to images overlap sometimes

  // $(".items").isotope({
  //   filter: "*",
  //   animationOptions: {
  //     duration: 1500,
  //     easing: "linear",
  //     queue: false,
  //   },
  // });
  // selections
  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");
    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: "selector",
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
  // $("#filters a").click(function () {
  //   $("#filters .current").removeClass("current");
  //   $(this).addClass("current");
  //   var selector = $(this).attr("data-filter");

  //   $(".items").isotope({
  //     filter: "selector",
  //     animationOptions: {
  //       duration: 1500,
  //       easing: "linear",
  //       queue: false,
  //     },
  //   });
  //   return false;
  // });
  $("#navigation li a").click(function (e) {
    e.preventDefault();
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // nav bar
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
