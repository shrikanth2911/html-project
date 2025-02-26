function checkEvenOdd(){
//     const button=document.getElementById("btn");
// button.addEventListener("mouseover",function(){
//     button.style.backgroundColor="pink"
// });

// button.addEventListener("mouseout",function(){
//     button.style.backgroundColor="grey"
// });
const num=document.getElementById("number").value;
const resultElement=document.getElementById("result");
if(num%2===0) {
    resultElement.innerHTML=num + " is even";
}
else{
    resultElement.innerHTML=num + " is odd";
}
}
