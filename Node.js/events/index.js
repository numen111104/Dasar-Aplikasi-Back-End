const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name, sugar, milk }) => {
  console.log(
    `coffe ${name} telah dibuat dengan komposisi susu ${sugar} gram dan susu ${milk} ml`
  );
};
const makeFood = ({ name, meat, nugget, time }) => {
  switch (time) {
    case "dinner":
      console.log(
        `makan malam dengan ${name} dengan daging ${meat} dan nugget ${nugget}`
      );
      break;
    case "lunch":
      console.log(
        `makan siang dengan ${name} dengan daging ${meat} dan nugget ${nugget}`
      );
      break;
    case "breakfast":
      console.log(
        `makan pagi dengan ${name} dengan daging ${meat} dan nugget ${nugget}`
      );
      break;
    default:
      console.log(
        `makan dengan ${name} dengan daging ${meat} dan nugget ${nugget}`
      );
  }
};

const handler = ({ name, sugar, milk, time, meat, nugget }) => {
  makeCoffee({ name, sugar, milk });
  makeFood({ name, meat, nugget, time });
};

myEventEmitter.on("handler-fungsi", handler);
myEventEmitter.on("make-coffee", makeCoffee);
myEventEmitter.on("make-dinner", makeFood);
myEventEmitter.on("make-lunch", makeFood);

myEventEmitter.emit("make-coffee", { name: "espresso", sugar: 2, milk: 0 });

myEventEmitter.emit("make-dinner", {
  name: "burger",
  meat: "beef",
  nugget: 2,
  time: "dinner",
});

myEventEmitter.emit("make-lunch", {
  name: "Nasdang",
  meat: "ayam",
  nugget: 2,
  time: "lunch",
});

myEventEmitter.emit("handler-fungsi", {
  name: "espresso",
  sugar: 2,
  milk: 0,
  time: "dinner",
  meat: "beef",
  nugget: 2,
});
