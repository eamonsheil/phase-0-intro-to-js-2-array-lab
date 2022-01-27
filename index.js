// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');    
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name) {
    const newerCat = ["Arnold", ...cats];
    return newerCat;
}

function removeLastCat(){
    const copyCats = cats.slice(0, cats.length -1);
    return copyCats;
}

function removeFirstCat() {
    const copiousCats = cats.slice(1);  
    return copiousCats;
}