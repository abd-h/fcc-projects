            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 1
            *++++++++++++++++++++++++++++++++++++++++*/

let mainImage = document.getElementsByClassName("chosen-watch")[0],
    watch1Option1 = document.getElementsByClassName("shadow-grey")[0],
    watch1Option2 = document.getElementsByClassName("lunar-white")[0],
    watch1Option3 = document.getElementsByClassName("blue-mist")[0],
    outline = `2px solid rgb(193, 192, 192)`;

// watch1Option1.addEventListener("click", () => {
//     mainImage.src = `images/sense2/shadow-grey/sense2-black-device-3qt.png`;   
//     watch1Option1.style.outline = outline;
//     watch1Option2.style.outline = `none`;
//     watch1Option3.style.outline = `none`;

// });
// watch1Option2.addEventListener("click", () => {
//     mainImage.src = `images/sense2/lunar/sense2-lunarwhite-device-3qt.png`;
//     watch1Option2.style.outline = outline;
//     watch1Option1.style.outline = `none`;
//     watch1Option3.style.outline = `none`;
// });
// watch1Option3.addEventListener("click", () => {
//     mainImage.src = `images/sense2/blue/sense2-bluemist-device-3qt.png`;
//     watch1Option3.style.outline = outline;
//     watch1Option1.style.outline = `none`;
//     watch1Option2.style.outline = `none`;
// });



// to make the p element that contains shop visible on mouseover;

let watchCollection1 = document.querySelector(".watch-1"),
    shopNow1 = document.querySelectorAll(".shop-outerst-main-container")[0];

function shopNowVisibility() {
        (shopNow1.className.match("shop-outerst-main-container"))? shopNow1.style.display = "flex"
        :shopNow1.style.display = "none"
}

// watchCollection1.addEventListener("mouseenter", shopNowVisibility)
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
    
// watch2Option1.addEventListener("click", () => {
//     watch2Options.src = `images/fitbit-sense/carbon-graphite-stainless-steel/sense-HeroStatic-carbon-side.png`;
//     watch2Option1.style.outline = outline;
//     watch2Option2.style.outline = `none`;
//     watch2Option3.style.outline = `none`;
// });

// watch2Option2.addEventListener("click", () => {
//     watch2Options.src = `images/fitbit-sense/sage-grey-silver/sense-sage-gray-device-3qt.png`;
//     watch2Option2.style.outline =outline;
//     watch2Option1.style.outline = `none`;
//     watch2Option3.style.outline = `none`;
// });

// watch2Option3.addEventListener("click", () => {
//     watch2Options.src = `images/fitbit-sense/lunar-white-soft-gold/sense-lunarwhite-HeroStatic-Side.png`;
//     watch2Option3.style.outline = outline;
//     watch2Option1.style.outline = `none`;
//     watch2Option2.style.outline = `none`;
// })

let watchCollection2 = document.querySelector(".watch-2"),
    shopNow2 = document.querySelector(".shop2");

// watchCollection2.addEventListener("mouseenter", () => {
//     shopNow2.style.display = "flex";
//     shopNow2.style.fontSize = "0.5rem";
// })
watchCollection2.addEventListener("mouseleave", () => {
    document.querySelector(".shop2").style.display = "none";
    watch2Option3.style.outline = `none`;
    watch2Option1.style.outline = `none`;
    watch2Option2.style.outline = `none`;
})    

            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 3
            *++++++++++++++++++++++++++++++++++++++++*/

let watch3Options = document.querySelector(".watch-1-option-1"),
    watch3Option1 = document.querySelector(".obsidian-matte-black"),
    watch3Option2 = document.querySelector(".hazel-champagne-gold"),
    watch3Option3 = document.querySelector(".chalk-polished-silver");



//     watch3Option1.addEventListener("click", () => {
//     watch3Options.src = 'images/gpixle-watch-4g-lite/obsidian/pixel-watch-obsidian.png';
//     watch3Option1.alt = `Obsidian color option`
//     watch3Option1.style.outline = outline;
//     watch3Option2.style.outline = `none`;
//     watch3Option3.style.outline = `none`;
// });

//     watch3Option2.addEventListener("click", () => {
//     watch3Options.src = `images/gpixle-watch-4g-lite/gg-pixel-hazel/google-pixel-watch-hazel-device-3qt.png`;
//     watch3Option2.style.outline = outline;
//     watch3Option1.style.outline = `none`;
//     watch3Option3.style.outline = `none`;
// });

