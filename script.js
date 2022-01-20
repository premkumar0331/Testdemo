//XML-HTTP
/*

the output of the API must be JSON.
*/
//step01: create a XHR object
// this object is required to interact with the server.
var request=new XMLHttpRequest(); //maintain the var name same throughtout the code EX: res/request/anyname 

// step02: create a connection or extracting the information
//two imp parameters 1. HTTP method: GET, 2. APT url:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); //we are opening a connection and this is a inbuilt method.

//step03: sending a connection:
// data travelling from server to client is string
request.send();
//scrolling mouse ,typing and clicking all these are considered as a event
//step 4: once the data loaded succesfully(onload) from the server
// for every event we need a function in JS

// data coming from server is string 
//we have to convert to JSON object, thus conversion is written in the below function
request.onload=function(){
var data = JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        //console.log(`Country:${data[i].name} Capital:${data[i].capital}`);
        console.log(`country: ${data[i].name}
        Latitude: ${data[i].latlng[0]} Longitude: ${data[i].latlng[1]}
        flag: ${data[i].flag}`);
    }
}

//Q1: print all the countries names in console
//Q2: From the above question print Country name along with the Capital
// console.log(data.name);
// template literals: // introduced in ES6
//Q3: print the latitude and longitude along with the country name
//q4: print the country Flag;

// hoisting : // hoisting is a developer error of accessing variables
//scope and visibility
//scope: 
//let and const : block scope {}
// var : global scope



//Day 5:
// For every function we must have a return key word,
//if return is missing then the output will be undefined when we call outside the functoin.
