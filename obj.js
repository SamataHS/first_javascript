// function person(name, age) {
//     this.name = name;
//     this.age = age;
// };
// let p1 = new person("sai", 23);
// console.log(typeof(p1));
// function greet(name){
//     console.log("name",name);
// }
// function wish(greet,name){
//     console.log("hi",name);
//     greet("sam");
// }
// wish(greet,"sam");  //We can pass function

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     }

// ];
// let first=arr[0];   //function will come in first
// let ans=first(5,2);
// console.log(ans);

console.log(greet);

var greet=function(){
    console.log("hi");
}                        //var is hoisted but no intialization 
                          //if let is there then error

