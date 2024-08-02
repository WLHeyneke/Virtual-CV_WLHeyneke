/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*__Menu Show*__/
/*Validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*__Menu Hidden*__/
/*Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //The show menu class is removed when clicking on each nav__link
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  //The blur-header class to be added to the haeder tag when the scroll is greater than 50 viewport height
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.send('service_4enakae','template_h0il9mm','new FormData(contactForm)', '4nVtjP5y47mWR-F7w')
    .then(() => {
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        //remove message after five seconds
        setTimeout(() =>{
          contactMessage.textContent = ' '
        }, 5000)

        //Clear the input fields
        contactForm.reset()

      },() => {
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
      }
    );
};

contactForm.addEventListener('submit',sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
  //Add the show-scroll class to the tag with scrollup when the scroll is higher than 350 viewport height
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  SpeechRecognitionResult.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
    }else{
            sectionsClass.classList.remove('active-link')
    }
  })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
