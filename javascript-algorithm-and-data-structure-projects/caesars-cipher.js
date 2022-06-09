/*
    Caesars Cipher
    One of the simplest and most widely known ciphers is a Caasar cipher, also known as a shift cipher.
    In a shft chipher the meanings of the letters are shfted by some set amount.

    A common modern use is the ROT13 chipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

    Write a function which takes a ROT13 encoded string as an input and return a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e spaces, punctuation), but do pass them on
*/

    function rot13(str) {
        let newStr = str.toUpperCase().split(" ").slice();   
       console.log(str.length);
        let alphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let s = newStr.reduce((acc, element) => {
            element.split("").concat(" ").forEach((a, i) => {
                if(alphabet.indexOf(a) === -1) {
                    acc.push(a)
                } else if(alphabet.indexOf(a) > 13) {
                    acc.push(alphabet[alphabet.indexOf(a) - 13]);
                } else if(alphabet.indexOf(a) == 13 || alphabet.indexOf(a) === 0) {
                    acc.push(alphabet[alphabet.indexOf(a) + 13]);
                }   else if(alphabet.indexOf(a) < 13) {
                    acc.push(alphabet[alphabet.indexOf(a) + 13]);
                }
            });
            return acc;
        }, [])
        s.splice([s.length -1])
         return s.join("");
    }

    console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP

    console.log(rot13("SERR CVMMN!")); // should decode to the string FREE PIZZA!

    console.log(rot13("SERR YBIR?")); // should decode to the string FREE LOVE?

    console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.