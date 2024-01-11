// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.
let tab = [1, 2, 3, 4, 5, 6, 7];
console.log(tab);
let resultat = tab.map((numb) => {
    // on mutiplie le table par le numble desinier
    return numb * numb ;
    // return numb * 3 ;
    // return numb * 5 ;

});
console.log(resultat);
// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3
const numbers = [10 , 20 , 30, 40];
console.log(numbers);
const filteredNumbers = numbers.filter(num =>{
    return num > 20 ;
    // return num == 20 ;
    // return num < 20 ;

});
console.log(filteredNumbers);

// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres.
const test = [10, 20 , 30 ,40 , 50 ] ;
//accumulator : It is value from the previous iteration of the function.
//currentValue: It is the current element beling processed in the array.
const reduceTest = test.reduce((accumulator, currentValue) =>{
   return accumulator + currentValue; 
//    return accumulator - currentValue;
//    return accumulator * currentValue;
//    return accumulator / currentValue;
});
console.log(reduceTest);

// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.
const fruit = ['bannane' , 'apple', 'orange' , 'mango'];
fruit.sort();
console.log(fruit);

// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau

let recet = ['bannane' , 'apple', 'orange' , 'mango'];
console.log(recet);
recet.forEach(function (tem){
    console.log(tem);
}); 
console.log(fruit);
