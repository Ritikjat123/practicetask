
// const reverseStr=(str)=>{
//     let nStr=" ";
//     for(let i = str.length -1;i>=0;i--){
//         nStr+=str[i];
//     }  
//     return nStr;
// } 
// console.log(reverseStr("vijay"));

// function splitStr(str){ 
    
//     return str.split("");
// }
// console.log(splitStr("vijay"))

// let str="vijay vishva, kar ma ji";
// console.log(str.split(" ",5).join(','));

// let str="ritik jat"
// let newstr='';
// for(let i=0;i<str.length;i++){
//     if(i>0){
//         newstr+=str[i].toUpperCase();
        
//     }else{
//         newstr+=str[i]
//     }
// }console.log(newstr)

// let str ="ritik jat dudee";
// let result =
// str.split('').map((ch,i)=>i>=2?ch.toUpperCase():ch).join('');
// console.log(result);

// for(let i = 0;i<3;i++){
//     setTimeout(()=>console.log(i),1000);
// }


// function firstNonRepeatingChar(str) {
//   return [...str].filter(char => str.indexOf(char) === str.lastIndexOf(char))[0] ||null;
// }
// console.log(firstNonRepeatingChar("aabbcddef"))

// for(let i = 0;i<10;i++){
//    if(i%2==0 && i>4) {console.log(i)}
// }

// let str = "palkesh ji sakunde booked";
// let reverseStr='';
// for(let i = str.length -1 ;i>=0;i--){
//      reverseStr+= str[i];
// }console.log(reverseStr)

// const num=[1,2,3,4,5,6,7,8,9,10];
// const num2=[0];
// const newNum=num.concat(num2)
// console.log(newNum)


// let str="everything is mine";
// let newStr="";
// for(let i = 0;i<str.length;i++){
//     if(i==0){console.log(str.charAt(0).toUpperCase())}
//     else{newStr+=str[i]}
    
// }console.log(newStr)


// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i = 0;i<arr.length;i++){
//     if(i===2){
//         console.log(arr[i])
//     }       
    
// }
// let arr=[1,2,3,4,5,6,7,8,9,22];
// let max = Math.max(...arr);

// let findLargest=arr.filter((n)=>n===max)
// console.log(findLargest)

// let arr=[1,2,3,4,5,6,7,8,9,22];
// let max=Math.max(...arr);
// let withoutMax=arr.filter((n)=>n!==max);
// let secoundMax=Math.max(...withoutMax);
// console.log(secoundMax)

// let arr=[1,2,3,4,5,6,7,8,9,22];
// let smallest=Math.min(...arr);
// let withoutSmallest=arr.filter((n)=>n!==smallest)
// let Secoundsmallest=Math.min(...withoutSmallest)
// console.log(Secoundsmallest);

// let arr=[1,2,3,4,5,6,7,8,9,22];
// let max=Math.max(...arr);
// let withoutMax=arr.filter((n)=>n!==max);
// let secoundMax=Math.max(...withoutMax);
// console.log(secoundMax)

// let arr=[22,3,42,4,5,6,7,77,78,58,99];
// let sorted=[...arr].sort((a,b)=>b-a);
// let fifthMax=sorted[2];
// console.log(fifthMax)

// let arr=[22,33,56,55,60,778,74,90,86,24,22];
// console.log(arr.includes(55));
// if(arr.includes(55)){
//     console.log(arr.indexOf(55));
//     console.log(arr.at(3))
// }

// let arr=[44,65,55,77,88,900,43,33];
// let findNum=arr.filter((n)=>n===55);
// console.log(findNum);
// console.log(arr.indexOf(55));

// let arr=[7,17,88,90,22,33,44,90,7,44,87,90];
// let largestNUm = [...arr].sort((a,b)=>b-a);
// let sorted = largestNUm[0]
// console.log(sorted)
// let findNum=arr.filter((n)=>n===sorted);
// console.log(findNum);
// console.log(arr.indexOf(sorted));

// let arr = ["ritik","vijay","palkesh","harsh"];
// let findBday = arr.filter((n)=>n==="harsh");
// console.log(findBday);
// console.log(arr.indexOf("harsh"));

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let multiplyNum = arr.map((n)=>n*3);
// console.log(multiplyNum);


