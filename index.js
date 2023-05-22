const information = require("./information");
console.log(`Hi, my name is ${information.name} and I'm from the ${information.campus} campus`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm losing my mind",
    e : "oO",
    T : "U "
}));