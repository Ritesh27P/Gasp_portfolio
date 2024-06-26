gsap.registerPlugin(ScrollTrigger,TextPlugin)

// Cursor //
const mainEl = document.querySelector('body');
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function(){
    gsap.set(cursor, {
        ease: 'power1.out',
        duration: 12,
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

cursorScale.forEach(link => {
  link.addEventListener('mousemove', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
})


// Scroll Function
function scrollToFn(idName) {
    console.log(idName);
    if (idName === 'about') {

        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        })

    } else {
        
        document.getElementById(idName).scrollIntoView({ 
            behavior: 'smooth' 
        });

    }
}

// About Section
gsap.from('.about-el', {
    y: 150,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    duration: 0.8,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 40%',
        // markers: true
    }
})

// document.querySelectorAll(".nav-link").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//     });
// });

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
tl1.from('.upper-svg', {
    y: -150,
    duration: 0.5,
    opacity: 0,
    // ease: 'elastic.in'
})
tl1.to('.hero-title', {
    rotate: -1,
    duration: .8,
    ease: 'elastic.out'
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
    document.documentElement.style.setProperty('--color-primary', '#0C1844');
    document.documentElement.style.setProperty('--color-secondary', '#F7F9F2');
    gsap.to('body', {
        backgroundColor: '#F7F9F2',
        color: '#0C1844',
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


gsap.set('.photo:not(:first-child)', { opacity: 1, scale: 1, y: '100%' })
const animation = gsap.to('.photo:not(:first-child)', {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 1,
    y: '0%',
})

ScrollTrigger.create({
    trigger: '.gallery',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.right',
    animation: animation,
    scrub: true,
    // markers: true,
})

gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#C0C5FB',
    scrollTrigger: {
        trigger: '.d1',
        scrub: true,
    },
})

// gsap.to('.gallery', {
//     duration: 1,
//     backgroundColor: '#f9d2e5aa',
//     scrollTrigger: {
//         trigger: '.d2',
//         scrub: true,
//     },
// })

gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#F7F6EB',
    scrollTrigger: {
        trigger: '.d3',
        scrub: true,
    },
})

gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#ffb399aa',
    scrollTrigger: {
        trigger: '.d4',
        scrub: true,
    },
})