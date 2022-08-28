// // // Practice Essential Modern Javascript Concepts for React

// // fetch data 

// Promise: : there are three State of Promise. 1: Pening state, 2: Resolved state, 3: Rejected
fetch('https://jsonplaceholder.typicode.com/todos/1') // Promise Pending
  .then(response => response.json()) 
  .then(json => console.log(json)) // Promise Resolved
  .catch(err => console.log(err)) // Promise Rejected 

// when we need to send request to any server (like api request for fetch data), that time 3 things need to deal with. because it will take time to sync data (data ashte kisuta somoi lagbe)
// 1. Callback
// 2. promise
// 3. async await


// // async await

async function run() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        console.log('fetch', data);
    }catch(err){
        console.log('Error', err);
    }
}
run()