const shopNow = document.getElementsByClassName("shop-now")[0],
    middle = document.getElementsByClassName("middle"),
    left = document.getElementsByClassName("left");
console.log(shopNow);

// function shopping() {

//   shopNow.style.backgroundColor = "black"
// }
// shopping()
shopNow.addEventListener("mousseover", () => {
      middle.style.transform = "translateX(30%)"
  right.style.transform = "translateX(100%)"
})