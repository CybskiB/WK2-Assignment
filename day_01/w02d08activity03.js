// ACTIVITY 3

const today = new Date();
const birthday = new Date (`2024-07-12`);
const difInMil = birthday - today; 
const difInDays = Math.ceil(difInMil / (1000 * 60 * 60 * 24));

console.log ('There are ${difInDays} days left until your birthday.');