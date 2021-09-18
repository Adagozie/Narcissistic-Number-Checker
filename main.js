const userinput = document.querySelector("#userinput"); 

const btn = document.querySelector("#submit"); 

const displayResult = document.querySelector("#displayResult");

function narcissistic(){
  //find no of digits|exponent
  const val = userinput.Value;
  var num = userinput.toString();
  var exponent = num.length;

// split into arrays
var arrayValue = num.split('');

//Access the arrays using loop
var poweredArray, sum = 0;
for(let i=0; i<exponent; i++){
  poweredArray = Number(arrayValue[i])**exponent;
  sum += poweredArray;
}

if (sum === userinput){
   displayResult.textContent = `${val} is a narcissistic number`;
   displayResult.style.color = "green";
}
else {
   displayResult.textContent = `${val} is not a narcissistic number`;
   displayResult.style.color = "red";
}
     };

     submit.addEventListener("click", narcissistic);
     
 

