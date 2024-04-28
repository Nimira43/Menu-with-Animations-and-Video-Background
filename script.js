const links = [...document.querySelectorAll('.nav-link')]
const navText = ['Home', 'About Us', 'Projects', 'Documentation','Contact']
const navImg = document.querySelector('.navbar-img')

links.forEach((link, i) => {
    navText[i].split('').forEach((letter, j) => {
        const span = document.createElement('span')
        span.textContent = letter
        span.style.cssText = `--i: .${j}s`
        link.append(span)
    })
    link.addEventListener('mouseenter', () => {
        navImg.style.transform = `translate(${link.dataset.position}%, -50%) rotate(${link.dataset.position * 8}deg)`
    })
})