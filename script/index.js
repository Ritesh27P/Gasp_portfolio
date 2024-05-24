gsap.registerPlugin(ScrollTrigger,TextPlugin)

// Cursor //
const mainEl = document.querySelector('main');
mainEl.addEventListener('mousemove', function(dets){
    gsap.to('#cursor', {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: 'back.out'
    })
})

// let sections = gsap.utils.toArray(".panel");

// gsap.to('.horizonal_scroll', {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".container1",
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: () => "+=" + document.querySelector(".container1").offsetWidth
//     }
// });

gsap.to('.experiment-sec h1', {
    color: 'white',
    transform: 'translateX(-50%)',
    scrollTrigger: {
        trigger: '.experiment-sec',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        pin: true
    }
})

// gsap.to('.experiment-text', {
//     y: 100,
//     scrollTrigger: {
//         trigger: '.experiment-sec',
//         scroller: 'body',
//         start: 'top 90%',
//         end: 'top 10%',
//         markers: true,
//         onEnter: () => { getLight() },
//         onLeave: () => { getDark() }
//     }
// })
// gsap.to('body', {
//     backgroundColor: 'white',
//     color: 'black',
//     scrollTrigger: {
//         trigger: '.about-sec',
//         scroller: 'body',
//         markers: true,
//         start: 'top start',
//         end: 'top bottom',
//         scrub: 2
//     }
// })

const tl1 = gsap.timeline({});
tl1.from('.nav-link', {
    y: 20,
    duration: 1,
    stagger: 0.2,
    opacity: 0
})
tl1.from(".char", {
    x: 50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.05
})
tl1.from('.hero-info', {
    y: 50,
    duration: 0.3,
    opacity: 0
})
tl1.from('.explore-text', {
    y: 20,
    duration: 0.2,
    opacity: 0
})
tl1.from('.explore-symbol', {
    y: 20,
    duration: 1,
    opacity: 0,
    rotate: 180
})
tl1.from('.hero-img', {
    y: 30,
    duration: 3,
    opacity: 0
})
tl1.to('.img-div', {
    y: 30,
    duration: 3,
    yoyo: true,
    repeat: -1
})


const tl2 = new TimelineLite({paused: true, reversed: true});

tl2
  .to('.upper', 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
  .to('.middle', 0.5, {autoAlpha: 0}, 'start')
  .to('.lower', 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

  document.querySelector('.hamburger').addEventListener('click', function(){
  tl.reversed() ? tl.play() : tl.reverse();
})


const getLight = () => {
    document.documentElement.style.setProperty('--color-primary', '#000');
    document.documentElement.style.setProperty('--color-secondary', '#fff');
}
const getDark = () => {
    document.documentElement.style.setProperty('--color-primary', '#fff');
    document.documentElement.style.setProperty('--color-secondary', '#000');
}

var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector('#string')

string.addEventListener("mousemove", function(dets) {
    console.log(document.querySelector('#string'))
    path = `M 10 100 Q 500 ${dets.y - 200} 990 100`    
    console.log(dets)
    gsap.to('#string svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    })
})
string.addEventListener("mouseleave", function() {
    console.log('Leaved')
    gsap.to("#string svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: 'elastic.out(1, 0.2)'
    })
})

