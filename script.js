
const pswElmt= document.getElementById("psw");
const clipboardBtn= document.getElementById('clipboard');
const lenElmt= document.getElementById("len");
const uppercaseElmt= document.getElementById("uppercase");
const lowercaseElmt= document.getElementById("lowercase");
const symbolsElmt= document.getElementById("symbols");
const numbersElmt= document.getElementById("numbers");
const submitBtn= document.getElementById("submit");


const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_-+=";


function getUppercase(){
  	return upper[Math.floor(Math.random()*upper.length)];
}

function getLowercase(){
 	return lower[Math.floor(Math.random()*lower.length)];

}
function getNumbers(){
  	return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbols(){
  	return symbols[Math.floor(Math.random()*symbols.length)]; 
}

function generatePassword(){
 	let password="";
 	const len=lenElmt.value;
 	console.log(len);

 	if (uppercaseElmt.checked){
 		password+=getUppercase();
 	}
 	if (lowercaseElmt.checked){
 		password+=getLowercase();
 	}
 	if (symbolsElmt.checked){
 		password+=getSymbols();
 	}
 	if (numbersElmt.checked){
 		password+=getNumbers();
 	}

	for(let i=password.length; i<len ;i++){
	 	const gen=generation();
	 	password+= gen;
	 	console.log(gen);
	 	console.log(password);

	}
 	pswElmt.innerText=password;

}

 function generation(){
 	const gen2=[];


 	if (uppercaseElmt.checked){
 		gen2.push(getUppercase());
 	}
 	if (lowercaseElmt.checked){
 		gen2.push(getLowercase());
 	}
 	if (symbolsElmt.checked){
 		gen2.push(getSymbols());
 	}
 	if (numbersElmt.checked){
 		gen2.push(getNumbers());
 	}
 	if (gen2.length === 0) return "";

	return gen2[Math.floor(Math.random()*gen2.length)];

}

submitBtn.addEventListener("click",generatePassword);
 	



clipboard.addEventListener("click", () => {
    const textarea = document.createElement("textarea");

    const password = pswElmt.innerText;

    if (!password) {
         return;
    }

    textarea.value = password;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});