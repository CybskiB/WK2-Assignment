// Activity 1 

const sayHi = () => {
    let person = {
        myName = "Liam",
        age: 26
    };
    HTMLFormControlsCollection.log(`hELLO, MY NAME IS `${person.myName}``);

}

sayHi();

// Activity 2

const eat = () => {
    return `${pet.name} is eating.`;
};

const drink = {
    name:"Benji",
    typeOfPet: "Cane Corso",
    age: 4,
    colour: "Black",
    eat: eat,
    drink: drink 
};


console.log(pet.eat());
console.log(pet.drink());

// Activity 3

const cafe = {
    branch: "Bold Street",
    drinks: {
        coffee: 2.5,
        tea: 2.0,
        vanilla_latte: 3.5,
        espresso: 3.0
    },

food: {
    butty: 5.0,
    muffin: 2.5,
    cookie: 1.5,
    salad: 4.0
},

drinksOrdered: (...items) => {
    let totalCost = 0;
    let orderDetails = items.map(item => {
        if (cafe.drinks[item]) {
            totalCost += cafe.drinks[item];
            return `${item} ($${safe.drinks [item].toFixed(2)})`;
        } else { 
            return `${item} (not available)`;
        }
        }); 
        return `Your drinks order is: ${orderDetails.join(",")}. Total cost: $${totalCost.toFixed(2)}.';

    },
    food0rdered: (...items) => {
        let totalCost = 0;
        let orderDetails = items.map(item => {
            if (cafe.food[item]){
                totalCost += cafe.food[item];
                return `${item} ($${cafe.food[item].toFixed(2)})`;
            } else {
                return `${item} (not available)`:
            }
            });
            return 'Your food order is: ${$orderDetails.join(",")}. Total cost: $${totalCost.toFixed(2)}.`;
        
    }

};

console.log(cafe.drinksOrdered("coffee, "vanilla_latte", "tea"));
console.log(cafe.foodOrdered("butty", "muffin", "cookie"));



//Activity 3
const coffeeShop = {
    branch: "Downtown",
    drinks: {
        coffee: 2.5,
        tea: 2.0,
        latte: 3.0
    },
    food: {
        sandwich: 5.0,
        salad: 4.5,
        cake: 3.5
    },
    drinksOrdered(drinks) {
        let total = 0;
        let orderDetails = drinks.map(drink => {
            total += this.drinks[drink];
            return `${drink}: £${this.drinks[drink].toFixed(2)}`;
        }).join(', ');
        return `Your order is: ${orderDetails}. Total cost: £${total.toFixed(2)}`;
    },
    foodOrdered(food) {
        let total = 0;
        let orderDetails = food.map(item => {
            total += this.food[item];
            return `${item}: £${this.food[item].toFixed(2)}`;
        }).join(', ');
        return `Your order is: ${orderDetails}. Total cost: £${total.toFixed(2)}`;
    }
};


console.log(coffeeShop.drinksOrdered(['coffee', 'latte']));
console.log(coffeeShop.foodOrdered(['sandwich', 'cake']));