//insert

// let data =[2,34,54,32,44,32,2,1];
// let newEl=70
// let position=2
// for(let i=data.length-1; i>=0; i--){
//     if(i>=position){
//         data[i+1]=data[i];
//         if(i==position){
//             data[i]=newEl
//         }
//     }
// }
// console.log(data)

// data.splice(2,0, 2000)
// console.log(data)



//delete

// let data =[2,34,54,32,44];
// let position=2

// for(let i=position; i<data.length-1; i++){
//     data[i]=data[i+1]

// }
// data.length=data.length-1

// 
// data.splice(2,1)
// console.log(data)

// let data =[2,34,54,32,44];
// let item =32
// let index=undefined

// for(let i=0; i<data.length-1; i++){
//     if(data[i]==item){
//         index=i
//         break;
//     }
// }
// console.log(index)
// console.log(data.indexOf(item))



//merge

// let data =[2,34,54,32,44];

// let data1 =[2,34,54,32,44];
// let data3=[]
// for(let i=0; i<data.length; i++){
//     data3[i]=data[i]
// }
// for(let i=0; i<data1.length;  i++){
//     data3[data.length+i]=data1[i]
// }
// console.log(data3)


//diffrerent array

// function different(arr1, arr2){
//     const diff=[]
//     for(let i=0; i<arr1.length;  i++){
//         if(!arr2.includes(arr1[i])){
//             diff.push(arr1[i].toString())
//         }

//     }
//     for(let i=0; i<arr2.length; i++){
//         if(!arr1.includes(arr2[i])){
//             diff.push(arr2[i].toString())
//         }
//     }
//     return diff
// }
// let arr1=[2,2,3,4,4]
// let arr2=[2,4,6,7,8]
// console.log(different(arr1, arr2))



// var sub=function(num){
//     let sum=num[0]

//     for(let i=1; i<num.length; i++){
//         num[i]=Math.max(num[i], num[i] + num[i-1])
//         sum=Math.max(sum, num[i])
//     }
//     return sum
// }
// let num=[-2,1,-3,4,-1,9,1,-5,4]
// console.log(sub(num));


// let data =[3,4,6,4,0]
// let temp;
// function rev(data, start, end ){
//     if(start<=end){
//   temp=data[start]
//   data[start]=data[end]
//   data[end]=temp
//   rev(data, start+1, end-1)
// }}
// rev(data, 0, data.length-1)
// console.log(data)


let data=[]
let curentSize=data.length
let max=5

function push(newVal){
    if(curentSize>=max){
        console.log('Stack is full! Cannot push more values.', newVal);
        return;
    }
    data[curentSize]=newVal
    curentSize+=1
}

function pop(){
    if(curentSize>0){
          curentSize-=1
          data.length=curentSize
    }else{
        console.log("stack is already empty")
        return undefined;

    }
}
push(20)
push(20)
push(20)
pop()
pop()

pop()
pop()

console.log(data)
