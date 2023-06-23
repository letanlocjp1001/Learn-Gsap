gsap.from('.logo div', {
  opacity: 0,
  delay: 1,
  x: 20,
})

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children, {
  opacity: 0,
  x: 0,
  duration: 1,
  delay: 1.5,
  stagger: {
    amount: 1,
  },
})
gsap.utils.toArray('.star').forEach((star) => {
  gsap.fromTo(
    star,
    {
      rotation: 450,
      opacity: 0,
      y: 100,
    },
    {
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: star,
    }
  )
})
gsap.utils.toArray('.title').forEach((title) => {
  gsap.fromTo(
    title,
    {
      letterSpacing: '10px',
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: '0',
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: title,
        // start: 'center center',
      },
    }
  )
})

gsap.utils.toArray('p').forEach((p) => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: p,
        // start: 'center center',
      },
    }
  )
})

gsap.utils.toArray('button').forEach((button) => {
  gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: button,
        // start: 'center center',
      },
    }
  )
})
gsap.from('.pyramid', {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
})

gsap.fromTo(
  '.hand',
  {
    scale: 0.2,
    opacity: 0,
    skewY: 30,
  },
  {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: '.hand',
    },
  }
)

gsap.utils.toArray('.line').forEach((line) => {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: '0%',
    },
    {
      opacity: 1,
      width: '100%',
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    }
  )
})
gsap.utils.toArray('.rotation').forEach((rotation) => {
  gsap.fromTo(
    rotation,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: rotation,
    }
  )
})
gsap.fromTo(
  '.card',
  {
    opacity: 0,
    scale: 1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: '.card',
  }
)

const menu = document.querySelector('.menu')

gsap.from(menu.children, {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5,
  stagger: {
    amount: 1,
  },
  scollTrigger: menu,
})
