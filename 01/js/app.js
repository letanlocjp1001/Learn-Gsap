const tl = gsap.timeline()
tl.from('.left-side-container img', {
  y: '-100%',
  duration: 2.5,
  transform: 'scale(1, 0.9)',
  delay: 1,
})
tl.from(
  '.right-side-container img',
  {
    y: 400,
    duration: 2.5,
    transform: 'scale(1.5, 1.3)',
    stagger: {
      amount: 1.4,
    },
  },
  '-=2.5'
)
tl.from(
  '.right-side-container h6',
  {
    y: 500,
    duration: 2,
  },
  '-=2.5'
)

let innerTextContent = document.getElementById('innerTextContent')

const imgs = document.querySelectorAll('.imgHover')

imgs.forEach((img) => {
  img.addEventListener('mouseover', function contentChange(el) {
    // console.log(el)
    if (el.target.id === 'img1') {
      finalAnimation(el.target.id, 'Le Oh Diva Impulse No1')
    } else if (el.target.id === 'img2') {
      finalAnimation(el.target.id, 'Le Oh Flase')
    } else if (el.target.id === 'img3') {
      finalAnimation(el.target.id, 'Le Oh Apache')
    } else if (el.target.id === 'img4') {
      finalAnimation(el.target.id, ' Ruudiere')
    } else if (el.target.id === 'img5') {
      finalAnimation(el.target.id, 'Le Oh Diva Rossi')
    }
  })
  function finalAnimation(id, text) {
    let imgspan = document.getElementById('left-side-img-span')
    innerTextContent.innerText = text
    let img = document.createElement('img')
    img.src = `./images/${id}.jpg`
    imgspan.appendChild(img)

    var imgTags = imgspan.querySelectorAll('img')
    console.log(imgTags.length)
    var lastImgTag = imgTags[imgTags.length - 1]
    var firstImgTag = imgTags[0]
    gsap.from(lastImgTag, {
      y: -800,
      duration: 2,
      transform: 'scale(1, 0.8)',
      ease: 'Power3.easeOut',
    })

    if (imgTags.length > 2) {
      firstImgTag.parentNode.removeChild(firstImgTag)
      return
    }
  }
})
