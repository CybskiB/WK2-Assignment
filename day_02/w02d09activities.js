// Activity 1 //

let age = 16;
let serve = (age < 17) ? `You are not old enough` : `Yes I can serfe you`
console.log(serve) 

// Activity 2 //
let top = "Tuna";

switch(top){
    case "olives":
    case "chicken":
        console.log("It sounds ok but I'm a a veggieee!");
        break;
        case "Turkey":
            console.log("Can't go wrong with a bit of turkey")
            break;
            case "Salmon":
                console.log("I need this as the main topping on my pizzaa");
                break;
                case "Sweetcorn":
                    console.log("Ew.")
                default:
                    console.log("I dont want this topping on my pizza, thanks though.")

}

// Activity 3 //

let password = "Definitely not my password";

if (password.length < 8) {
    console.log("The password is too short. Please enter more characters to continue.");
} else { 
   console.log("Password Accepted. Welcome Aboard.");

}


//Activity 4//

let num = 20;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
} else if (num % 3 === 0) {
    console.log("buzz");
}   else if (num % 5 === 0) {
    console.log("buzz");
}   else { 
    comsole.log(num);
}

// Activity 5 // 

let num = 1010101; 

let numStr = num.toString();
let reversedStr = numStr.split('').reverse().join('');
if (numStr === reversedStr) {
    console.log(`${num} is a palidrome.`);
} else {
    console.log(`${num} is not a palidrome.`);

}

// Activity 6 //

let time = 4;
let placeOfWork = "the office";
let townOfHome = "home";

if (time >= 0 && time <6) { 
    console.log(`At ${time}:00, I am trying to sleep.`);
} else if (time >= 6 && time < 8) {
    console.log(`At ${time}:00, I'm at ${townOfHome}.`);
} else if (time >= 6 && time < 8) {
    console.log(`At ${time}:00, I'm commuting.`);
} else if (time >= 9 && time <17) {
        console.log(`At ${time}:00, I'm at ${placeOfWork}.`);
} else if (time >= 18 && time < 24) {
    console.log(`At ${time}:00, I'm on my way home.`);
} else if (time >= 18 && time < 24){
    console.log (`At ${time}:00, I'm at ${townOfHome}.`);
} else {
    console.log(`That's an invalid time.`);

}

// ACITIVITY 7 // 

let str = "jrfndklhgfndjkjlkgperfifhdknsadcvjhiiohjfkledsopiiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjsh";
const vowels = "aeiouAEIOU";
let lastvoewlIndex = -1; 

for (let i = str.length - 1; o >= 0; i--) {
    if (vowels.includes(str[i])){ 
        lastVowelIndex = i;
        break;
    }
}
console.log(`The index of the last vowel is: ${lastVowelIndex}`);

// ACTIVITY 8 // 
let word = "level";
let isSame = word.length > 0 && word [0] === word[word.length - 1];
console.log(isSame);

// ACTIVITY 9 // 

let num1 = 4; 
let num2 = 5;

let sum = num1 + num2; 

let result;
if (sum % 2 === 0) {
    result = sum;
} else {
    result = num1 * num2; 

}

console.log(result);

