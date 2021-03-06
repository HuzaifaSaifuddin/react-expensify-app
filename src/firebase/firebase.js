import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/database');

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
    
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })

// //   console.log(expenses);
// // });

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 1009500,
// //   createdAt: 738273982
// // });

// // database.ref('notes/-MTkqBURFIErZIGtSRfL').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Node, Rails'
// });

// // database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500)

// // setTimeout(() => {
// //   database.ref().off();
// // }, 7000)

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500)

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch(() => {
// //     console.log('Error fetching data', e)
// //   });

// // database.ref().set({
// //   name: 'Huzaifa Pitolwala',
// //   age: 30,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Bengaluru',
// //     country: 'India'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Data was not removed', e);
// //   });
