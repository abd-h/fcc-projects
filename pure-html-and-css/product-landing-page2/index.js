            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 1
            *++++++++++++++++++++++++++++++++++++++++*/

let mainImage = document.getElementsByClassName("chosen-watch")[0],
    watch1Option1 = document.getElementsByClassName("shadow-grey")[0],
    watch1Option2 = document.getElementsByClassName("lunar-white")[0],
    watch1Option3 = document.getElementsByClassName("blue-mist")[0],
    shopNow1 = document.querySelectorAll(".shop-outerst-main-container")[0],
    outline = `2px solid rgb(193, 192, 192)`;

function shopNowVisibility() {
        (shopNow1.className.match("shop-outerst-main-container"))? shopNow1.style.display = "flex"
        :shopNow1.style.display = "none"
}

            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 2
            *++++++++++++++++++++++++++++++++++++++++*/

let watch2Options = document.querySelector(".watch-2-option-1"),
    watch2Option1 = document.querySelector(".graphite-stainless-steel"),                           
    watch2Option2 = document.querySelector(".sage-grey-silver"),
    watch2Option3 = document.querySelector(".blue-mist-soft-gold"),
    shopNow2 = document.querySelector(".shop2");

   

            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 3
            *++++++++++++++++++++++++++++++++++++++++*/

let watch3Options = document.querySelector(".watch-1-option-1"),
    watch3Option1 = document.querySelector(".obsidian-matte-black"),
    watch3Option2 = document.querySelector(".hazel-champagne-gold"),
    watch3Option3 = document.querySelector(".chalk-polished-silver"),
    shopNow3 = document.querySelector(".shop-3");


            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 4
            *++++++++++++++++++++++++++++++++++++++++*/                           

    let watch4Options = document.querySelector(".watch-4-option-1"),
        watch4Option1 = document.querySelector(".watch4-charcoal-option"),
        watch4Option2 = document.querySelector(".watch4-obsidian-matte-black"),
        watch4Option3 = document.querySelector(".watch4-hazel-champagne-gold"),
        watch4Option4 = document.querySelector(".watch4-chalk-polished-silver"),
        shopNow4 = document.querySelector(".shop-4");

   


// Optimised Eventlistener


let watchCards = document.querySelectorAll(".watches");
console.log(watchCards);
watchCards.forEach(options => {
    options.addEventListener("mouseenter", function(e) {
    let target = e.target;
    (target.classList.contains("watch-1"))? shopNow1.style.display = "flex"
    :(target.classList.contains("watch-2"))? shopNow2.style.display = "flex"
    :(target.classList.contains("watch-3"))? shopNow3.style.display = "flex"
    :(target.classList.contains("watch-4"))? shopNow4.style.display = "flex"
    : false;
})
})
watchCards.forEach(options => {
    options.addEventListener("mouseleave", function(e) {
    let target = e.target;
    (target.classList.contains("watch-1"))? shopNow1.style.display = "none"
    :(target.classList.contains("watch-2"))? shopNow2.style.display = "none"
    :(target.classList.contains("watch-3"))? shopNow3.style.display = "none"
    :(target.classList.contains("watch-4"))? shopNow4.style.display = "none"
    : false;
})
})







