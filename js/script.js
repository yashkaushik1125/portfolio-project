
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function mousetf(){
    var xscale=1;
    var yscale=1;
    var xprev=0; var yprev=0;
    window.addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.5,1.5,dets.clientX-xprev);
        yscale=gsap.utils.clamp(0.5,1.5,dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;

       timeout= setTimeout(function(){
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale( 1,1 )`;
    },100);
       })
       minicircle(xscale,yscale);
    }


mousetf();




function minicircle(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px ) scale( ${xscale}, ${yscale})`;
    });
}


function firstpageanim(){
    

    var tl =gsap.timeline();

    tl.from("#nav",{
        y:'-40',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
        
    })
    .to(".vani",{
        y:0,
        opacity:1,
        duration:1,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1
    })

    .from("#footer", {
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })

}
function imgmove(){
    document.querySelectorAll(".elem").forEach(function(elem){
        var rotate=0;var diffrot=0;
        elem.addEventListener("mousemove",function(dets){
            var diff= dets.clientY-elem.getBoundingClientRect().top;
            console.log(diff);
            gsap.to(elem.querySelector("img"),{
                opacity:1,
                top:diff-70,
                left: dets.clientX-110,
                ease: Power4
            })
        })

        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.querySelector("img"),{
                opacity: 0,
                ease: Power3,
                
            })
        })
    });
    
    
}


firstpageanim();
imgmove();