/*  
    Palindrome Checker 
    Return true if the given string is a palindrome. Otherwise, return false.

    A palindrome is  a word or sentence that's spelled the same way both forward and backward, ignoring 
    punctuation, case and spacing.

    Note You'll need to remove all none-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindrome.

    We'll pass strings with varying formats, such as racecar, Racecar, and race CAR among others.

    We'll also pass strings with special symbols, such as A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/
  
  
  
  function palindrome(str) {
        let s = str.split(/\W|_|\s/).join("").toLowerCase();
        let p = s.split("").reverse().join("").toLowerCase()
        return  p === s;
   }
console.log(palindrome("eye"));
console.log(palindrome("eye")); //  returns a boolean.

console.log(palindrome("eye")); //  returns true.

console.log(palindrome("_eye")); //  returns true.

console.log(palindrome("race car")); //  returns true.

console.log(palindrome("not a palindrome")); //  returns false.

console.log(palindrome("A man, a plan, a canal. Panama")); //  returns true.

console.log(palindrome("never odd or even")); //  returns true.

console.log(palindrome("nope")); //  returns false.

console.log(palindrome("almostomla")); //  returns false.

console.log(palindrome("My age is 0, 0 si ega ym.")); //  returns true.

console.log(palindrome("1 eye for of 1 eye.")); //  returns false.

console.log(palindrome("0_0 (: /-\ :) 0-0")); //  returns true.

console.log(palindrome("five|\_/|four")); //  returns false.
