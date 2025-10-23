//blackjack game
let player = {
    Name:"ritk jat",
    Chips:200,
    sayHello:function(){
        console.log("heisannn!")
    }
}
player.sayHello()

let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
console.log(cards)

// let player = {
//      Name:"ritk jat",
//      Chips:145
// }
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name+": $"+ player.Chips

function getRandomCard(){
 let randomNumber = Math.floor(Math.random()*13)+1
 if(randomNumber>10){return 10}
 else if(randomNumber===1){return 11}
 else{return randomNumber}
}


//let sumEl=document.querySelector("#sum-el")
//create a startGame function that calls renderGame.
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
if(sum<21){
    message="Do you want to draw a card? "
}
else if (sum===21){
    message=" you've got the Blackjack card"
    hasBlackJack=true
}
else{message="you're out of the game"
    isAlive=false
}
// console.log(hasBlackJack)
// console.log(isAlive)
   messageEl.textContent=message
   sumEl.textContent="sum:" + sum
   cardsEl.textContent = "Cards:" 
   for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
   }
}
function newCard(){
   // console.log("Drawing a new card from the dock!")
   if(isAlive===true&&hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    //push the newCard to the array
    cards.push(card)
    //console.log(cards)
   //  cardsEl.textContent=cards
    // startGame()
    renderGame()}
} 

//Array practice
// let experiance=["fresher","devloper","okaaat me rehle"]
// experiance.push("jai ho")
// console.log(experiance[0],experiance[1],experiance[2],experiance[3])

// let newExperiance="same here!"
// experiance.push(newExperiance)

// console.log(experiance)

//enter club 

// let age = 13
// console.log(age)
// if(age<21){
//     console.log("SORRY Sir but you are not elegible for entering the night club!!!")
// }
// else{
//     console.log("welcome sir !!!")
// }

//BIRTHDAY CARD 
// let age=100
// if(age < 100){
//     console.log("you are not elegible yet!!")
// }
// else if(age==100){
//     console.log("wohoooo!!! you got the birthdayCard")
// }
// else{
//     console.log("Not elligible!!! you have already gotten one")
// }