//     watch3Option3.addEventListener("click", () => {
//     watch3Options.src = `images/gpixle-watch-4g-lite/silver-polish/pixel-watch-charcoal.png`;
//     watch3Option3.style.outline = outline;
//     watch3Option1.style.outline = `none`;
//     watch3Option2.style.outline = `none`;
// });

let watchCollection3 = document.querySelector(".watch-3"),
    shopNow3 = document.querySelector(".shop-3");

watchCollection3.addEventListener("mouseenter", () => {
    shopNow3.style.display = "flex";
    shopNow3.style.fontSize = "0.5rem";
})
watchCollection3.addEventListener("mouseleave", () => {
    shopNow3.style.display = "none";
    watch3Option3.style.outline = `none`;
    watch3Option1.style.outline = `none`;
    watch3Option2.style.outline = `none`;
})   


            /*++++++++++++++++++++++++++++++++++++++++
                            Watch 4
            *++++++++++++++++++++++++++++++++++++++++*/                           

    let watch4Options = document.querySelector(".watch-4-option-1"),
        watch4Option1 = document.querySelector(".watch4-charcoal-option"),
        watch4Option2 = document.querySelector(".watch4-obsidian-matte-black"),
        watch4Option3 = document.querySelector(".watch4-hazel-champagne-gold"),
        watch4Option4 = document.querySelector(".watch4-chalk-polished-silver");
        console.log(watch4Option1);

//     watch4Option1.addEventListener("click", () => {
//     watch4Options.src = `images/gpixle-watch-bluetooth/charcoal/google-pixel-watch-charcoal-device-3qt.png`;
//     watch4Option1.alt = `Obsidian color option`
//     watch4Option1.style.outline = outline;
//     watch4Option2.style.outline = `none`;
//     watch4Option3.style.outline = `none`;
//     console.log("clicked");
// }); 

//     watch4Option2.addEventListener("click", () => {
//     watch4Options.src = `images/gpixle-watch-bluetooth/obsidian-color/google-pixel-watch-obsidian-device-3qt.png`;
//     watch4Option2.style.outline = outline;
//     watch4Option1.style.outline = `none`;
//     watch4Option3.style.outline = `none`;
//     watch4Option4.style.outline = `none`;
// }); 
   
//     watch4Option3.addEventListener("click", () => {
//     watch4Options.src = `images/gpixle-watch-bluetooth/hazel-champagne-gold/google-pixel-watch-hazel-device-3qt.png`;
//     watch4Option3.style.outline = outline;
//     watch4Option1.style.outline = `none`;
//     watch4Option2.style.outline = `none`;
//     watch4Option4.style.outline = `none`;
// });

//     watch4Option4.addEventListener("click", () => {
//     watch4Options.src = `images/gpixle-watch-bluetooth/chalk-polished-silver/google-pixel-watch-chalk-device-3qt.png`;
//     watch4Option4.style.outline = outline;
//     watch4Option1.style.outline = `none`;
//     watch4Option2.style.outline = `none`;
//     watch4Option3.style.outline = `none`;
// }); 

let watchCollection4 = document.querySelector(".watch-4"),
    shopNow4 = document.querySelector(".shop-4");

watchCollection4.addEventListener("mouseenter", () => {
    shopNow4.style.display = "flex";
    shopNow4.style.fontSize = "0.5rem";
})
watchCollection4.addEventListener("mouseleave", () => {
    shopNow4.style.display = "none";
    watch4Option1.style.outline = `none`;
    watch4Option2.style.outline = `none`;
    watch4Option3.style.outline = `none`;
    watch4Option4.style.outline = `none`;
})       


// Optimised Eventlistener


let watchCards = document.querySelectorAll(".watches");
console.log(watchCards);
watchCards.forEach(options => {
    options.addEventListener("mouseenter", function(e) {
    let target = e.target;
    (target.classList.contains("watch-1"))? shopNow1.style.display = "flex"
    :(target.classList.contains("watch-2"))? shopNow2.style.display = "flex"
    :"";
   
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
    label = document.querySelectorAll(".label")[0];
console.log(label);                            


input.addEventListener("click", () => {
    label.style.top = "0";
    console.log("mouseenter");
})
input.addEventListener("mouseleave", () => {
    label.style.top = "2.5rem";
    console.log("mouseenter");
});




