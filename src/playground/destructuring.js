// 
// Object Destructuring
// 

// const person = {
//   name: 'Huzaifa',
//   age: 30,
//   location: {
//     city: 'Bengaluru',
//     temp: 24
//   }
// };

// const { name: firstName = 'Huzi', age, location } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// 
// Array Destructuring
// 

// const address = ['1299 S Juniper Street', 'Phil', 'Pen', '19147'];
// const [, city, state = 'New'] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)
