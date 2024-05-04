
const prompt = require("prompt-sync")();

var total_days = prompt("Enter total days of year : ");


var weeks = Math.trunc(total_days/7);
var days = (total_days % 7);

days == 1 ? console.log("There are "+weeks+" weeks and "+days+ " day in a year") : console.log("There are "+weeks+" weeks and "+days+ " days in a year");


