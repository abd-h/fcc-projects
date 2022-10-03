let navbar = document.getElementsByClassName("navbar")[0],
navbarFlex = document.getElementById("navbar"),
navLink = document.querySelectorAll(".nav-link"),
toggleBar = document.getElementsByClassName("menu")[0];

// stops animation and transition during window resizing;

function stopsTransition(resizeTimer) {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
        
    }, 400);
}


window.addEventListener("resize", stopsTransition)





function navlink() {
    return navLink.forEach(b => b.addEventListener("click", () => {
        if(window.matchMedia("(max-width: 1121px)").matches && navbar.classList.toggle("change")) {
            navbar.style.transform = "translateX(-100%)";
        toggleBar.classList.remove("change")
        toggleBar.style.backgroundColor = "white"
        } else if(window.matchMedia("(min-width: 1121px)").matches) {
            navbar.style.transform = "translateX(10%)";
        }
    }))
}




function smallScreen() {
    if(window.matchMedia("(max-width: 1120px)").matches && !navbar.classList.toggle("change")) {
        toggleBar.classList.toggle("change");
        toggleBar.style.backgroundColor = "rgb(216, 247, 172)";
        // navbar.style.backgroundColor = "rgb(216, 247, 172)";
        navbar.style.transform = "translateX(10%)";
        // navbar.style.display = "flex";
        navlink();
    } else {
        navbar.style.transform = "translateX(-100%)";
        toggleBar.classList.remove("change");
        toggleBar.style.backgroundColor = "white"
        
    }
}

toggleBar.addEventListener("click", smallScreen)
window.addEventListener("resize", () => {
    if(window.matchMedia("(min-width: 1121px)").matches) {
        // document.body.style.backgroundColor = "red"
        navbar.style.transform = "translateX(10%)";
        toggleBar.classList.remove("change")
    } else if(window.matchMedia("(max-width: 1120px)").matches) {
        navbar.style.transform = "translateX(-100%)";
        // navbar.style.display = "none"
        document.body.style.backgroundColor = "white";
        toggleBar.classList.remove("change");
        toggleBar.style.backgroundColor = "white"
    }
})


function clickOnWindow() {
    if(window.matchMedia("(max-width: 1120px)").matches && toggleBar.classList.contains("change")) {
        navbar.style.transform = "translateX(-100%)";
        toggleBar.classList.remove("change");
        toggleBar.style.backgroundColor = "white";
        
    } 
}

// if mouse leaves navbar then navbar disappears
navbar.addEventListener("mouseleave",clickOnWindow)


// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });
// console.log(toggleBar.classList.contains("change"))

/*

to stop animation when window resizes;

 .resize-animation-stopper * {
  transition: none !important;
  animation: none !important;
}

JS code;
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


*/

console.log(window.innerWidth)