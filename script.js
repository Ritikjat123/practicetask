// 1. Remove duplicates from array 
// ip [1, 2, 2, 3, 4, 4, 5, 6, 5]
// op [1, 2, 3, 4, 5, 6]
let inputArr=[1,2,2,3,4,4,5,6,5];
let outputArr=[];


for(let item of inputArr){
    
    if(!outputArr.includes(item)){
        outputArr.push(item);
    }
}
console.log("output of 1st que is ",outputArr);



// 2. Count occurrence of each character in string
// "aabcgd"
// { a: 2, b: 1, c: 1, g: 1, d: 1 }

let str="aabcgd";
let charCount={};


for(let char of str){

    charCount[char]=(charCount[char] || 0)+1;

}
console.log("char count program ",charCount);





// 3. Flatten nested array (custom logic)
// [1, [2, [3, 4], 5], 6]
// [1, 2, 3, 4, 5, 6]

let nestedArr=[1, [2, [3, 4], 5], 6]; 


function flattenedArray(arr){
    let result=[];


    for(let item of arr){
        if(Array.isArray(item)){


            result=result.concat(flattenedArray(item));


        }else{
            result.push(item);
        }
    }
    return result;
}
let flatArr=flattenedArray(nestedArr);
console.log("flattened array is : ",flatArr);





// 4. Count vowels and consonants in a string
// "HelloWorld"
// { vowels: 3, consonants: 7 }



let inputStr="HelloWorld";

let vowelsCount=0;
let consonantsCount=0;



for(let char of inputStr.toLowerCase()){
    if('aeiou'.includes(char)){

        vowelsCount++;


    }
    else if(char >= 'a' && char <= 'z'){
        consonantsCount++;
    }
}
console.log("vowels  and consonants count is : ", {vowels: vowelsCount, consonants: consonantsCount});