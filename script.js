// menu toggle 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// remove menu in mobile on every nav link--
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// const sections = document.querySelectorAll('section[id]');

// window.addEventListener('scroll', scrollActive);

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.OffsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector( )
//         }
//     })
// }

// scroll reveal animation 

const sr = ScrollReveal({
    origin: 'top',
    duration: '80px',
    distance: 2000,
    reset: true
})

sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin: 'right', delay: 400})

