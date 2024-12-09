// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

let squares = arr.map((item) => item * item);

console.log('squares')
console.log(squares);
console.log('------------------------------------------------------------------------------------------------')
// ------------------------------------------------------------------------------------------------

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

const Grade = (score) => {
  console.log(
    `Your grade is ${
      score <= 100 && score >= 85
        ? 'A'
        : score < 85 && score >= 70
        ? 'B'
        : score < 70 && score >= 55
        ? 'C'
        : score < 55 && score >= 40
        ? 'D'
        : 'F'
    }`
  );
};
Grade(80);
console.log('------------------------------------------------------------------------------------------------')
// ------------------------------------------------------------------------------------------------

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
  company: 'Inova',
  model: 'inova-zenith',
  year: 2020,
};

const handleCar = (car) => {
  console.log('car before changing year->' + car.year);
  // destructured model and company;
  const { company, model } = car;
  car.year = 2025;
  console.log(car);
  console.log(`Model name is ${company}, Year is ${car.year}`);
};
handleCar(car);
console.log('------------------------------------------------------------------------------------------------')
// ------------------------------------------------------------------------------------------------

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const prime = num.filter((item, i) => {
  if (item <= 1) return false;
  for (let i = 2; i <= Math.sqrt(item); i++) {
    if (item % i === 0) return false;
  }
  return true;
});

console.log(`Filtered out prime numbers ${prime}`);
console.log('------------------------------------------------------------------------------------------------')
// ------------------------------------------------------------------------------------------------

// Q5 -  State different use cases of map, filter and reduce functions.

// Function             Purpose	                 Output	          Use Case Examples
// map	      |  Transforms array elements	    |  New array	 |   Transform, extract, format data
// filter	  |  Filters elements by condition	|  New array	 |   Remove unwanted items
// reduce	  |  Combines elements into one	    |  Single value	 |   Aggregate, flatten, group data



const numbers = [1,2,3,4,5,6,7,8,9,10];

const cube = numbers.map(item=>item*item*item);
console.log('use case of map cube of an arr: ');
console.log(cube)

// filter example;
const oddNumbers = numbers.filter(num => num % 2 !== 0);


// reduce Example


const sum = numbers.reduce((acc,curr)=>acc+curr,0);
console.log( 'sum of  arr using reduce -> displaying its usecase:')
console.log(sum)
const nestedArr= [[1,2],[3,4],[5,6]];
console.log(nestedArr);
const flatten = nestedArr.reduce((acc,arr)=>acc.concat(arr,[]));
console.log('flatten arr using reduce -> displaying its usecase ')
    console.log(flatten)
    console.log('------------------------------------------------------------------------------------------------')
// ------------------------------------------------------------------------------------------------

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

const fetchData = async () => {
  const API = 'https://jsonplaceholder.typicode.com/todos/2';
  try {
    const res = await fetch(API);
    const data = await res.json();
    console.log( data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();

console.log('------------------------------------------------------------------------------------------------')
// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const people = [
    {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      address: {
        street: "123 Elm Street",
        city: "Springfield",
        state: "Illinois",
        zipCode: "62704",
      },
      contact: {
        phone: {
          home: "123-456-7890",
          mobile: "987-654-3210",
        },
        email: "johndoe@example.com",
      },
    },
    {
      name: {
        firstName: "Jane",
        lastName: "Smith",
      },
      address: {
        street: "456 Maple Avenue",
        city: "Hometown",
        state: "California",
        zipCode: "90210",
      },
      contact: {
        phone: {
          home: "222-333-4444",
          mobile: "555-666-7777",
        },
        email: "janesmith@example.com",
      },
    },
    {
      name: {
        firstName: "Alice",
        lastName: "Johnson",
      },
      address: {
        street: "789 Oak Lane",
        city: "Metropolis",
        state: "New York",
        zipCode: "10001",
      },
      contact: {
        phone: {
          home: "888-999-0000",
          
        },
        email: "alicejohnson@example.com",
      },
    },
  ];
  console.log(people[2].contact.phone?.mobile)
  console.log(people.map((item,index)=>item?.contact?.phone?.mobile));

  


  console.log('------------------------------------------------------------------------------------------------')

// ------------------------------------------------------------------------------------------------


