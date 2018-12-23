initCarouselItem();

function doCarousel() {
  $(`.images>img:nth-child(${setN(n)})`).removeClass('current enter').addClass('leave')
    .one('transitionend', (e) => {
      $(e.currentTarget).removeClass('leave current').addClass('enter');
    })
  $(`.images>img:nth-child(${setN(n + 1)})`).removeClass('enter leave').addClass('current')
  n += 1
}

let timer = setInterval(() => {
  doCarousel();
}, 3000)

document.addEventListener('visibilitychange', function (e) {
  if (document.hidden) {
    window.clearInterval(timer)
  } else {
    timer = setInterval(() => {
      doCarousel();
    }, 3000)
  }
})

function setN(n) {
  if (n > 3) {
    n = n % 3
    if (n === 0) {
      n = 3
    }
  }
  return n
}

function initCarouselItem() {
  n = 1
  $(`.images>img:nth-child(${n}`).addClass('current')
    .siblings().addClass('enter')
}