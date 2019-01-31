// CONSOLE.LOG

// *************** console.log("hello");

// IGNORING VALUES

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;


// TEMPLATE LITERALS
// Denoted with backticks ``
// Placeholders ${expression}

const cheetah = {
  name: 'Cheetah',
  scientificName: 'Acinonyx jubatus',
  lifespan: '10-12 years',
  speed: '68-75 mph',
  diet: 'carnivore',
  summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
  fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
  const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name} </h3>
        <img src=" ${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact"> ${animal.fact} </p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;

  return cardHTML;
}

// *************** console.log(createAnimalTradingCardHTML(cheetah));

// DESTRUCTURING VALUES FROM AN OBJECT

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

// *************** console.log(type, color, carat);

// DESTRUCTURING VALUES FROM AN ARRAY
// example 1
const point = [10, 25, -34];

const [x, y, z] = point;

// *************** console.log(x, y, z);

// example 2
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one] = things;
const [, , , two] = things;
const [, , , , , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

// *************** console.log(colors);

// FOR OF LOOP
const digits = ['apple', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
// ***************   console.log(digit);
}

// You can stop or break a for...of loop at anytime.
// And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (let day of days) {
  // console.log(day.slice(1));
  // *************** console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

// Spread Operater
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
// *************** console.log(...books);

// Concat
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
// *************** console.log(produce);

// Spread + Concat

const programming = ["javascript", "html", "css"];
const languages = ["spanish", "english", "tagalog"];

const communication = [...languages, ...programming];

// *************** console.log(communication);

// Rest parameters

// Example 1
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
// console.log(total, subtotal, tax, items);

// Example 2
// Another use case for the rest parameter is when you’re working with variadic functions. Variadic functions are functions that take an indefinite number of arguments.
const nums = [2,3,1,45,6];
function sum() {
  let total = 0;
  for(const num of nums) {
    total += num;
    console.log(total);
  }
  return total;
}
console.log('This is the total ' + sum(...nums));

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums){
        let total = 0;

    if(nums.length === 0){
        return 0;
    } else {
        for(const num of nums){
        total += num;
    }
    return (total/nums.length);
    }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
