// a me fun ki puri body print ho jayegi kyuki a me fun ki body store hui h
// console.log(a());
// function a(){
//     console.log("hello");
// }

//var me hoisting ki wjh se undefined aayega
// var x=20;
// function printValue(){
//     console.log(x); //ans is undefined bcs access x without declare
//     var x=10;
// }
// printValue();

// 20 20 10 aayega because first clg is before fun and x is made by var and in the block we print x and then we update value of x to 10
//  var x=20;
// function printValue1(){
//     console.log(x);
//      x=10;
//      console.log(x);

// }
// console.log(x);
// printValue1();


//start end setTime because of the syncronomous and asyncronomous code the console is syncronomous code so it directly in call stack in the execution phase and the asyncronomous code is settimeout which is in macro que so it execute after syncronomous code so this output
// console.log("start ");
// setTimeout(()=>{
//     console.log("setTime");
// },0);
// console.log("end");

//reference error y is not defined and then code terminated
// console.log(y);
// console.log(typeof(y));

// function abc() {
//   a = 10;
//   b = 20;
//   console.log(a);//10
//   console.log(b);//20
// }
// abc();
// console.log(a);//10
// console.log(b);//20


// console.log([1,2,3]==[1,2,3]);//false // because array is an object and both have different address in memory it compare the address of both
// console.log({ name: "a" } == { name: "a" });//false because both are different object in memory their address is different

// console.log(name);
// var name = "John";//empty string because of hoisting and fname is reserved word

// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");

