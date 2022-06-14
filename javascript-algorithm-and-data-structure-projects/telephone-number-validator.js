/*
    Telephone Number Validator
    Return true if the passed string looks like a valid US phone number.

    The user may fill out the form field any way they choose as long as it has the format of valid US number.
    The following are examples of valid formats for US numbers (refer to the test below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

    For this challenge you will be presented with a string such as 800-6792-7753 or 8oo-six427676; laskdjf.
    Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
    */

    function telephoneCheck(str) {
        let tenLength = /\d{10}/,
            tweleveLength = /(\d{3})-(\d{3})-(\d{4})$/,
            thirteenLength = /(\(\d{3}\)\d{3}-\d{4}$)/,
            fourteenLength = /(^[1]\s\d{3}\s\d{3}\s\d{4})|(^[1]\(\d{3}\)\d{3}-\d{4}$)|(^[1-2]\s\d{3}-\d{3}-\d{4}$)/,
            sixteenLength = /^[1]\s\(\d{3}\)\s\d{3}-\d{4}$/;

       return (str.length === 10)?  tenLength.test(str)
                :(str.length ===12)? tweleveLength.test(str)
                :(str.length === 13)? thirteenLength.test(str)
                :(str.length === 14)? fourteenLength.test(str)
                :(str.length === 16)? sixteenLength.test(str)
                :false;
    }
    console.log(telephoneCheck("555-555-5555")); // should return a boolean.

    console.log(telephoneCheck("2 555-555-5555")); // should return true.

    console.log(telephoneCheck("1 (555) 555-5555")); // should return true.

    console.log(telephoneCheck("5555555555")); // should return true.

    console.log(telephoneCheck("555-555-5555")); // should return true.

    console.log(telephoneCheck("1 555 555 5555")); // should return true.

    console.log(telephoneCheck("1 456 789 4444")); // should return true.

    console.log(telephoneCheck("(555)555-5555")); // should return true.

    console.log(telephoneCheck("1(555)555-5555")); // should return true.

    console.log(telephoneCheck("555-5555")); // should return false.

    console.log(telephoneCheck("5555555")); // should return false.

    console.log(telephoneCheck("1 555)555-5555")); // should return false.


    console.log(telephoneCheck("123**&!!asdf#")); // should return false.

    console.log(telephoneCheck("55555555")); // should return false.

    console.log(telephoneCheck("(6054756961)")); // should return false.

    console.log(telephoneCheck("2 (757) 622-7382")); // should return false.

    console.log(telephoneCheck("0 (757) 622-7382")); // should return false.

    console.log(telephoneCheck("-1 (757) 622-7382")); // should return false.

    console.log(telephoneCheck("2 757 622-7382")); // should return false.

    console.log(telephoneCheck("10 (757) 622-7382")); // should return false.

    console.log(telephoneCheck("27576227382")); // should return false.

    console.log(telephoneCheck("(275)76227382")); // should return false.

    console.log(telephoneCheck("2(757)6227382")); // should return false.

    console.log(telephoneCheck("2(757)622-7382")); // should return false.

    console.log(telephoneCheck("555)-555-5555")); // should return false.

    console.log(telephoneCheck("(555-555-5555")); // should return false.

    console.log(telephoneCheck("(555)5(55?)-5555")); // should return false.

    console.log(telephoneCheck("55 55-55-555-5")); // should return false.

    console.log(telephoneCheck("11 555-555-5555")); // should return false.

    