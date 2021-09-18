const userinput = document.querySelector("#userinput"); 

const btn = document.querySelector("#submit"); 

const displayResult = document.querySelector("#displayResult");

function narcissistic(userinput){
  //find no of digits|exponent
  const inputF = userinput.value;
  var num = userinput.toString();
  var exponent = num.length;

// split into arrays
var arrayValue = num.split('');

//Access the arrays using loop
var poweredArrray, sum = 0;
for(let i=0; i<exponent; i++){
  poweredArray = Number(arrayValue[i])**exponent;
  sum += poweredArray;
}

if (sum === userinput){
   displayResult.textContent = `${inputF} is a narcissistic number`;
   displayResult.style.color = "green";
}
else {
   displayResult.textContent = `${inputF} is not a narcissistic number`;
   displayResult.style.color = "green";
}
     };

     submit.addEventListener("click", narcissistic);
     
 

