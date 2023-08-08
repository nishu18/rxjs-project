// function sum(array){
//     var sum =0
//     i=array.length
//     while(i--){
//         sum+=Math.pow(array[i], 2)
//     }return sum
// }
// console.log(sum([0, 1, 2, 3, 4]));

// var array = [1, 2, 3, 4, 5, 6],
// s=0,
// p=1,
// i;
// for(let i=0; i<array.length; i++){
//     s +=array[i]
//     p *=array[i]
// }
// console.log(s, p)

// const array =[1, 2, 3, 2, 4, 1, 5, 3]
// const dublicate=array.filter((value, index, self)=>{
//     return self.indexOf(value)===index;
// })
// console.log(dublicate);

// const array = [1, 2, 3, 2, 4, 1, 5, 3];
// const uniqueArray = [];

// for(let i=0; i<array.length; i++){
//     if (!uniqueArray.includes(array[i])){
//         uniqueArray.push(array[i])
//     }
// }
// console.log(uniqueArray)
// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];

// const sumArray = [];
// const maxLength = Math.max(array1.length, array2.length);

// for (let i = 0; i < maxLength; i++) {
//   const value1 = array1[i] || 0;
//   const value2 = array2[i] || 0;
//   const sum = value1 + value2;
//   sumArray.push(sum);
// }

// console.log(sumArray);

// const sumArray=[];

// const maxLength=Math.max(array1.length, array2.length);

// for(let i=0 ; i<maxLength ; i++){
//     const value1=array1[i] || 0;
//     const value2=array2[i] || 0;

//     const sum=value1 + value2

//     sumArray.push(sum)
// }
// console.log(sumArray)

// const number =[1,2,3,4,4,5]

// const sum=number.reduce((total, current)=>{
//     return total + current
// }, 0)

// console.log (sum)

// let numbers = [5, 20, 100, 60, 1];

// const max=numbers.reduce((maximum, current)=>{
//     if (current>maximum)maximum=current;
//         return maximum

// })
// console.log(max)

// const array = [5, 10, 3, 8, 1];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//     console.log(i)
//   }
// }

// console.log(max);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };

// const merge=[obj1,obj2,obj3].reduce((acc, cur)=>{
//     return {...acc, ...cur}
// },{})
// console.log(merge)

// const shoppingCart = [
//     {name: 'Apple', price: 1.99, quantity: 3},
//     {name: 'Apple', price: 1.99, quantity: 3},
//     {name: 'Xiomi', price: 2.99, quantity: 2},
//     {name: 'Samsung', price: 3.99, quantity:1},
//     {name: 'Tesla', price: 3.99, quantity: 1},
//     {name: 'Tesla', price: 4.99, quantity: 4},
//     {name: 'Nokia', price: 4.99, quantity: 4},
// ]

// const products = shoppingCart.reduce((productGroup, product) => {
//     const name = product.name;
//     if(productGroup[name] == null) {
//         productGroup[name] = [];
//     }
//     productGroup[name].push(product);

//     return productGroup;
// }, {});

// console.log(products);

// function findDuplicates(arr) {
//     var duplicates = [];
//     var uniqueValues = {};

//     for (var i = 0; i < arr.length; i++) {
//       if (uniqueValues[arr[i]]) {
//         if (duplicates.indexOf(arr[i]) ) {
//           duplicates.push(arr[i]);
//         }
//       } else {
//         uniqueValues[arr[i]] = true;
//       }
//     }

//     return duplicates;
//   }

//   var array = [2,2,2,2,3,3,444,5,5,6,8]
//   var duplicateValues = findDuplicates(array);
//   console.log(duplicateValues);

// function findDublicate(array){
//     let dublicate=[]
//     let uniqueValues={}

//     for(var i=0; i<array.length; i++){
//         if(uniqueValues[array[i]]){
//             if(dublicate.indexOf(array[i])=== -1){
//                 dublicate.push(array[i])
//             }}else{
//                         uniqueValues[arr[i]] = true;

//             }

//     }
//return dublicate

// }

// let arr=[2,2,2,2,3,3,444,5,5,6,8]
// let dub=findDublicate(arr)
// console.log(dub)

// let arr=[2,2,2,2,3,3,444,5,5,6,8]
// let dublicate=arr.filter((value, index)=>
//     arr.indexOf(value)!==index
// )
// // console.log(dublicate)
// let arr = [10, 20, 10, 40, 50, 60, 70];
// let total = 50;
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] == total) {
//       console.log(i, j);
//       found = true;
//       break;
//     }

//   }
//   if (found) {
//     break;
//   }
// // }

// function longest_common_starting_substring(strings) {
//     if (strings.length === 0) {
//       return '';
//     }
    
//     const firstString = strings[0];
//     let longestSubstring = '';
    
//     for (let i = 0; i < firstString.length; i++) {
//       const currentChar = firstString[i];
//       for (let j = 1; j < strings.length; j++) {
//         if (i >= strings[j].length || strings[j][i] !== currentChar) {
//           return longestSubstring;
//         }
//       }
//       longestSubstring += currentChar;
//     }
    
//     return longestSubstring;
//   }
  
//   console.log(longest_common_starting_substring(['go', 'google']));
  



var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;