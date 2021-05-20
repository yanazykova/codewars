// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.

const numbers = [1,2,3];

for (let number of numbers)
    console.log(number);

// or:

numbers.forEach(function(number) {
    console.log(number);
});

// or, using arrow function:
numbers.forEach(number => console.log(number));