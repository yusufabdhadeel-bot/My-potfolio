// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(255,255,255,0.9)";

        navbar.style.backdropFilter =
        "blur(20px)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.7)";

        navbar.style.boxShadow =
        "none";

    }

});

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.querySelector(".typing");

if(typingElement){

const words = [

    "Frontend Developer",
    "Website Designer",
    "Freelancer",
    "CodePrince Digital"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );

}

typeEffect();

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(

    ".about-card, .service-card, .project-card, .skill-card, .contact-box"

);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(item=>{

    item.classList.add("hidden");

    observer.observe(item);

});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

const increment = target / 60;

count += increment;

if(count < target){

counter.innerText =
Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerText = target;

}

};

update();

}

});

},

{
threshold:0.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// =========================
// FLOATING PARTICLES
// =========================

const particleContainer =
document.createElement("div");

particleContainer.classList.add("particles");

document.body.appendChild(
particleContainer
);

for(let i=0;i<20;i++){

const particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDelay =
Math.random()*10 + "s";

particle.style.animationDuration =
(8 + Math.random()*8) + "s";

particleContainer.appendChild(
particle
);

}

// =========================
// PROJECT CARD HOVER
// =========================

document.querySelectorAll(".project-card")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.transform =

`perspective(1000px)
rotateX(${(y-150)/20}deg)
rotateY(${-(x-150)/20}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =

"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// =========================
// CURRENT YEAR
// =========================

const year = document.querySelector(".year");

if(year){

year.textContent =
new Date().getFullYear();

}