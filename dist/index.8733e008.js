'use strict';
function Tabs() {
    var bindAll = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for(var i = 0; i < menuElements.length; i++)menuElements[i].addEventListener('click', change, false);
    };
    var clear = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for(var i = 0; i < menuElements.length; i++){
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };
    var change = function(e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    };
    bindAll();
}
var connectTabs = new Tabs();
const navbar = document.querySelector('.navbar');
window.onscroll = ()=>{
    if (window.scrollY > 300) navbar.classList.add('navbar__scrolled');
    else navbar.classList.remove('navbar__scrolled');
};
function scrollBot() {
    var elem = document.querySelector(".about");
    window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
function scrolltop() {
    var elem = document.querySelector(".banner__hero");
    window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
});

//# sourceMappingURL=index.8733e008.js.map