let watches = document.querySelectorAll(".watch-options-1");
watches.forEach(options => {
    for(let i = 0; i < options.children.length; i++) {
        options.children[i].addEventListener('click', function(e) {
            let target = e.target;
            (target.className === "shadow-grey")? 
                (mainImage.src = `images/sense2/shadow-grey/sense2-black-device-3qt.png`,   
                watch1Option1.style.outline = outline,
                watch1Option2.style.outline = `none`,
                watch1Option3.style.outline = `none`)
            :(target.className === "lunar-white")? 
                (mainImage.src = `images/sense2/lunar/sense2-lunarwhite-device-3qt.png`,
                watch1Option2.style.outline = outline,
                watch1Option1.style.outline = `none`,
                watch1Option3.style.outline = `none`,
                console.log('just clicked'))
            :(target.className === "blue-mist")?
                (mainImage.src = `images/sense2/blue/sense2-bluemist-device-3qt.png`,
                watch1Option3.style.outline = outline,
                watch1Option1.style.outline = `none`,
                watch1Option2.style.outline = `none`)
            :(target.className === "graphite-stainless-steel")?
                (watch2Options.src = `images/fitbit-sense/carbon-graphite-stainless-steel/sense-HeroStatic-carbon-side.png`,
                watch2Option1.style.outline = outline,
                watch2Option2.style.outline = `none`,
                watch2Option3.style.outline = `none`)  
            :(target.className === "sage-grey-silver")? 
                (watch2Options.src = `images/fitbit-sense/sage-grey-silver/sense-sage-gray-device-3qt.png`,
                watch2Option2.style.outline =outline,
                watch2Option1.style.outline = `none`,
                watch2Option3.style.outline = `none`)   
            :(target.className === "blue-mist-soft-gold")?
                (watch2Options.src = `images/fitbit-sense/lunar-white-soft-gold/sense-lunarwhite-HeroStatic-Side.png`,
                watch2Option3.style.outline = outline,
                watch2Option1.style.outline = `none`,
                watch2Option2.style.outline = `none`)  
            :(target.className === "obsidian-matte-black")?
                (watch3Options.src = 'images/gpixle-watch-4g-lite/obsidian/pixel-watch-obsidian.png',
                watch3Option1.alt = `Obsidian color option`,
                watch3Option1.style.outline = outline,
                watch3Option2.style.outline = `none`,
                watch3Option3.style.outline = `none`)
            :(target.className === "hazel-champagne-gold")?
                (watch3Options.src = `images/gpixle-watch-4g-lite/gg-pixel-hazel/google-pixel-watch-hazel-device-3qt.png`,
                watch3Option2.style.outline = outline,
                watch3Option1.style.outline = `none`,
                watch3Option3.style.outline = `none`)    
            :(target.className === "chalk-polished-silver")? 
                (watch3Options.src = `images/gpixle-watch-4g-lite/silver-polish/pixel-watch-charcoal.png`,
                watch3Option3.style.outline = outline,
                watch3Option1.style.outline = `none`,
                watch3Option2.style.outline = `none`)    
            :(target.className === "watch4-charcoal-option")?
                (watch4Options.src = `images/gpixle-watch-bluetooth/charcoal/google-pixel-watch-charcoal-device-3qt.png`,
                watch4Option1.alt = `Obsidian color option`,
                watch4Option1.style.outline = outline,
                watch4Option2.style.outline = `none`,
                watch4Option3.style.outline = `none`)    
            :(target.className === "watch4-obsidian-matte-black")?
                (watch4Options.src = `images/gpixle-watch-bluetooth/obsidian-color/google-pixel-watch-obsidian-device-3qt.png`,
                watch4Option2.style.outline = outline,
                watch4Option1.style.outline = `none`,
                watch4Option3.style.outline = `none`,
                watch4Option4.style.outline = `none`)  
            :(target.className === "watch4-hazel-champagne-gold")?
                (watch4Options.src = `images/gpixle-watch-bluetooth/hazel-champagne-gold/google-pixel-watch-hazel-device-3qt.png`,
                watch4Option3.style.outline = outline,
                watch4Option1.style.outline = `none`,
                watch4Option2.style.outline = `none`,
                watch4Option4.style.outline = `none`) 
            :(target.className === "watch4-chalk-polished-silver")?
                (watch4Options.src = `images/gpixle-watch-bluetooth/chalk-polished-silver/google-pixel-watch-chalk-device-3qt.png`,
                watch4Option4.style.outline = outline,
                watch4Option1.style.outline = `none`,
                watch4Option2.style.outline = `none`,
                watch4Option3.style.outline = `none`)
            : undefined;
        })
    }
})



            /*++++++++++++++++++++++++++++++++++++++++
                            footer
            *++++++++++++++++++++++++++++++++++++++++*/

let input = document.getElementById("email"),
    label = document.querySelector(".label"),
    footer = document.querySelector("footer");
console.log(label);                            


input.addEventListener("click", () => {
    label.style.top = "0";
    console.log("mouseenter");
})
footer.addEventListener("mouseleave", () => {
    label.style.top = "2.5rem";
    console.log("mouseenter");
});




// sticky navbar

// let element = document.querySelector(".navbar-product-selection"),
//     topPos = element.getBoundingClientRect().top + window.scrollY,
//     leftPos = element.getBoundingClientRect().left + window.scrollX,
//     lastKnownScrollPosition = 0,
//     ticking = false;

   
    
 let playThis = document.getElementById("myvid"),
     playButton = document.getElementsByClassName("video-play")[0];
 console.log(playThis);


function playMyVideo() {
    playThis.play();
}
 
function pauseVideo() {
    playThis.pause();
}
    
const player = document.getElementById('myvid');
const playBtn = document.querySelector('.video-play');
// const stopBtn = document.querySelector('.video-play');
let times = 0, playY;
const playVideo = playBtn.addEventListener( 'click' , () => {
    if(times == 0){
      playY = player.src += '?autoplay=1';
      playY = player.
      times = 2;
    }
    openFullscreen();
});


function openFullscreen() {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.webkitRequestFullscreen) { /* Safari */
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) { /* IE11 */
    player.msRequestFullscreen();
  }
}







