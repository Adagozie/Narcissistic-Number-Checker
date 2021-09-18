const userinput = document. querySelector("#userinput"); 

const submit = document. querySelector("#submit"); 

const displayResult = document. querySelector("#displayResult");

function narcissistic(userinput){
  //find no of digits|exponent
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
submit.addEventListener("click", determine);

if (sum === userinput){
   displayResult.textContent = `${userinput} is a narcissistic number`;
   displayResult.style.color = "green";
}
else {
				displayResult.textContent = `${userinput} is not a narcissistic number`;
   displayResult.style.color = "green";
}
     }
 

