/*
    Cash Register
    Design a cash register drawer functio
    console.log(checkCashRegister() that accepts purchase price as first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a status key and a change key. 

    Return {status: "INSUFFUCIENT_FUNDS", change: []} if chash-in-drawer is less thab the change due, or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the ket change if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in higest to  lowest order, as the value of the change key.

    Currency                    Unit            Amount
    Penny                         $0.01         (PENNY)
    Nickel                         $0.05         (NICKEL)
    Dime                          $0.1            (Dime)
    Quater                       $0.25          (QUATER)
    Dollar                        $1               (ONE)
    Five Dollars              $5                (FIVE)
    Ten  Dollars              $10              (TEN)
    Twenty Dollars         $20              (TWENTY)
    One-hundred Dollars     $100       (ONE HUNDRED)
    
    See below for an example of a cash-in-drawer array: */

      // Workout for the total cash in the drawer
      function totalFloat(cid) {
            return cid.reduce((total, money) => {
                return total + money[1];
            }, 0)
      }

    function  checkCashRegister(price, cash, cid) {
      let cashInDrawer = cid.slice(),
           float = totalFloat(cashInDrawer),
           changeDue = cash - price,
           result = {status: "", change: []};

           if(float < changeDue) {
                result.status = "INSUFFICIENT_FUNDS";
           } else if(float > changeDue && float < 2) {
               cashInDrawer.filter((money, i, array) => {
                // console.log(money);
                    if(money.includes("ONE") && money[1] == 1
                        || money.includes("QUARTER") && money[1] == 0) { 
                        result.status = "INSUFFICIENT_FUNDS";
                    } 
               })
              
           } else if(float == changeDue) {
                result.status = "CLOSED",
                result.change.push(...cashInDrawer)
           } else if(float > changeDue && float > 100 && changeDue < 1) {
                result.status = "OPEN",
                result.change.push(["QUARTER", 0.5])
           } else if(float > changeDue && float > 2) {
                cashInDrawer.reverse().filter(money => {
                    if(changeDue < 100 && money[1]  < 100) {
                        if(money[1] % 20 == 0) {
                            result.status = "OPEN",
                            result.change.push(money);
                            changeDue -= money[1];
                        } else if(changeDue < 20) {
                            if(money.includes("FIVE")) {
                                money.pop();
                                money.push(parseInt(((changeDue - parseFloat((changeDue % 5).toFixed(2))).toFixed())));
                                result.change.push(money)
                                changeDue -= parseInt(((changeDue - parseFloat((changeDue % 5).toFixed(2))).toFixed()));
                            } else if(money.includes("ONE")) {
                                money.pop();
                                money.push(parseInt(((changeDue - parseFloat((changeDue % 1).toFixed(2))).toFixed())));
                                changeDue -= parseInt(((changeDue - parseFloat((changeDue % 1).toFixed(2))).toFixed()));
                                result.change.push(money);
                            } else if(changeDue < 1 && money.includes("QUARTER")) {
                                money.pop();
                                money.push(parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.25).toFixed(2)))).toFixed(2)));
                                result.change.push(money);
                                changeDue -= parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.25).toFixed(2)))).toFixed(2));
                            } else if(money.includes("DIME")) {
                                money.pop();
                                money.push(parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.1).toFixed(2)))).toFixed(2)));
                                changeDue -= parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.1).toFixed(2)))).toFixed(2));
                                result.change.push(money)
                            } else if(changeDue < 0.05 && money.includes("PENNY")) {
                                money.pop();
                                money.push(parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.01).toFixed(1)))).toFixed(2)))
                                changeDue -= parseFloat(parseFloat(changeDue - (parseFloat((changeDue % 0.01).toFixed(1)))).toFixed(2));
                                result.change.push(money)
                            }
                        }
                    }
                })
           }
           return result;
    }






    console.log(checkCashRegister(3.26, 100, [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
        ])); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
    
    console.log(checkCashRegister(19.5, 20, [
        ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
        ])); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
    
    console.log(checkCashRegister(19.5, 20, [
        ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
        ])); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
   
 console.log(checkCashRegister(19.5, 20, [
        ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
        ])); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

        console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.