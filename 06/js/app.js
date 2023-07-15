const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
let textLogo = document.querySelector('.logo')

const tl2 = gsap.timeline({
  defaults: {
    ease: 'power4.inOut',
  },
})

textLogo.innerHTML = textLogo.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

tl2
  .from('.letter', 1, {
    y: -50,
    x: 50,
    rotation: 20,
    autoAlpha: 0,
    stagger: 0.1,
  })
  .from('.nav_list', 1, {
    y: 50,
    x: -50,
    rotation: 180,
    autoAlpha: 0,
    stagger: 0.2,
  })

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: 1,
    },
  })
  .to('.img', {
    stagger: 0.2,
    y: -700,
    scrub: 1,
  })