// let arr = ["vijay","palkesh","ritik","harsh"];
// let Capital = arr.map((n)=>n.substring(0,2)+n.charAt(2).toUpperCase()+n.substring(3));
// console.log(Capital);

// let fruits = ["apple","banana","cherry"];

//   fruits.unshift('orange','kiwi');
//   console.log(fruits);

// let fruits = ["apple","banana","cherry"];

//   fruits.unshift("vijay naya fruit");
//   console.log(fruits);

// let arr = ["vijay","palkesh","ritik","harsh"];
// let Capital = arr.map((n)=>n.substring(0,2)+n.charAt(2).toUpperCase()+n.substring(3));
// console.log(Capital);

// let arr = ["vijay","palkesh","ritik","harsh"];

// let Capital = arr.map((n)=>n.slice(0,3)+n.charAt(3).toUpperCase()+n.slice(4));
// console.log(Capital);

// let person ={
//    "first-name":"ritik",
//     123:"23",
//     isritik:true,
// }
// person.city="indore"
// person.city="pune"
// //delete person.isritik;
// person[123]="22";
// person["first-name"]="vijay";
// console.log(person);

// for(city in person){
//     console.log(`${city} : ${person[city]}`);
// }

// let person={};
// let name1={b:"3"}
// let name2={a:"1"}
// person[JSON.stringify(name1)]="23";
// person[JSON.stringify(name2)]="55";
// console.log(person);


// let person={};
// let name1={123:"3"}
// let name2={a:"1"}

// console.log(name1);
// console.log(name2);
// console.log(name1[123])


// let obj={
//     [[1,2]]:'ritik-jat',
// }
// console.log(obj["1,2"])

// let obj={
//     name:'vijay'
// }
// let bd="name"
 
//  console.log(obj[bd]);

// let obj={
//    [[1,2]]:"new name"
// }
// console.log(obj["1,2"]);
// const person={
//     name:"ritik",
//     city:"indore",
//     isritik:true
// }
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let keyName = "status";
// const user = {
//   name: "Ritik",
//   [keyName]: "online"
// };
// console.log(user)

// let name="jay ho";
// const obj={
//     [name]:"online",
// }
// console.log(obj)

// const name="ritik",age=22;
// const person={name,age};
// console.log(person);

// const { name, age } = student;  // Extracting keys as variables
// console.log(student)

// const user={
//     name:"ritik",
//     age:22,
//     greet:function(){
//         console.log(`Hello,my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };
// user.greet();

// const user={
   
//     name:"ritik",
//     greet:()=>{
//         console.log(`Hello dear,this is ${this.name} `);
//     }
// }; 
// user.greet(); //undefined because arrow function does not  bind 'this' to the object.

// const company={
//     name:"xyz company",
//     ["@"]:"ritik jat",
//     adress:{
//         city:'indore',
//         state:'mp',
//     }
// }

// console.log(Object.assign(company))
// console.log(company);
// console.log(company.adress.city);
// company.adress.city="pune";
// const copy=Object.assign({},company);
// const spreedCopy={...company};
// console.log(copy.adress.city)

// console.log(company.adress.city?.name);
// console.log(company.age??"not found");

// console.log("city" in company.adress);
// console.log(company.adress.hasOwnProperty("city"));
//Object.entries(obj);          // Object → Array
//Object.fromEntries(array);    // Array → Object
// console.log(Object.entries(company));
// console.log(Object.fromEntries(Object.entries(company)));


// let age = "city";
// let obj={
//     name:"ritik",
//     [age]:"22",
// }

// console.log(obj);

// for(let i = 1;i<=5;i++){ let space="";
//     for(let j = 1;j<=i;j++){
//         space+=i;
   
//     } console.log(space)
// }

// let arr1=[1,2,3,4,5];
// let arr2=arr1.map((n)=>n*n);
// console.log(arr2);


// let arr=[2,4,6,8,9];
// let find=arr.filter((n)=>n===9)
// console.log(find,arr.indexOf(9));

// let arr=[2,33,55,77,2,4,5,66];
// let maxNum=[...arr].sort((a,b)=>b-a);
// console.log(maxNum[2])
