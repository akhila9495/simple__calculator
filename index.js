const operators={
    "+":(num1,num2)=>num1+num2,
    "-":(num1,num2)=>num1-num2,
    "/":(num1,num2)=>num1/num2,
    "*":(num1,num2)=>num1*num2,
}
/* const editingInput= {
    "delete":,
    "delete":,
    "delete":,
    "delete":,
} */
let a="";
let token=[];
let myFunction=(element)=>{
      let val = element.innerText.toString()
      
      a+=val;
      document.querySelector("#output").innerText=a;  
}
let myClear=()=>{
   a=""
   token=[]
    document.querySelector("#output").innerText="";
}
let myDelete=()=>{
    a=a.slice(0,-1)
    token.pop()
    document.querySelector("#output").innerText=a;
}
let oper=(a,o)=>{
    token.push(a)
    token.push(o)
    a="";
    console.table(token)

}
let evaluation=()=>{
 
   let x= document.getElementById("output").innerText;
   
   document.getElementById("output").innerHTML=eval(x);
   
};