const Mall = require("./mall");
const Shopper = require("./shopper");
const Store = require("./store");

// Observable
const catsAndThings = new Store("Cats & things");
const insAndOuts = new Store("Ins & Outs");

// Observer
const alex = new Shopper("Alex");
const eve = new Shopper("Eve");
const sharon = new Shopper("Sharon");
const mike = new Shopper("Mike");

const valleyMall = new Mall();

// Observer
catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
