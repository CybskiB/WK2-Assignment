// if (1 === "1") {
//     console.log(true);
// } else { 
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "Dull";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check Again");

// }

// else if (place == "Manc" && weather == "Rain"){
//     console.log("Obvs");
// }

// else if(place == "Manc" && weather == "Dull") {
//     console.log ("Guess it's Monday.")
// }
// else {
//     console.log("what it isn't raining?");

// }

let car = "Peugeot";

if(car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
} else if(car == "Peugeot || car == "Citreon"){
    console.log("You've got a French car boy!"); 
} else if(car == "Honda" || car == "Toyota || car == "Suzuki") {
    console.log("Japanese cares are dead quiet!");]
} else if(car == "Mercedes"){
    console.log("You're a proper posh German!");
} else if(car == "Volkswagen"){
    console.log("German is good!");
} else if(car == "Hyundai" || car == "Kia") {
    console.log("South Korean cars are becoming popular!");
} else{ console.log("Your car is not in one of the global leading companies.")
}

let car = "Peugeot";

switch(car) {
    case "Ford":
        case "GM":
            console.log("You've got an Amerian Car!");
            break;
            case "Peugeot":
            case "Citroen":
                console.log("You've got a French boy!");
                break;
            case "Honda":
            case "Toyota":
            case "Suzuki": 
                console.log("Japanese cars are dead quiet!");
                break;
            case "Mercedes":
                console.log("You are a proper posh German!");
                break;
            case "Volkswagen":
                console.log("German is good!");
                break;
            default:
                console.log("Your car ois not in the top ten companies in the world")
        
        }
        