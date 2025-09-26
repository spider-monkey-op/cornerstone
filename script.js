$(document).ready(function() {
    let sideNav = document.getElementById("sideNav")
    let menu = document.getElementById("menu")
    $("span").addClass("closed");
    $("span").click(function() {
        if ($("span").hasClass("closed")) {
            $(".meow").show(sideNavClickOn());
            $("span").removeClass("closed");

        }
        else {
            sideNavClickOff();
            $("span").removeClass("open");
            $("span").addClass("closed");
        }
    });

    function sideNavClickOn() {
        $(".notSideNav").css("opacity", ".4");
        $(".meow").animate({
            right: "0"
        },200);
        $("span").addClass("open");

    }
    
    $(".close").click(function() {
        $(".notSideNav").css("opacity", "1");
        sideNavClickOff()
        $("span").removeClass("open");
        $("span").addClass("closed");
    })
    function sideNavClickOff(){
        $(".meow").animate({
            right: "-600"
        },200);
    }
    document.onclick = function(e) {
        if(!sideNav.contains(e.target) && !menu.contains(e.target)) {
            sideNavClickOff();
            $("span").removeClass("open");
            $("span").addClass("closed");
            $(".notSideNav").css("opacity", "1");
        }
    }
    if (1) {

    }
})
