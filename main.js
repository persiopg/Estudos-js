/*  * Data types
        *pritive
        *structural
        *structural primitive
    
    * Primitivos
        *String
        *Number
        *Boolean
        *undefined
        *Symbol
        *BigInt
    
    * Estruturais
        *object
            *Array
            *Map
            *Set
            *Date
            *...

        *fubction
    * Primitivo Estrutural
        *null



console.log("ola mundo");

//object ex
console.log({
    name:"persio",
    idade:"26",
    andar: function(){
        console.log('andar')
    }
});

//array ex
console.log([
    "leite",
    "ovo",
    2,
    3
]);

//variael
var ex = "variavel, global e podera funcionar fora do escopo de bloco";
let Ex = "let funciona parecido com o var, local";
const exemplo = "constante uma vez definido o valor nao pode ser alterado";
// weakly typed, the type is defined by the assigned value.
let name = "persio";
let age, isHuman;

age = 26;
isHuman = true;


//escritade texto + variavel
//concatenando os valores
console.log('concatenando: o ' + name + ' tem ' + age + ' anos.');

//interpolando valores com template literals
console.log(`interpolando: o ${name} tem ${age} anos.`);

//object

const person = {
    name: 'Persio',
    age: 26,
    weight: 70,
    isAdmin: true
}
console.log(person)

//--------- exercicio

let weight;

console.log(typeof weight);

let name = "persio";
let age = 26;
let start = 0;
let isSubscribed = true;

let student = {
    name: "Persio",
    age: 26,
    weight: 70,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`);

let students = [];

students = [
    student
]

console.log(students[0]);

let caio = {
    name: "caio", 
    age: 30,
    weight: 70,
    isSubscribed: true,
}

students[1] = caio;

console.log(students[1]);*/

//----------function-----------------

function faseMotivacional(){
    console.log("fase motivacional terminada");
}

let headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.64",
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com"
} 
let method = "GET";
let url = "https://developer.riotgames.com";

function requestHeader(url, method, headers){
    return fetch(url, {
        method: method,
        headers: headers
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

 console.log(requestHeader(url, method, headers));