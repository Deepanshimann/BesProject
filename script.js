document.addEventListener("DOMContentLoaded", function() {
    navAnimation();
});
function navAnimation(){
    var nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function() {
        let tl = gsap.timeline();
        tl.to(".nav-bottom", {
            height: "21vh"
        });
        tl.to(".nav-part2 h5", {
            opacity: 1,
            visibility: 'visible',
            duration: 0.3
        });
        tl.to(".nav-part2 h5 span", {
            y: 0,
            duration: 0.3,
            stagger: {
                amount: 0.6
            }
        });
    });
    nav.addEventListener("mouseleave", function() {
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
            y: 25,
            duration: 0.3,
            stagger: {
                amount: 0.2
            }
        });
        tl.to(".nav-part2 h5", {
            opacity: 0,
            visibility: 'hidden',
            duration: 0.1
        });
        tl.to(".nav-bottom", {
            height: 0,
            duration: 0.05,
            transition:"all ease 0.1s"
        });
    });  
}
