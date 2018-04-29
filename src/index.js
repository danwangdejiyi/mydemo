require('babel-polyfill');
require('whatwg-fetch');

console.log(1);
myFetch('http://127.0.0.1:3000/',{data:1});
function myFetch(url,data){
   
fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(function(response) {
    //response.status     //=> number 100–599
    //response.statusText //=> String
    //response.headers    //=> Headers
    //response.url        //=> String
  
    response.text().then(function(responseText) { console.log(responseText) })
  },function(error) {
    console.log(error.message) //=> String
  })
  
}