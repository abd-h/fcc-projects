            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 1
            *++++++++++++++++++++++++++++++++++++++++*/

let mainImage = document.getElementsByClassName("chosen-watch")[0],
    watch1Option1 = document.getElementsByClassName("shadow-grey")[0],
    watch1Option2 = document.getElementsByClassName("lunar-white")[0],
    watch1Option3 = document.getElementsByClassName("blue-mist")[0],
    outline = `3px solid rgb(193, 192, 192)`;

watch1Option1.addEventListener("click", () => {
    mainImage.src = `images/sense2/shadow-grey/sense2-black-device-3qt.png`;   
    watch1Option1.style.outline = outline;
    watch1Option2.style.outline = `none`;
    watch1Option3.style.outline = `none`;

});
watch1Option2.addEventListener("click", () => {
    mainImage.src = `images/sense2/lunar/sense2-lunarwhite-device-3qt.png`;
    watch1Option2.style.outline = outline;
    watch1Option1.style.outline = `none`;
    watch1Option3.style.outline = `none`;
});
watch1Option3.addEventListener("click", () => {
    mainImage.src = `images/sense2/blue/sense2-bluemist-device-3qt.png`;
    watch1Option3.style.outline = outline;
    watch1Option1.style.outline = `none`;
    watch1Option2.style.outline = `none`;
});



// to make the p element that contains shop visible on mouseover;

let watchCollection1 = document.querySelector(".watch-1"),
    shopNow1 = document.querySelectorAll(".shop-outerst-main-container")[0];

function shopNowVisibility() {
        (shopNow1.className.match("shop-outerst-main-container"))? shopNow1.style.display = "flex"
        :shopNow1.style.display = "none"
}

watchCollection1.addEventListener("mouseenter", shopNowVisibility)
watchCollection1.addEventListener("mouseleave", () => {
    shopNow1.style.display = "none";
    watch1Option1.style.outline = `none`;
    watch1Option2.style.outline = `none`;
    watch1Option3.style.outline = `none`;
})



            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 2
            *++++++++++++++++++++++++++++++++++++++++*/

let watch2Options = document.querySelector(".watch-2-option-1"),
    watch2Option1 = document.querySelector(".graphite-stainless-steel"),                           
    watch2Option2 = document.querySelector(".sage-grey-silver"),
    watch2Option3 = document.querySelector(".blue-mist-soft-gold");   
    
watch2Option1.addEventListener("click", () => {
    watch2Options.src = `images/fitbit-sense/carbon-graphite-stainless-steel/sense-HeroStatic-carbon-side.png`;
    watch2Option1.style.outline = outline;
    watch2Option2.style.outline = `none`;
    watch2Option3.style.outline = `none`;
});

watch2Option2.addEventListener("click", () => {
    watch2Options.src = `images/fitbit-sense/sage-grey-silver/sense-sage-gray-device-3qt.png`;
    watch2Option2.style.outline =outline;
    watch2Option1.style.outline = `none`;
    watch2Option3.style.outline = `none`;
});

watch2Option3.addEventListener("click", () => {
    watch2Options.src = `images/fitbit-sense/lunar-white-soft-gold/sense-lunarwhite-HeroStatic-Side.png`;
    watch2Option3.style.outline = outline;
    watch2Option1.style.outline = `none`;
    watch2Option2.style.outline = `none`;
})

let watchCollection2 = document.querySelector(".watch-2"),
    shopNow2 = document.querySelector(".shop2");

watchCollection2.addEventListener("mouseenter", () => {
    document.querySelector(".shop2").style.display = "flex";
})
watchCollection2.addEventListener("mouseleave", () => {
    document.querySelector(".shop2").style.display = "none";
    watch2Option3.style.outline = `none`;
    watch2Option1.style.outline = `none`;
    watch2Option2.style.outline = `none`;
})    