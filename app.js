let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
let sideNav = document.getElementById("sideNav");

//1-first way
sideNav.style.right = "-200px";

function closeOpenBtn () {
    if (sideNav.style.right == "-200px") {
        sideNav.style.right = "0";
        menu.src = 'images/close.png'
    } else {
        sideNav.style.right = "-200px";
        menu.src = 'images/menu.png'
    }
};



/*
//2-second way
menuBtn.onclick = function () {
    if (sideNav.style.right == "-200px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-200px";
    }
};

//in this way we don't need to add onclic="name of function()" anymore
 */