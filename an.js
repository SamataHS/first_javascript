let arr=[1,2,34,19,4,5];
//arr.shift();
//console.log(arr);
//arr.pop();
//console.log(arr);
//console.log(arr.slice(1,3));
//console.log(arr);
// arr.splice(1,3,"san");
// console.log(arr);
// let final=arr.map((x)=>{
//     return x**2;
// });
// console.log(final);
// let final=arr.filter((x)=>{
//     return typeof(x)==="string";
// });
// console.log(final);
// let sorted=arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(sorted);
 //array is sorted lexically
 let ans=arr.find((x)=>{
     return x>3;
 });
    console.log(ans);