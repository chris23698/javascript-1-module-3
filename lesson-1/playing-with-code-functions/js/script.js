//function expression

const showPetName = function (name){
    console.log("the pet name is: " + name);
}

// fat arrow function, function expression

const showPetNameTwo = (name, age) => {
    console.log("the pet name is: " + name + " the age is: " + age);
}


showPetName("Rhino");

showPetNameTwo("Lion", "30");

// multiple variables

var myName = "chris";
var myAge = "23";

console.log("my name is " + myName + " my age is" + " " + myAge)
console.log(`my name is: ${myName}
my age is: ${myAge}
`);

// global scope

var cityName = "Oslo";

function showMeTheCityName (){
    console.log("the city name is: " + cityName);
}
showMeTheCityName()

console.log(cityName);

function isScania(){
if(cityName === "Oslo"){
    console.log(cityName + " is scandinavian")
}else {
    console.log("not scandinavian")
   }
}
isScania()

//functional scope


function ShowMeMyCar (){
    const MyCar = "audi";
    console.log("my car is: " + MyCar);
}

ShowMeMyCar()


// block scope

{
    const myDog = "snorre";
    const face = "ugly";
    var someAge = 13;  // can use var outside of brackets
    console.log(myDog + " " + face);
}
console.log(someAge);


// this

const myObject = {
    myFunction: function() {
        console.log(this);
    }
}
myObject.myFunction();


const thisObject = {
    number: 10,
    thisFunction: function(){
        console.log(this.number);
    }
}
thisObject.thisFunction();



// terny operator


const pet = "Rhino";

// let isDangerous;

// if(pet === "Rhino"){
//     isDangerous = true;
// } else {
//     isDangerous = false;
// }

// same code

const isDangerous = pet === "Rhino" ? true : false;