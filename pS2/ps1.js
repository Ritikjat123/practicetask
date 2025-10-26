// function greet(name){
//     return "Hello"+" "+ name;
// }console.log(greet("ritik"))

// function add(a,b){
//     return a+b;
// }console.log(add(22,234));

// function add(){
//   let a=10,b=25;
//   return a+b;
// }console.log(add())

// function greet(name="ritik"){
//   return "hello"+" "+name;
// }console.log(greet())

// function processInput(input,callback){
// return callback(input);}

//  function toUpperCase(str){
//   return str.toUpperCase();
 
// }console.log(processInput("ritik jat" ,toUpperCase))

// function input(input,callback){
//   return callback(input);
// }
// function toUpperCase(str){
//   return str.toLowerCase();
// }console.log(input("RUGFGGG",toUpperCase));

// let apy=[1,2,3,4,5,6,7,8,9,10]
// apy.reverse();
// console.log(apy)


// function reverseArray(arr){
//   let reversedArray =[];
//   for(let i = arr.length -1;i>=0;i--){
//     reversedArray.push(arr[i]);
//   }return reversedArray;
// }
// let apy =[1,2,3,4,5,6,7,8,9,10,11,12];
// let reversed = reverseArray(apy);
// console.log(reversed)

// let apy =[1,2,3,4,5,6,7,0];
// let reversedArray = apy.toReversed();
// console.log(apy);
// console.log(reversedArray);

    
    // you have an array [1,2,-3,4,-5,6,0] 
    //you have to position the negative elements alternately to positive 

//     let arr=[1,2,-3,0,6,-5,-6,-8];
//     //let positive and negative numbers is assigned
//     let positiveNum=arr.filter((ele)=>ele>=0);
//     let negativeNum=arr.filter((ele)=>ele<0);

//     console.log("pos ="+positiveNum,"neg="+negativeNum)

//     //pushed in array alternetly
// let arr2=[];
// // let len=Math.max(positiveNum.length,negativeNum.length)
  
//     for(let i = 0;i<arr.length;i++){
//         if (i<positiveNum.length)arr2.push(positiveNum[i])
//         if(i<negativeNum.length) arr2.push(negativeNum[i])

//     }
//     console.log(arr2)

//find secound largest
// let arr=[10,40,20,80,30];
// arr.sort((a,b)=>b-a)
// console.log(arr[1])

//  let row=9;
// for(let i=1;i<=row;i++){
//     let a="";
//     for(let j=1;j<=2*i-1;j++){
//         a+=i;
//     }


//     for(let k=1;k<=row-i;k++){
//         a+=" "
//     }
//     console.log(a)
// }

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";

    // add spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    // add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }

    console.log(line);
}

