/*=========================================
            PRELOADER
=========================================*/
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 2800);

});





/*=========================================
            TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");


const words = [

    "Python Developer",

    "Web Developer",

    "Future Software Engineer"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {


    const current = words[wordIndex];


    if (!deleting) {

        typing.textContent =
            current.substring(0, charIndex++);

    }

    else {

        typing.textContent =
            current.substring(0, charIndex--);

    }



    if (!deleting &&
        charIndex === current.length + 1) {


        deleting = true;

        setTimeout(typeEffect, 1500);

        return;

    }



    if (deleting && charIndex === 0) {


        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 100

    );

}


typeEffect();





/*=========================================
            CUSTOM CURSOR
=========================================*/

const cursor =
    document.querySelector(".cursor");


const cursor2 =
    document.querySelector(".cursor2");



document.addEventListener("mousemove", e => {


    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";


    cursor2.style.left =
        e.clientX + "px";

    cursor2.style.top =
        e.clientY + "px";

});




const links =
document.querySelectorAll("a");


links.forEach(link => {


    link.addEventListener("mouseenter", () => {


        cursor2.style.transform =
            "translate(-50%,-50%) scale(1.8)";


    });



    link.addEventListener("mouseleave", () => {


        cursor2.style.transform =
            "translate(-50%,-50%) scale(1)";


    });


});





/*=========================================
        ACTIVE NAVIGATION
=========================================*/


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const top =
            section.offsetTop - 150;


        if (scrollY >= top) {

            current = section.id;

        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }


    });



});






/*=========================================
        SCROLL REVEAL
=========================================*/


const observer = new IntersectionObserver(


(entries) => {


entries.forEach(entry => {


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{

threshold:.2

}


);




const hiddenElements = document.querySelectorAll(

".about-card,.skill,.project,.contact"

);



hiddenElements.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);


});
/*=========================================
            PARTICLE GENERATOR
=========================================*/

const particlesContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");


    const size = Math.random() * 4 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;


    particle.style.left = Math.random() * window.innerWidth + "px";


    particle.style.animationDuration =
        Math.random() * 10 + 8 + "s";


    particle.style.opacity =
        Math.random() * 0.6 + 0.2;


    particlesContainer.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 18000);

}



for(let i = 0; i < 40; i++){

    createParticle();

}



setInterval(() => {

    createParticle();

},800);





/*=========================================
            PROJECT TILT
=========================================*/

const cards = document.querySelectorAll(".project");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect = card.getBoundingClientRect();


const x = e.clientX - rect.left;
const y = e.clientY - rect.top;


const rotateX =
    -(y - rect.height/2)/15;


const rotateY =
    (x - rect.width/2)/15;



card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform=

`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;


});


});





/*=========================================
        BUTTON GLOW EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.boxShadow =

`
0 0 15px cyan,
0 0 35px cyan,
0 0 60px rgba(0,255,255,.4)
`;



});



button.addEventListener("mouseleave",()=>{


button.style.boxShadow="none";


});


});





/*=========================================
        PERFORMANCE
=========================================*/


window.addEventListener(


"resize",

()=>{


document.querySelectorAll(".particle")

.forEach(p=>{


if(

p.offsetLeft>

window.innerWidth

)

{

p.remove();

}


});


},

{

passive:true

}

);






/*=========================================
        FINAL MESSAGE
=========================================*/

console.log(

"%cPortfolio Loaded Successfully",

"color:cyan;font-size:18px;font-weight:bold;"

);
