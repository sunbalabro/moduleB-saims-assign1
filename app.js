//   Task No 1

// --------------------------------

// write a function which returns array. call the function and destructure array values and print the value

// function myArr(){
//     return["JawanPakistan" , "Module B" , "web and mobile development"]
// }

// const [Organization , section] = myArr()

// alert(Organization)
// alert(section)

// ---------------------------------


// Task No 2

// ---------------------------------

// Make a car object with model, year, color. display all the values by destructuring

// const car = {
//     model: "Toyota Corolla Atlas",
//     year: 1966,
//     color: "Orange Indicators"
// }

// const {model:FirstModel,year:Year,color:carColor} = car

// var body = document.getElementById("result");

// body.innerHTML = `
// <h1>First Model of Corolla : ${FirstModel}</h1>
// <h1>Color Of First Model Of Corolla : ${carColor}</h1>
// <h1>The year in which corolla has introduced : ${Year}</h1>
// `

//------------------------------------

//   Task No 3

// ------------------------------------

// use three variable name, greeting and display value using template literals

// var greetings = ["Welcome !" , "Have a nice day" , "Happy Coding"]
// const [greet_one,greet_two,greet_three] = greetings 

// var body = document.getElementById("result");

// body.innerHTML = `
// <h1>${greet_one}</h1>
// <h1>${greet_two}</h1>
// <h1>${greet_three}</h1>
// `
// ----------------------------------------


//   Task No 4

// -----------------------------------------

// use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const[FirstNum,SecondNum,ThirdNum] = myNums

// const RemainingVal = myNums.slice(3,10)


//---------------------------------------------

// Task No 5

//----------------------------------------------

// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

// const carSpeed = +prompt("What's the car speed now")
// if(carSpeed == "" || carSpeed == " " || carSpeed == "  "){
//         alert("Can't find any value")
// }
// else if(carSpeed < 80 && carSpeed > 1){
//     alert("car speed is slow")
// }
// else if(carSpeed > 80 && carSpeed < 120){
//     alert("car speed is moderate")
// }
// else if(carSpeed > 120){
//     alert("car speed is fast")
// }    

// -----------------------------------------------