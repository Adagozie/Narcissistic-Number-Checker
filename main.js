const userinput = document.querySelector("#userinput"); 

const submit = document.querySelector("#submit"); 

const displayResult = document.querySelector("#displayResult");

function narcissistic(){
  //find no of digits|exponent
  const num = userinput.value;
  
// split into arrays
const arrayValue = num.split('');
const exponent = arrayValue.length;

//Access the arrays using loop
var poweredArray, sum = 0;
for(let i=0; i<exponent; i++){
  poweredArray = Number(arrayValue[i])**exponent;
  sum += poweredArray;
}

if (sum == num){
   displayResult.textContent = `${num} is a narcissistic number`;
   displayResult.style.color = "green";
}
else {
   displayResult.textContent = `${num} is not a narcissistic number`;
   displayResult.style.color = "red";
}
     };

     submit.addEventListener("click", narcissistic);
     
 

