// ===============================
// TEXTE ANIME HERO
// ===============================

const words = [
    "sites web modernes",
    "applications web",
    "solutions digitales",
    "outils pour entreprises",
];

let index = 0;
let char = 0;

const typing = document.querySelector(".typing");

function typeEffect() {
    if (char < words[index].length) {
        typing.textContent += words[index].charAt(char);

        char++;

        setTimeout(typeEffect, 80);
    } else {
        setTimeout(deleteEffect, 1500);
    }
}

function deleteEffect() {
    if (char > 0) {
        typing.textContent = words[index].substring(0, char - 1);

        char--;

        setTimeout(deleteEffect, 50);
    } else {
        index++;

        if (index >= words.length) {
            index = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// ===============================
// APPARITION AU SCROLL
// ===============================

const revealElements = document.querySelectorAll(
    "section, .skill-card, .service, .project-card",
);

function reveal() {
    revealElements.forEach((element) => {
        let position = element.getBoundingClientRect().top;

        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// CURSEUR PERSONNALISE
// ===============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";
});

// ===============================
// MENU MOBILE
// ===============================

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===============================
// ANIMATION DES STATISTIQUES
// ===============================

const counters = document.querySelectorAll(".stats h2");

let started = false;

function counterAnimation() {
    let section = document.querySelector(".stats");

    let top = section.getBoundingClientRect().top;

    if (top < window.innerHeight && !started) {
        started = true;

        counters.forEach((counter) => {
            let target = parseInt(counter.innerText);

            let count = 0;

            let interval = setInterval(() => {
                count++;

                counter.innerText = count + "+";

                if (count >= target) {
                    clearInterval(interval);
                }
            }, 40);
        });
    }
}

window.addEventListener("scroll", counterAnimation);

// ===============================
// SMOOTH HOVER CARTES
// ===============================

const cards = document.querySelectorAll(".skill-card,.service,.project-card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});
