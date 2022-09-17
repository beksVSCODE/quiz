const nav = document.querySelector('.header_ul');
const menuBtn = document.querySelector('.header-bmenu');

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("active")
});
