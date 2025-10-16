//document.getElementById("count-el").innerText = 5
// let first=5
// let second =9
// let count = first+second

// console.log(count)

// let myAge=21
// let humanDogRatio=2
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)

// let count = 5

// count=count/4
// console.log(count)
// count=70
// console.log(count)
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
console.log(countEl)
console.log(saveEl)
let count=0

function increment(){
 count+=1
 countEl.textContent=count
}
function save(){
    let countStr=count+" - "

    saveEl.textContent+=countStr
    console.log(count)
    countEl.textContent=0
    count=0

}


// let str="you have tree notifications"

 let welcomeEl=document.getElementById("welcome-el")

 let name="ritik"
 let greting="hii welcome "

 welcomeEl.innerText=greting+name

 welcomeEl.innerText=welcomeEl.innerText+"@"
let name3="ritik"
let surname3 = "jat"
 function strName(){
let fullname=name3+" "+surname3
console.log(fullname)
 }
strName()
strName()
//create a two function add3Point and remove1Point

let myPoints=3
function add3Point(){
 myPoints=myPoints+=3
}
function remove1Point(){
    let a=0
   myPoints-=1
}
console.log(myPoints)
add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()
console.log(myPoints)

console.log("mypoints:"+5+9)