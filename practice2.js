// const str="(a+b)*c";
// let str2="";
// for(let i =0;i<str.length;i++){
    
//     if(i!=='('||i!==')'){
         
//     }else{
//         str2+=str[i]
//     }
// }
// console.log(str2)

// function removeOuterParentheses(s) {
//   let result = '';
//   let count = 0;

//   for (let ch of s) {
//     if (ch === '(') {
//       if (count > 0) result += ch;
//       count++;
//     } else {
//       count--;
//       if (count > 0) result += ch;
//     }
//   }

//   return result;
// }
// console.log(removeOuterParentheses("((a+b)*c)+(d+e)")) // Output: "(a+b)*c+d+e"


// const str="(a+b)*c";
// let str2="";
// for(let i =0;i<str.length;i++){
    
//     if(str[i]==='('||str[i]===')'){
         
//     }else{
//         str2+=str[i]
//     }
// }
// console.log(str2)

// target sum
// let arr=[2,3,4,56,78,99,10,15,1];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//     if((arr[i]+arr[j])==100){
//          console.log( arr[i],arr[j]);
//     }

//     }
// }
let ans=''
let sp=' '
for(let i=0;i<5;i++){
    for(let j=0;j<i;j++){
         ans+="*"
    }
    for(let k=5;k<i;k++){
        sp+=" "
    }
 console.log(sp+ans)
}
