//first task
let CV =` Name:Omnia Essam Kamal
         Faculty: Engneering
          age : 21 years old`;
          console.log(CV);
//second task

let arr = [1,2,3,4]
let newArr=[arr[0],arr[arr.length-1]];
 console.log(newArr);

//thired task
let $input1 =document.querySelector("#add_num1");
let $input2 =document.querySelector("#add_num2");
let $btn=document.querySelector("#btn");
let $result=document.querySelector(".result");
$btn.addEventListener("click" , function(){
let calcMulti= $input1.value * $input2.value;
let calcDiv=$input1.value / $input2.value;
$result.innerHTML=` The result of multiplaction is ${calcMulti}
                   and the result of divation is ${calcDiv}`;
 $result.classList.add("result_style");
 
})