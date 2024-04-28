const links = [...document.querySelectorAll('.nav-link')]
const navText = ['Home', 'About Us', 'Projects', 'Documentation','Contact']

links.forEach((link, i) => {
    navText[i].split('').forEach((letter, j) => {
        const span = document.createElement('span')
        span.textContent = letter
        span.style.cssText = `--i: .${j}s`
        link.append(span)
    })
})