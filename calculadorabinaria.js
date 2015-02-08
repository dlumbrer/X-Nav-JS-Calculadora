var operando1 = ""
var operando2 = ""
var pasar = false;
var suma = false;
var resta = false;

function dec2bin(i)
{ 
	return (i<1)?"":dec2bin((i-(i%2))/2)+i%2; 
}

function pulsaruno(){
	if(pasar){
		operando2 = operando2 + "1";
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando2
	}else{
		operando1 = operando1 + "1";
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando1
	}
	
}

function pulsarcero(){
	if(pasar){
		operando2 = operando2 + "0";
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando2
	}else{
		operando1 = operando1 + "0";
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando1
	}
}

function pulsarsuma(){
	pasar = true;
	suma = true;
	resta = false;
}

function pulsarresta(){
	pasar = true;
	resta = true;
	suma = false;
}

function pulsarigual(){
	resultado = document.getElementById("resultado");
	if(suma && operando1 != "" && operando2 != ""){
		resdec = parseInt(operando1, 2) + parseInt(operando2, 2);
	}else if(resta && operando1 != "" && operando2 != ""){
		resdec = parseInt(operando1, 2) - parseInt(operando2, 2);
	}else{
		alert("No has metido bien algun operando, se reinicia...");
		resultado.innerHTML = "Pulsa ;)"
		operando1 = "";
  		operando2 = "";
		pasar = false;
  		suma = false;
  		resta = false;
		return;
	}
   	resbin = dec2bin(resdec);
   	if(resbin != ""){
   		resultado.innerHTML = resbin
   	}else{
   		resultado.innerHTML = "0"
   	}
  	console.log(resdec, resbin)
  	operando1 = "";
  	operando2 = "";
  	pasar = false;
  	suma = false;
  	resta = false;
}