// let intro=["hii my self ritik jat","i'm from indore","i'm pursuing btech cse ","from lnct clg"
// ]
// for(let i=0;i<intro.length;i+=1){console.log(intro[i])}

// let cards=[3,7,1]
// for(let i=0;i<cards.length;i++){console.log(cards[i]


// console.log("hii server on???")
// let errorMessage=document.getElementById("error")
// console.log(errorMessage)
// function message(){
//     console.log("working")
//     errorMessage.textContent="message deleiver successfull!!!"
// }

// // let sentance = ["hii","my Name","is","Ritik Jat"]
// // let greetingEl = document.getElementById("greeting-el")
// // for(let i=0;i<sentance.length;i++){
// //     greetingEl.textContent+=sentance[i]+" "
// // }
// let player1=102
// let player2=105

// function getFastestRaceTime(){
//     if (player1<player2){
//         return player1
//     }
//     else if(player2<player1){
//         return player2
//     }
//     else{
//     return player1
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime(){
//    return player1+player2
// }
// let totalTime=getTotalRaceTime()
// console.log(totalTime)

// let randomNumber = Math.random()*6
// console.log(randomNumber)

// let flooredNumber=Math.floor(3.45632)
// console.log(flooredNumber)



// function rollDice(){
//     let randomNumber=Math.floor((Math.random()*6)+1)
//     return randomNumber
// }
// console.log(rollDice())


// let hasSolvedChallenge=false
// let hasHintsLeft=false

// if(hasSolvedChallenge===false&&hasHintsLeft===false){
//     showSolution()
// }

// function showSolution(){
//     console.log("showing the solution")
// }

// let hasLikeDocumentries=false
// let hasLikeStartups=true

//  if(hasLikeDocumentries===true||hasLikeStartups===true){
//     recomendedMovies()
//  }

// function recomendedMovies(){
// console.log("hey ,check out this new file we think you will like!!!")}

// let course ={
//    title:"learn css grid for free",
//    lessons:16,
//    creator:"per harald borgen",
//    length:63,
//    level:2,
//    isFree:true,
//    tags:["HTML","css"]
// }
// console.log(course.title)

// let castle={
//     title:"living like a king in my castle",
//     price:190,
//     isSuperHost:true,
//     images:["img/castle1.png","img/castle2.png"]
// }
// console.log(castle.title)
// console.log(castle.isSuperHost)
// console.log(castle.images)

// let ritik={
//     name:"ritik jat",
//     age:22,
//     country:["India"],
   
// }
// console.log(ritik.name)
// console.log(ritik.age)
// console.log(ritik.country)

// let person={
//   name:"Ritik Jat",
//   age:"21",
//   country:"INDIA"
// }
// function logData(){
//   console.log(person.name+" is "+person.age+" year old and live in "+person.country)
// }
// logData()

// let largestCountries=["tuvalu","india","USA","Indonasia","monaco"]
// for(let i =0;i<largestCountries.length;i++){
//   console.log("-"+largestCountries[i])
// }
// largestCountries.pop()
// largestCountries.push("pakistan")
// largestCountries.shift()
// largestCountries.unshift("china")
// console.log(largestCountries)

// let hand=["rock","paper","scissor"]

// function getHand(){
//  let rendomIndex=Math.floor(Math.random()*3)
//  return hand[rendomIndex]
// }
// console.log(getHand())
// let errorParagraph=document.getElementById("errorP")
// console.log(errorParagraph)
// function home(){
//     errorParagraph.textContent="sorry we are working on it!!"
// }
// const closeBtn = document.getElementById("close-btn");
// closeBtn.addEventListener("click",function(e){
//     const name =prompt("whats your name?");
//     document.body.innerHTML="<h1>welcome, "+name+ "</h1>";
// });
let menu_icon_box =document.querySelector(".menu_icon_box");
let box =document.querySelector(".box");
menu_icon_box.onclick=function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active");
}
// document.onclick=function(e){
//     if(!menu_icon_box.contains(e.target) && !box.contains(e.target))
//         menu_icon_box.classList.remove("active");
//         box.classList.remove("active");
//     }
// let btnBack=document.querySelector("button");
// btnBack.addEventListener("click",()=>{
//     window.history.back();
// });
function back(){
    window.history.back()
}
const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");


showPopupBtn.addEventListener("click",()=>{
document.body.classList.toggle("show-popup");
});
hidePopupBtn.addEventListener("click",()=>showPopupBtn.click());