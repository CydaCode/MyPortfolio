const togglebtn = document.querySelector(".menulist");
// const nav = document.querySelector(".nav");
const menubtn = document.querySelector(".menu_btn i");



menubtn.addEventListener("click", function() {
    togglebtn.classList.toggle("active")
    menubtn.classList.toggle("active")
})