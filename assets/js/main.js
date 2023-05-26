//!===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


// !===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ! ===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 400 })
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__profession', { delay: 300 })
sr.reveal('.about__text', { delay: 400 })
sr.reveal('.about__social-icon', { delay: 500, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 300 })

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 100 })


/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })


/*SCROLL TECHNOLOGIES*/
sr.reveal('.proportion', { delay: 300, interval: 100 })



/*===== LANGUAGES PROGRESS BAR =====*/
const espanol = document.getElementById("español"),

    english = document.getElementById("english");



function createProgressBar(input, value, colorbar = "#7039b6") {
    input.style.background = colorbar;

    let p = 0;
    let time;

    const animateProgress = () => {
        p++;
        input.style.width = `${p}%`;

        if (p === value) {
            clearInterval(time);
            setTimeout(() => {
                p = 0; // Reinicia el progreso
                input.style.width = "0%"; // Restablece la barra de progreso al inicio
                time = setInterval(animateProgress, 50); // Intervalo de 50 milisegundos
            }, 1000 - value * 10); // Tiempo en milisegundos para quedarse en el valor máximo
        }
    };

    time = setInterval(animateProgress, 50); // Intervalo de 50 milisegundos
}

createProgressBar(español, 100);
createProgressBar(english, 85);



/*===== SWITCH LANGUAGES =====*/
const langElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {

    const requestJson = await fetch(`languages/${language}.json`);
    const texts = await requestJson.json();

    for (textToChange of textsToChange) {

        const section = textToChange.dataset.section;

        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];

    }

}


langElement.addEventListener("click", (e) => {


    changeLanguage(e.target.parentElement.dataset.language);



})