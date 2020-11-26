//Code césar - cryptographie
//Créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction doit renvoyer une chaine cryptée.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : simplon
//    chaine cryptée : tjnqmpo
//
//    Vous devez crypter dataNonCrypte1 et dataNonCrypte2
//courage ! :)

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte1 = "simplon";
const dataNonCrypte2 = "zoo"; //la lettre 'z' deviendra un 'a';


// unefficient solution: loop over a list of alphabet 
const dataCrypted = (data) => {
	let result = ''; 
	for (let c of data) {
		if (c === 'z') { result +='a'; continue; }
		for (var j = 0; j < alphabet.length; j++) {
			if (c === alphabet[j]) {
				result += alphabet[j+1]; }
		}
	}
	return result; 
}

console.log(dataCrypted(dataNonCrypte1)); 
console.log(dataCrypted(dataNonCrypte2)); 


// efficient solution: use ASCII values 
const encrypt = (data) => {
	data = data.toLowerCase(); // function will only work with lowercase letters 
	let result = ''; 
	for (let c of data) {
		if (c === 'z') { result +='a'; continue; }
		result += String.fromCharCode(c.charCodeAt(0) + 1);
	}
	return result; 
} 

console.log(encrypt(dataNonCrypte1)); 
console.log(encrypt(dataNonCrypte2)); 


// efficient solution: ASCII values, set, dictionary 
//can reuse dictionary 
let dict = {'z':'a'}; 
const encrypt2 = (data) => { 
	data = data.toLowerCase(); 
	let setChar = new Set(data); 
	let result = ''; 
	for (let c of setChar) {
		if (c === 'z') { continue; }
		dict[c] = String.fromCharCode(c.charCodeAt(0) + 1);
	}
	for(let c of data) { result += dict[c]; } 
	return result; 
}

console.log(encrypt2(dataNonCrypte1)); 
console.log(encrypt2(dataNonCrypte2)); 


//A l'inverse, coder une fonction qui décrypte une chaine caractère sur le même principe.
const decrypt = (data) => {
	let result = ''; 
	for (let c of data) {
		if (c === 'a') { result +='z'; continue; }
		result += String.fromCharCode(c.charCodeAt(0) - 1);
	}
	return result; 
} 

console.log(decrypt('tjnqmpo')); 
console.log(decrypt('app')); 




