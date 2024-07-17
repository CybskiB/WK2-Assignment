// Activity 1.1 

const faveColor = () => {
    console.log("My favourite colour is Blue");
};
faveColor(); 

// //Activity 2.2
// const faveColor = (color) => {
//     console.log(`My favourite colour is ${color}`);

// };
// faveColor ("Purple");

//Activity 2.1 
const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else {
        return (n* factorial(n-1));
    }
}
//console.log(factorial(33));

// ACTIVITY 2.2 

let orderCount = 0;
const takeOrder = (Topping1, Topping2) => {
    console.log(`Pizza with ${Topping1} but not $[Topping2].`);
    orderCount++;
}
takeOrder ("cheese", "beans");

// ACTIVITY 2.3 

let balance = 420.6
let pin = 1408
const cashWithdrawl = (amount, accNum, pinNum) => {
    if ((pin === pinNum) && (balance>amount))
{
    console.log(`Withdrawing ${amount} from account ${accNum}`)
}

} 
cashWithdrawl(20, 180001056, 1408);
cashWithdrawal(400, 66666666, 5130);
cashWithdrawal(666.50, 66666666, 1408);
