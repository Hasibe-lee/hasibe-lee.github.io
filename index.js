window.onload = function () {
  let photoSelf = document.querySelector('.photo-self')
  let photo = photoSelf.querySelector('img')
  let desc = document.querySelector('.desc')
  let op = 0

  photo.timer = setInterval(() => {
    if (op == 1) {
      clearInterval(photo.timer)
    }
    op += 0.1
    photo.style.opacity = op
    desc.style.opacity = op
  }, 100)

}