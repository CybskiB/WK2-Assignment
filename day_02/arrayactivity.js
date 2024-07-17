// Activity 1 

let songs = [
    "Come on - Biggie Smalls",
    "NaNaNa - Peggy Gou",
    "Unwritten - Natasha Beningfield "

]
console.log(songs)

songs.push("Waves - Mr Probs")
songs.push("Where is the love - Black Eyed Peas")
console.log(songs)

songs.pop()
console.log(songs)

// Activity 1.2
let numbers = [1,2,3,4,5];

let doubledMumbers = numbers.map(function(number) {
    return number * 2; 
});

console.log("Original numbers:", numbers);
comsole.log("Doubled numbers:", doubledNumbers);


// Acitivty 2.1
let films = [ 
   "Good Will Hunting",
   "The Holdovers",
   "Fast and Furious 7 ",
   "Green Street",
   "Godfathers 1,2 & 3",
   "All James Bonds",
   "Goodfellers",
   "We still Kill the old way"
]

let index = 0;
while (index < films.length) {
    console.assert.og(films[index]);
    index++;
}
films.push("Deadpool");
films.push("John Wick");
console.log(films);

// Activity 2.2
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random()* 50) + 1;

    console.log(randomNumber);
}

// Activity 2.3 
for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// Activity 2.4 
const displayFilms = (filmList) => {
    for (let i = 0; i < filmList.length; i++) {
        console.log(filmList[i]); 
    }
    if (filmsList[2]==="Star Wars Return of the Sith") {
        return "Wooo hooo its StarWars.";
    } else { 
        return "Oh my oh noo We want StarWarsss. Sitck it on!!";
    }

    }
    const filmList = ["Good Will Hunting","The Holdovers","Fast and Furious 7 ", "Green Street","Godfathers 1,2 & 3","All James Bonds", "Goodfellers", "We still Kill the old way"];
    console.log(displayFilms(filmsList));

    // Activity 2.5
    function checkDivisibilityBy7() {
        for (let i = 0; i < 6; i++ ) {
            let randomNum =- Math.floor(Math.random()*30) +1;

            if (randomNum % 7 ===0) {
            console.log(`${randomNum} is divisible by 7.`);
            } else { 
                console.log(`${randomNum} is not divisible by 7.`);
            }

            }
        }

        checkDivisibilityBy7();

        // Activity 2.6 
        const lisFollowers = ["Jo", "Jay", "Junes", "Ben"];
        const ellasFollowers = ["Jam", "Meg", "Kaib", "Kob"];

        for (let i = 0; i < lisFollowers.length; i++) {
            for (let x = 0; x < ellasFollowers.length; x++) {
                if (lisFollowers[i] === ellasFollowers[x]) {
                    console.log(`Matching follower: ${lisFollowers[i]}`);
                }          
              }
        }

        // Acitivty 2.7
        //DO..WHILE LOOP //
        let i = 0;
        do {
            console.log (`Iteetion number ${i}`);
            i++;
        } while (i<10);

        // Do..Whiel Loop is useful as it will loop at least once regardless of its condition, but if said condition is meant to be prevent any execution then this can contribute to or casue errors. Do.. While loops are less commonly used, so others might not understand the code.//

        // WHILE LOOP//
        let i = 0;
        while (i < 10) {
            console.log(`Iteration number ${i}`);
            I++;
        }
        // While loops are good for scenarios where the number of iterations is not known before hand and can be seen as more efficient code. The cons are that when the condition is nvever false, it may become an infinate loop.//

        // //FOR LOOP// // 
        for (let i = 0; i < 10; i++) {
            comsole.log(`Iteration number ${i}`);
        }
        /////For loops are clear and concise which can make it much easier to comprehend, as initialisation, codition and increment/decrement are all in one place. This method is seen as ideal for arrays. The cons are that loops can unfortunately be less readable when the loop logic is complex. // 

    
