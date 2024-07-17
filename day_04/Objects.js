// let person = {
// myName: "Liam",
// age: 26
// };

// console.log(person.myName); 
// console.log(person.age);

// console.log(person["myName"]);  
// console.log(person["age"]);

// let offer = "none";
// let time = 1500;
// let cafeName = "Whitesheep";


// const cafe = { 
//     name: cafeName,
//     seatingCapacity: 100,
//     hasSpecial0ffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filer coffee",
//         "Tea",
//         "Hot chocolate"

//     ], 

//     breakfast0ffer: "Free croissant with coffee", 
//     lunch0ffer: "Free drink with suprisingly priced sandwich",
//     no0ffer:"Sorry no offer"

// };

// cafe.name = "Liam's Yummy Cafe";

// console.log(cafe)

// if (time < 1100) {
//     offer = cafe.breakfast0ffer
// }    else if (time < 1500) {
//     offer = cafe.lunch0ffer;
// //     // console.log(cafe.breakfast0ffer)
// // } else if (time >= 1500){
// //     offer = cafe.no0ffer;
// // };

// // console.log( offer ) 

// let day = "sunday";
// let message = "";

// let alarm = {
//     weekendAlarm: "No alarm necessary", 
//     weekdayAlarm:"Get up at 7am"
// }
// if ((day == "saturday")||(day == "sunday")) {
//     alarmMessage = alarm.weekendAlarm
// }
// else {
//     alarmMessage = alarm.weekendAlarm
// }
// console.log(alarmMessage)

// let person = {
//     myName: "Liam",
//     age: 26,
//     faveSongs: [
//         "Unwritten - Natasha B",
//         "Come On - Biggie",
//         "Rock the Casbah - The Clash"
//     ]
// };
// console.log(person.faveSongs[1])
// // Can you use a for loop for console.log each song in turn? 


let offer = "none";
let time = 1500;
let cafeName = "Whitesheep";


const cafe = { 
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [ "Cappucino", "Latte", "Filer coffee", "Tea", "Hot chocolate"], 
    breakfast0ffer: "Free croissant with coffee", 
    lunch0ffer: "Free drink with suprisingly priced sandwich",
    no0ffer:"Sorry no offer",
    openCafe() {
        console.log(this.hasSpecialOffers)
        if (this.hasSpecialOffers) { 
            return "Time for a special offer"
        }
        
    },
    closeCafe() {
        return "We are closed."
    }
 
};
console.log(cafe.openCafe());



