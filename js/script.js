const title = document.querySelector("body");
const navItem = document.querySelector(".navbar-nav");
const logo = document.querySelector(".logo");


var mobile = window.matchMedia("(max-width: 575.98px)");
var tab = window.matchMedia("(max-width: 991.92px)");
mobileViewport(mobile);
mobileViewport(tab);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
navItem.addEventListener("click", function() {
    title.style.overflow = "visible";
});

function mobileViewport(mobile) {
    if (mobile.matches) { // If media query matches
        logo.setAttribute("src", "images/logo-title.png")
        $(".carousel").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".about").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".service").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".portoTitle").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".card").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".logo-porto").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".col-lg-4").removeAttr("data-aos", "data-aos-anchor-placement");
        $(".col-lg-8").removeAttr("data-aos", "data-aos-anchor-placement");
        return true;
        
    }
}
  

$(window).scroll(function() {
    var s = $(this).scrollTop();
    if(s <= 50) {
        var mobile = window.matchMedia("(max-width: 575.98px)")
        if(!mobileViewport(mobile)) {
            if(!mobileViewport(tab)) {
                logo.setAttribute("src", "images/logo-white-2.png")
            }    
        }   
    }
    else {
        logo.setAttribute("src", "images/logo-title.png")
        
    }
    
})

AOS.init({
    duration: 1000,
  })



