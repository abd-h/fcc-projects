/*
    Roman Numeral Convertor
    Convert the given number into a roman numeral.

    Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

// Function to calculate numbers for ten or less;

function tenOrLess(num) {
    let s = "",
        one = "I",
        four = "IV",
        five = "V",
        nine = "IX",
        ten = "X";
    if(num < 4) {
         for(let i =1; i <= num; i++)  {
        s += "I" 
        }      
    } else if(num == 4) {
        s += four
    } else if(num == 5) {
        s += "V"
    } else if (num > 5 && num < 9) {
        s += five;
         for(let i =1; i <= (num - 5); i++)  {
        s += one;
        }  
    } else if(num == 9) {
        s += nine;
    } else {
        s += ten;
    }
    return s
}

function oneHundredOrLess(num) {
     const result = [];
    let lessThan4 = "I",
            four = "IV",
            five = "V",
            nine = "IX",
            ten = "X",
            forty = "XL",
            fifty = "L",
            ninety = "XC",
            s = 0;
 if (num <= 10) {
      result.push(tenOrLess(num));
  } else if (num > 10 && num < 40) {
      s = num.toString().split("");
     for(let i = 1; i <= parseInt( s[0]); i++ ) {
         result.push(ten)
     } 
     result.push(tenOrLess(s[1]))
  } else if(num === 40) {
      s = forty;
      result.push(s);
  } else if(num > 40 && num < 50) {
       s = num.toString().split("");
        result.push(forty)
        result.push(tenOrLess(s[1]))
  } else if(num === 50) {
      result.push(s = fifty)
  } else if(num > 50 && num < 90) {
    result.push(fifty);
    s = num.toString().split("");
    for(let i = 1; i <= (s[0] -5); i++) {
        result.push(ten)
    } if (s[1] < 4){
        for(let i = 1; i <= parseInt( s[1]); i++) {
         result.push(lessThan4)
        }
     } else if(s[1]  == 4) {
         result.push(four);
     } else if(s[1] == 5) {
         result.push(five);
     }  else if(s[1] > 5) {
         result.push(five);
         s = s[1] - 5;
         if (s < 4){
            for(let i = 1; i <= parseInt(s); i++) {
            result.push(lessThan4)
            }
        } else if(s  == 4) {
            result.push(four);
        } else if (s[1] === 9) {
            result.push(nine)
    }
}
  } else if(num  === 90) {
      result.push(ninety);
  } else if(num > 90 && num < 100) {
    result.push(ninety);
    s = num.toString().split('');
    result.push(tenOrLess(s[1]))
  }
  return result.join('')
}

function hundreds(n) {
    let currency = "";
    for(let i = 1; i <= n; i++) {
        currency += "C"
    }
    return currency;
}

function tousands(n) {
    let currency = "";
    for(let i = 1; i <= n; i++) {
        currency += "M"
    }
    return currency;
}

function moreThanSixHoundred(num) {
    const result = [];
    let    fiveHundred = "D",
            nineHundred = "CM",
            s = 0;
    if(num > 600 && num < 1000) {
      result.push(fiveHundred);
      s = num.toString().split('');
      result.push(hundreds(s[0] - 5));
      result.push(oneHundredOrLess(parseInt(num.toString().split("").slice(1).join(""))))
  } else if(num === 1000 || num < 2400) {
      s = num.toString().split("")
      result.push(tousands(s[0]))
      result.push(oneHundredOrLess(parseInt(num.toString().split("").slice(1).join(""))));
  } else if(num > 2500) {
       s = num.toString().split("")
      result.push(tousands(s[0]))
      result.push(nineHundred);
      result.push(oneHundredOrLess(parseInt(num.toString().split("").slice(2).join(""))));
      result 
  }
  return result.join('');
}
console.log(moreThanSixHoundred(3999));

function convertToRoman(num) {
    const result = [];
    let    ten = "X",
            forty = "XL",
            fifty = "L",
            ninety = "XC",
            fourHundred = "CD",
            fiveHundred = "D",
            s = 0;
 if (num <= 10) {
      result.push(tenOrLess(num));
  } else if (num > 10 && num < 40) {
      s = num.toString().split("");
     for(let i = 1; i <= parseInt( s[0]); i++ ) {
         result.push(ten)
     } 
     result.push(tenOrLess(s[1]))
  } else if(num === 40) {
      s = forty;
      result.push(s);
  } else if(num > 40 && num < 50) {
       s = num.toString().split("");
        result.push(forty)
        result.push(tenOrLess(s[1]))
  } else if(num === 50) {
      result.push(s = fifty)
  } else if(num > 50 && num < 90) {
    result.push(fifty);
    s = num.toString().split("");
    for(let i = 1; i <= (s[0] -5); i++) {
        result.push(ten)
    } 
    result.push(tenOrLess(s[1]))
  } else if(num  === 90) {
      result.push(ninety);
  } else if(num > 90 && num < 100) {
    result.push(ninety);
    s = num.toString().split('');
    result.push(tenOrLess(s[1]))
  } else if(num === 400) {
      result.push(fourHundred);
  } else if(num === 500) {
      result.push(fiveHundred);
  } else if(num > 500 && num < 600) {
      result.push(fiveHundred)
     s = num.toString().split("");
     result.push(tenOrLess(s[2]))
  } else if(num > 600 && num < 4000) {
      result.push(moreThanSixHoundred(num));
  }
  return result.join('')
}

console.log(convertToRoman(2)); // should return the string II.

console.log(convertToRoman(3)); // should return the string III.

console.log(convertToRoman(4)); // should return the string IV.

console.log(convertToRoman(5)); // should return the string V.

console.log(convertToRoman(9)); // should return the string IX.

console.log(convertToRoman(12)); // should return the string XII.

console.log(convertToRoman(16)); // should return the string XVI.

console.log(convertToRoman(29)); // should return the string XXIX.

console.log(convertToRoman(44)); // should return the string XLIV.

console.log(convertToRoman(45)); // should return the string XLV.

console.log(convertToRoman(68)); // should return the string LXVIII

console.log(convertToRoman(83)); // should return the string LXXXIII

console.log(convertToRoman(97)); // should return the string XCVII

console.log(convertToRoman(99)); // should return the string XCIX

console.log(convertToRoman(400)); // should return the string CD

console.log(convertToRoman(500)); // should return the string D

console.log(convertToRoman(501)); // should return the string DI

console.log(convertToRoman(649)); // should return the string DCXLIX

console.log(convertToRoman(798)); // should return the string DCCXCVIII

console.log(convertToRoman(891)); // should return the string DCCCXCI

console.log(convertToRoman(1000)); // should return the string M

console.log(convertToRoman(1004)); // should return the string MIV

console.log(convertToRoman(1006)); // should return the string MVI

console.log(convertToRoman(1023)); // should return the string MXXIII

console.log(convertToRoman(2014)); // should return the string MMXIV

console.log(convertToRoman(3999)); // should return the string MMMCMXCIX


