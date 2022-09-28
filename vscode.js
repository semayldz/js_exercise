// function largestOfFour(arr) {
//   let max;
//   let emptyNumArr =[];
//   for(let i=0; i<arr.length; i++){
//     max = arr[i][0];
//     for(let j=1; j<arr[i].length; j++){
//       if(arr[i][j]>max){
//         max = arr[i][j];
//       }
//     }
//     emptyNumArr.push(max);
//  }
//  return emptyNumArr;
// }
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



// function truncateString(str, num) {
//   let strArr =str.split("");
//   if(strArr.length>num){
//     for(let i=0; i<3; i++){
//       strArr[num+i] ='.';
//     }
//   }
//   return strArr.slice(0,num+3).join('');
// }
// console.log(
// truncateString("Peter Piper picked a peck of pickled peppers", 11));




// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//   let strArr= str.split(" ");

//   let emptyWord= [];
//   let emptySentence =[];

//   for(let i=0; i<strArr.length ;i++){
//     emptyWord.push(strArr[i][0].toUpperCase());
//     for(let j=1; j<strArr[i].length; j++){
//       emptyWord.push(strArr[i][j].toLowerCase());
//     }
//     emptySentence.push(emptyWord.join(""));
//     emptyWord=[];
//   }
//   return emptySentence.join(" ");
// }

// console.log(
// titleCase("sHoRt AnD sToUt"));


function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a - b});
  console.log(arr);
  if(arr.length == 0){
    return 0;
  }
  if(arr[0]>num){   //baş kısmında
    return 0;
  }
  if(arr[arr.length-1]<num){   //son kısımda
    return arr.length;
  }
  for(let i=0; i<arr.length-1; i++){  //aradakiler
     if(arr[i]<num & num<arr[i+1]){
       return i+1;
     }
     else if(arr[i]==num){
        return i;
     }
  }
}

console.log(
getIndexToIns([2, 5, 10], 15)
);
//returns 3


// Chunky Monkey
// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) 
// and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  let emptyArr =[];
  for(let i=0; i<arr.length; i+=size){
    let slicedArr=arr.slice(i,i+size)
    emptyArr.push(slicedArr);
  }
  return emptyArr;
}

console.log(
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
);

//size 2
//arr [0, 1, 2, 3, 4, 5, 6, 7, 8]
//return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].



