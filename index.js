window.onload = function () {
  let navbar = document.querySelector('.navbar')
  let photoSelf = document.querySelector('.photo-self')
  let photo = photoSelf.querySelector('img')
  let desc = document.querySelector('.desc')
  let floor = document.querySelector('.floor')
  let oneSelf = floor.querySelector('.photo-self')
  let op = 0

  photo.timer = setInterval(() => {
    if (op == 1) {
      clearInterval(photo.timer)
    }
    op += 0.1
    photo.style.opacity = op
    desc.style.opacity = op
  }, 100)

  // 节流函数
  let throttle = function (fn, delay) {
    let timer = null
    return function () {
      if (!timer) {
        let arg = arguments
        timer = setTimeout(() => {
          fn.apply(this, arg)
          timer = null
        }, delay)
      }
    }
  }

  window.onscroll = throttle(function () {
    if (scrollY > 0) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
    if (scrollY >= 400) {
      oneSelf.style.animation = 'rotateImg 2.5s linear forwards'
    }
  }, 60)
}