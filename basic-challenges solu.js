// Bienvenue à ce premier challenge.

// Pour que les resultats soient visible dans le navigateur, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(nom de la variable);

//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
let a = 4; 
let b = 5; 
let c = a+b; 
console.log(c); 

//Afficher la chaine de caractère suivante en majuscule
let team = 'avengers';
console.log(team.toUpperCase()); 

//Afficher la première lettre de la chaine de caractère suivante
let team = 'avengers';
console.log(team[0]); 

//afficher la chaine de caractère suivante excepté la première lettre.
let team = 'avengers';
console.log(team.slice(1)); 

//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
let firstName = 'Tony';
let lastName = 'Stark';
console.log(firstName + lastName); 

//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
let team = 'aveNgers';
//=> Avengers
team = team.toLowerCase(); 
console.log(team[0].toUpperCase() + team.slice(1)); 

//Pause ! Va boire un café ! Tu le mérites...

//Les tableaux
//Déclarez un tableau avec 5 villes
let villes = ['Madrid','Paris','NY','LA','Miami']; 
//Afficher la ville à l'indice 3
console.log(villes[3]); 
//Ajouter une ville au tableau
villes.push('Milan'); 
console.log(villes); 
//Supprimer la ville à l'indice 2
villes.splice(2,1); 
console.log(villes); 

//Les boucles
//Comme tu le sais sans doute, pour parcourir un tableau,
//il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//élément au carré et affiche le tableau.
const array1 = [2, 4, 8];
for (x of array1) console.log(x*x); 
// use map()! the proper way 
arr = array1.map(x => x*x); 
console.log(arr); 

// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];
sum = promo.reduce((a,b) => a+b); 
console.log(sum/promo.length); 

//Les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18
let age = 22; 
if (age >= 18) {
	console.log('peut voter'); 
} else {
	console.log('ne peut pas voter'); 
}
// use ternary expression 
let str = age >= 18 ? 'peut voter' : 'ne peut pas voter'; 
console.log(str); 

// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin
let today = new Date(); 
let hour = today.getHours(); 
if (5<=hour && hour<=17) {
	console.log('bonjour'); 
} else {
	console.log('bonsoir'); 
}

//Va reboir un café ! Bravo
//Et pense à commit ton projet

// La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux 
// termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses 
// premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, etc...
// Code un algorithme qui calcul les 50 premiers termes de la suite.
let i = 0; 
fib = [0,1]; 
while (i<48) {
	fib.push(fib.slice(-2).reduce((a,b)=>a+b)); 
	i++; 
}
console.log(fib); 

// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.

//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés






//----------------- continue work from here! -------------------












//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
const add = (num1, num2) => {
	return num1+num2;
};

//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.
const square = (i) => {
  return i*i; 
};

// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];
k = beatles.map(str => str.toUpperCase()); 
k.forEach(item => console.log(item));


//Créez un tableau nommé tab dont le premier
//élément est 2, le deuxième 3 et le troisième 4.
//Créez une fonction qui renvoit la somme des éléments du tableau.
const arr = [2,3,4] 
sum = arr.reduce((a,b) => a+b, 0); 
console.log(sum); 


//Tri à bulle
//Classé les éléments du tableau suivant par ordre croissant.
//Affichez le tableau classé.
const aTrier = [3, 2, 6, 4, 8, 10];
aTrier.sort( function(a, b){return a - b;} );
console.log(aTrier); 


//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est positif.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {
 return tableau.filter(x => x>0).reduce((a,b) => a+b, 0); 
};
console.log(addPositiveNumber(array2)); 


//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  return 2 * r * Math.PI; 
};


//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  word = word.toLowerCase(); 
  return word[0].toUpperCase() + word.slice(1); 
};
console.log(capitalize("SimPloN")); 


//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.
function odd(num) {
	return num%2 ? "impair" : "pair"; 
}
console.log(odd(3)); 
console.log(odd(-10)); 


//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//Reprendre la fonction qui permet de calculer la somme d'un tableau
//Le tableau est le suivant : 
const nombres = ["3", "5", "6", "2"];


//Coder la fonction puissance qui prend en paramètre deux arguments (nombre et puissance).
//La fonction devra renvoyer le nombre monté à la puissance
//L'argument 'puissance' valoir 0, 1 ou être negatif et bien sûr positif.



