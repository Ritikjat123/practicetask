// Find out the questions below:-

// 1. Remove duplicates from array
// ip [1, 2, 2, 3, 4, 4, 5, 6, 5]
// op [1, 2, 3, 4, 5, 6]

// 2. Count occurrence of each character in string
// "aabcgd"
// { a: 2, b: 1, c: 1, g: 1, d: 1 }
// 3. Flatten nested array (custom logic)
// [1, [2, [3, 4], 5], 6]
// [1, 2, 3, 4, 5, 6]

// 4. Count vowels and consonants in a string
// "HelloWorld"
// { vowels: 3, consonants: 7 }

// 1. Remove duplicates from arraywithout using set
// ip [1, 2, 2, 3, 4, 4, 5, 6, 5]
// op [1, 2, 3, 4, 5, 6]

// function removeDuplicates(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);

//         }


//     }
//     return result;
// }
//  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 5]));

// 2. Count occurrence of each character in string
// "aabcgd"
// { a: 2, b: 1, c: 1, g: 1, d: 1 }

// function countOccurence(str){
//     let result={};
//     for( let i of str){
//         if(result[i]){
//             result [i]++;
//         }
//         else{
//             result[i]=1;
//         }
//     }
//     return result;
// }
// console.log(countOccurence("aabcgd"));

// 3. Flatten nested array (custom logic) using flat method
// [1, [2, [3, 4], 5], 6]
// [1, 2, 3, 4, 5, 6]

// function flattenArray(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result=result.concat(flattenArray(arr[i]));
//         }
//         else{
//             result.push(arr[i]);
//         }
//     }
//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]))

// 3. Flatten nested array (custom logic) using flat method
// [1, [2, [3, 4], 5], 6]
// [1, 2, 3, 4, 5, 6]
 
// function flattenArrayUsingFlat(arr){
//     return arr.flat(arr.length);
// }
// console.log(flattenArrayUsingFlat([1, [2, [3, 4], 5], 6]));

// 4. Count vowels and consonants in a string
// "HelloWorld"
// { vowels: 3, consonants: 7 }

// function countVowelsAndConsonants(str){
//     let vowelsCount=0;
//     let consonantsCount=0;
//     let vowels="aeiouAEIOU";
//     for(let i of str){
//         if(vowels.includes(i)){
//             vowelsCount++;

//         }else{
//             consonantsCount++;
//         }
//     }
//     return {vowels:vowelsCount,consonants:consonantsCount};
// }
// console.log(countVowelsAndConsonants("HelloWorld"));

