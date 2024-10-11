const contactMeEmail = document.getElementsByClassName("contact-me-email")[0];
const contactMePhone = document.getElementsByClassName("contact-me-phone")[0];
const phoneIcon = document.getElementsByClassName("fa-phone")[0];
const emailIcon = document.getElementsByClassName("fa-envelope")[0];
// Hiding these elements till they are clicked on

contactMeEmail.hidden = true;
contactMePhone.hidden = true;

phoneIcon.onclick = ()  => {
    contactMePhone.hidden = false;
};

emailIcon.onclick = () => {
    contactMeEmail.hidden = false;
};