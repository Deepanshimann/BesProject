
function navAnimation(){
    var nav = document.querySelector("nav h4");
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
//page 2 Animation
function page2imageAnimation(){
    var rightElems=document.querySelectorAll(".right-elem")
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        elem.addEventListener("mousemove",function(dets){
         gsap.to(elem.childNodes[3],{
    x:dets.x-elem.getBoundingClientRect().x-90,
    y:dets.y-elem.getBoundingClientRect().y-130
         })
        })
    })
}

function page3VideoAnimation(){
    var page3Center=document.querySelector(".page3-center")
    var video=document.querySelector("#page3 video")
    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}

var sec1=document.querySelectorAll(".sec-right")
sec1.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})
navAnimation()
page2imageAnimation()
page3VideoAnimation()


