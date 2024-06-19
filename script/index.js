gsap.registerPlugin(ScrollTrigger,TextPlugin)

// Cursor //
const mainEl = document.querySelector('body');
mainEl.addEventListener('mousemove', function(dets){
    gsap.to('#cursor', {
        x: dets.x - 6,
        y: dets.y -7,
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

// gsap.to('.experiment-sec h1', {
//     color: 'white',
//     transform: 'translateX(-50%)',
//     scrollTrigger: {
//         trigger: '.experiment-sec',
//         scroller: 'body',
//         start: 'top 0%',
//         end: 'top -100%',
//         scrub: 3,
//         pin: true,
//         onEnter: () => { getLight() },
//         onLeaveBack: () => { getDark() }
//     }
// })



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
    y: 50   ,
    duration: 0.3,
    opacity: 0,
    stagger: 0.03
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

// gsap.from('.wanna-know', {
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '#experience-sec',
//         scroller: 'body',
//         start: 'top 30%',
//         end: 'top -100%',
//         scrub: 3,
//         pin: true,
//         onEnter: () => { getLight() },
//         onEnterBack: () => { getLight() },
//         onLeaveBack: () => { getDark() }
//     }
// })
let its_me = document.querySelector(".my-img");
const its_me_animation = gsap.to('.its_me', {
    paused: true,
    scale: 1.3,
    rotate: -30,
    duration: 2
})


its_me.addEventListener("mouseenter", () => its_me_animation.play());
its_me.addEventListener("mouseleave", () => its_me_animation.reverse());



const getLight = () => {
    document.documentElement.style.setProperty('--color-primary', '#000');
    document.documentElement.style.setProperty('--color-secondary', '#fff');
    gsap.to('body', {
        backgroundColor: 'white',
        color: 'black',
        duration: 3,
        overwrite: 'auto'
    })
}
const getDark = () => {
    document.documentElement.style.setProperty('--color-primary', '#fff');
    document.documentElement.style.setProperty('--color-secondary', '#000');
    gsap.to('body', {
        backgroundColor: 'black',
        color: 'white',
        duration: 2,
        overwrite: 'auto'
    })
}

// var path = `M 10 100 Q 500 100 990 100`;
// var finalPath = `M 10 100 Q 500 100 990 100`;

// var string = document.querySelector('#string')

// string.addEventListener("mousemove", function(dets) {
//     console.log(document.querySelector('#string'))
//     path = `M 10 100 Q 500 ${dets.y - 200} 990 100`    
//     console.log(dets)
//     gsap.to('#string svg path', {
//         attr: { d: path },
//         duration: 0.3,
//         ease: 'power3.out'
//     })
// })
// string.addEventListener("mouseleave", function() {
//     console.log('Leaved')
//     gsap.to("#string svg path", {
//         attr: { d: finalPath },
//         duration: 1.5,
//         ease: 'elastic.out(1, 0.2)'
//     })
// })


// Experience Section
const container = document.querySelector(".experience-containr");
const sections = gsap.utils.toArray(".experience-section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

gsap.from('.experience-text', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.experience-text',
        start: 'top 60%',
        end: 'top 30%',
        scrub: 2,
        onEnter: getLight,
        onLeaveBack: getDark

    }
})

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".experience-container",
    pin: true,
    scrub: 1,
    // start: 'top 30%',
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    onEnterBack: getLight
  }
});

//Progress bar animation
gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      horizontal: true,
      scrub: true
    }
  });
});

// Project Section
// ScrollTrigger.create({
// 	trigger:".gallery",
// 	start:"top top",
// 	end:"bottom bottom",
// 	pin:".right"
// })

// const details = gsap.utils.toArray(".details");
// details.forEach((detail) => {
//     let val = detail.querySelector('.detail_value');

//     console.log(val.textContent);

//     if (val.length === 0) return

//     gsap.from(val, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: detail,
//         start: 'top top',
//         end: '+100%',
//         scrub: 2,
//         markers: true
//     }
//     })
// })

// ScrollTrigger.create({
//     trigger:".contact-form",
// 	start:"top 20%",
//     end: '+=1000',
//     markers: true,
//     onEnter: getDark
// })

gsap.to('.contact-container', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 10%',
        onEnter: getDark,
        onEnterBack: getLight,
    }
})