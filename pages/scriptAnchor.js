//плавная прокрутка якоря
const anchorsForm = document.querySelectorAll('a[href*="#form"]')
const anchorsServices = document.querySelectorAll('a[href*="#services"]')
const anchorsAbout = document.querySelectorAll('a[href*="#about"]')

for (let anchor of anchorsForm) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

for (let anchor of anchorsServices) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

for (let anchor of anchorsAbout) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

