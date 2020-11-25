 // * definir une classe rectangle avec hauteur et largeur, instancier puis présenter le resultat
// * add method > return boolean if class = carrée
// * method calcul perimeter
// * method calcul aire
// * ranger 5 instances dans un tableau > faire une fonction affichant le perimeter de chaque iteration
// * Créer une fonction creant un tableau avec 100 instances avec attributs aleatoire, nbr entiers entre 1 et 20 via math.random
// * calculer le perimetre moyen
// * aire moyen
// * plus petit perimetre
// * plus petite aire
// * plus grande aire
// * nbr de carrés dans le tableau
// * add attr qui peut etre AA BB ou CC
// * Créer une fonction creant un tableau avec 100 instances avec attributs aleatoire, nbr entiers entre 1 et 20 via math.random ajoutant AA BB ou CC
// * Fonction qui renvoie le nbr de chaque dans un tableau 
 /* Classes */
class Rectangle {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    isSquare(){
        if (this.a == this.b) {
            return true
        } else {
            return false
        }
    }
    getPerimeter(){
        return (this.a + this.b) * 2 
    }
    getArea(){
        return this.a * this.b
    }
}

class Rectangle2 extends Rectangle{
    constructor(a, b, attr) {
        super(a, b);
        this.attr = attr;
    }
}

 /* Création des variables */

let R1 = new Rectangle (5, 15);
let R2 = new Rectangle (7, 20);
let R3 = new Rectangle (5, 5);
let R4 = new Rectangle (8, 20);
let R5 = new Rectangle (13, 12);

let tab = [];
tab.push(R1);
tab.push(R2);
tab.push(R3);
tab.push(R4);
tab.push(R5);

let tab2 = []
let newtab = []

/* Fonctions générales */

function randomNumber() { // Génère un nombre aléatoire entre 1 et 20
    return Math.floor(Math.random() * Math.floor(20)) + 1 ;
}

function randomAttr() { // Génère un attribut aléatoirement
    let a = Math.floor(Math.random() * Math.floor(3)) + 1 ;
    switch(a) {
        case 1:
            return "AA";
        case 2:
            return "BB";
        case 3:
            return "CC"
    }
}

/* Création de classes */

function createRec() { // Fonction de création de Rectangle
    let a = randomNumber();
    let b = randomNumber();
    return new Rectangle(a, b);
}

function createRec2() { // Fonction de création de Rectangle2
    let a = randomNumber();
    let b = randomNumber();
    let c = randomAttr()
    return new Rectangle2(a, b, c);
}

/* Fonction de créations de tableaux */

function createTab(variable, length) { // Modifie une variable pour créer des [length] nombre de Rectangles
    for (let i = 0; i < length; i++){
       variable.push(createRec()); 
    }
}

function createTab2(variable, length) { // Modifie une variable pour créer des [length] nombre de Rectangles2
    for (let i = 0; i < length; i++){
        variable.push(createRec2()); 
     }
}

/* Fonctions de calcul */

function tabPerimeter(a) { // Affiche la liste de tout les périmètres
    for (let item of a) {
        console.log(item.getPerimeter())   
    }
}

function averagePerimeter(a) { // calcul du périmètre moyen
    let b = [];
    let result = 0;
    for (let item of a) {
        b.push(item.getPerimeter())
    };
    for (let i = 0; i < b.length; i++) {
        result += b[i];
    };
    result = result / b.length;
    return result;
}

function averageArea(a) { // Calcul de l'aire moyen
    let b = [];
    let result = 0;
    for (let item of a) {
        b.push(item.getArea())
    };
    for (let i = 0; i < b.length; i++) {
        result += b[i];
    };
    result = result / b.length;
    return result;
}

/* Fonctions de Comparaison */

function listPerimeter(a) { // Trie la liste d'un tableau par ordre croissant des périmètres
    let b = [];
    for (let item of a) {
        b.push(item.getPerimeter())
    };
    b = b.sort(function(a, b) {
        return a - b;
      });
      
    return b
}

function listArea(a) { // Trie la liste d'un tableau par ordre croissant des aires
    let b = [];
    for (let item of a) {
        b.push(item.getArea())
    };
    b = b.sort(function(a, b) {
        return a - b;
      });
      
    return b
}

function lowestPerimeter(a) { // calcul du plus bas périmètre
    let b = listPerimeter(a);
    return b[0];
}

function highestPerimeter(a) { // Calcul du plus haut périmètre
    let b = listPerimeter(a);
    let c = b.length;
    c = c - 1
    return b[c];
}

function lowestArea(a) { // Calcul du plus bas aire
    let b = listArea(a);
    return b[0];
}

function highestArea(a) { // Calcul du plus haut aire
    let b = listArea(a);
    let c = b.length;
    c = c - 1
    return b[c];
}

/* Fonction de verification */

function nbrSquare(a) { // Tester le nombre de carré dans le tableau
    let nbr = 0;
    for (let item of a) {
        if (item.isSquare()) {
            nbr ++
        }
    };
    return nbr;
}

function verifAttr(a) { // Tester les attributs pour calculer le nombre
    let aa = 0;
    let bb = 0;
    let cc = 0;
    for (let i = 0; i < a.length ;i++) {
        switch(newtab[i].attr) {
            case "AA":
                aa++;
                break;
            case "BB":
                bb++;
                break;
            case "CC":
                cc++;
                break;
        }
    }
    console.log('Attribut AA : ' + aa + ', ' + 'Attribut BB : ' + bb + ', ' + 'Attribut CC : ' + cc)
}