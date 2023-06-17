let textWrapper = document.querySelector('.title')

const tl = gsap.timeline({
  defaults: {
    ease: 'bounce.inOut',
  },
})

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

tl.to('.box', 1, {
  y: '-100%',
  delay: 1,
})
  .to('.wrapper-img', 1, {
    width: '400',
    height: '500',
  })
  .from('.img', 0.2, {
    opacity: 0,
  })
  .to('.left', 1, {
    x: -200,
    rotation: -20,
  })
  .to(
    '.right',
    1,
    {
      x: 200,
      rotation: 20,
    },
    '-=1'
  )
  .from('.menu > div, .hero-container > div', 2, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
  })
  .from('.letter', 1, {
    y: 100,
    x: 100,
    rotation: 20,
    autoAlpha: 0,
    stagger: 0.1,
  })

// gsap.from('.menu > div, .hero-container > div', 2, {
//   opacity: 0,
//   y: 30,
//   ease: Expo.easeInOut,
//   delay: 4.2,
//   stagger: 0.2,
// })
