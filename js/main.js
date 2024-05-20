// Navigation bar effects on scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Services section - Modal
let serviceModals = document.querySelectorAll(".service-modal");
let learnMoreBtns = document.querySelectorAll(".learn-more-btn");
let modalCloseBtns = document.querySelectorAll(".modal-close-btn");

const modal = (modalClick) => {
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    })
})


// Function to add a new image card for projects
function addProjectImageCard(photo, name, description, altText, source) {
    // Template literal for the new image card
    const cardTemplate = `
        <div class="img-card-container">
            <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                    <h3>${name}</h3>
                    <span>${source}</span>
                </div>
                <img src="${photo}" alt="${altText}">
            </div>
            <div class="projects-modal flex-center">
                <div class="projects-modal-body">
                    <i class="fas fa-times projects-close-btn"></i>
                    <h3>${name}</h3>
                    <img src="${photo}" alt="${altText}">
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;

    // Insert the new image card into the projects-list container
    const container = document.querySelector('.projects-list');
    container.insertAdjacentHTML('beforeend', cardTemplate);
}

// Call the function to add an image card of projects
addProjectImageCard('images/port-img1.jpg', 'Web Design', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');
addProjectImageCard('images/port-img2.jpg', 'UI/UX Design', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');
addProjectImageCard('images/port-img3.jpg', 'Branding & Design', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');
addProjectImageCard('images/port-img4.jpg', 'Web Development', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');
addProjectImageCard('images/port-img5.jpg', 'Content Writing', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');
addProjectImageCard('images/port-img6.jpg', 'Interface Design', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Image description', 'Youtube');


// Portfolio section - Modal
let projectsModals = document.querySelectorAll(".projects-modal");
let imgCards = document.querySelectorAll(".img-card");
let projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

const portfolioModal = (modalClick) => {
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    })
})

projectsCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((portfolioModalModalView) => {
            portfolioModalModalView.classList.remove("active");
        });
    })
})


// Contact section modal
let contactModal = document.querySelector(".contact-modal");
// let imgCards = document.querySelectorAll(".img-card");
let contactCloseBtn = document.querySelector(".contact-close-btn");
let button = document.querySelector(".contact-btn");
button.addEventListener("click", () => {
    contactModal.classList.add("active");
})
contactCloseBtn.addEventListener("click", () => {
    contactModal.classList.remove("active");
})


// Our clients - Swiper
let swiper = new Swiper(".client-swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});


// Setup and start animation
let animateSkillsTyped = new Typed('#animate-skills', {
    strings: ['Front-end Developer', 'Software Developer', 'Computer Vision Eng'],
    typeSpeed: 10,
    startDelay: 500,
    backSpeed: 30,
    backDelay: 800,
    smartBackspace: true,
    shuffle: false,
    loop: true,
    loopCount: Infinity,
});
let animateNameTyped = new Typed('#animate-name', {
    strings: ['CodeWithReshad'],
    typeSpeed: 0,
    showCursor: false,
});


// Website dark/light theme
let themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
})

let getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
let getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

let savedTheme = localStorage.getItem("saved-theme");
let savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


// Scroll to top button
let scrollTopBtn = document.querySelector(".scroll-to-top-btn");
window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Navigation menu items active on page scroll
// window.addEventListener("scroll", () => {
//     let sections = document.querySelectorAll("section");
//     // let scrollY = window.pageYOffset;
//     let scrollY = window.scrollY;

//     sections.forEach(current => {
//         let sectionHeight = current.sectionHeight;
//         let sectionTop = current.offsetTop - 50;
//         let id = current.getAttribute("id");

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
//         }
//         else {
//             document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
//         }
//     })
// })


// Function to highlight active navigation item on scroll
function highlightNavItemOnScroll() {
    let sections = document.querySelectorAll("section");
    let scrollY = window.scrollY;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50; // Adjust the offset if necessary
        let id = current.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector(`.nav-items a[href*="${id}"]`).classList.add("active");
        } else {
            document.querySelector(`.nav-items a[href*="${id}"]`).classList.remove("active");
        }
    });
}
window.addEventListener("scroll", highlightNavItemOnScroll);


// Responsive navigation menu toggle
let menuBtn = document.querySelector(".nav-menu-btn");
let closeBtn = document.querySelector(".nav-close-btn");
let navigation = document.querySelector(".navigation");
let navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})


// Scroll reveal animations
// Common reveal options to create reveal animations
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 100
});

// Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay:1, origin:'left' });
ScrollReveal().reveal('.home .info .moving-letter h3, .home .info p, .about-info .btn', { delay:1, origin:'right' });
ScrollReveal().reveal('.home .info .btn', { delay:10, origin:'bottom' });
ScrollReveal().reveal('.media-icons i', { delay:10, origin:'left', interval:200 });
ScrollReveal().reveal('.home-img, .about-img', { delay:10, origin:'top' });
ScrollReveal().reveal('.about .description, .about .professional-list li', { delay:10, origin:'right', interval:200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper', { delay:10, origin:'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .img-card', { delay:10, origin:'bottom', interval: 200 });
