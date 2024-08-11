"use strict";
class Pila {
    constructor(_tamanio) {
        this.tamanioDefault = 100;
        this.indiceActual = 0;
        this.numElementos = 0;
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arreglo = new Array(_tamanio);
            }
            else {
                throw Error("Bad Size");
            }
        }
        else {
            this.arreglo = new Array(this.tamanioDefault);
        }
    }
    apilar(element) {
        if (this.numElementos === this.arreglo.length) {
            throw Error("Array is Full");
        }
        else {
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    }
    desapilar() {
        if (this.numElementos === 0) {
            throw Error("Array is Empty");
        }
        else {
            this.indiceActual--;
            const elemento = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento;
        }
    }
}
class ClaseGenerica {
    constructor(_dato) {
        this.dato = _dato;
        console.log(this.dato2);
    }
    DoSomething(parameter) {
        const dato = parameter;
        return dato;
    }
    OpenConnection(parameter) {
        console.log(parameter.connectionString);
    }
}
class SQLConnection {
    constructor() {
        this.connectionString = "abc";
    }
}
class OracleConnection {
    constructor() {
        this.connectionString = "def";
    }
}
const generic = new ClaseGenerica(new SQLConnection());
const generic2 = new ClaseGenerica(new OracleConnection());
//const generic: ClaseGenerica<number,string> = new ClaseGenerica(3);
//const prueba1 = generic.DoSomething(24);
//console.log(prueba1);
//
//const generic2: ClaseGenerica<string, boolean> = new ClaseGenerica("Hello");
//const prueba2 = generic2.DoSomething("Hello World");
//console.log(prueba2)
const pila = new Pila();
const pila2 = new Pila();
pila.apilar(25);
pila.apilar(11);
pila.apilar(82);
pila2.apilar("Hola");
pila2.apilar("Mundo");
let elemento = pila.desapilar();
console.log(elemento);
elemento = pila.desapilar();
console.log(elemento);
elemento = pila.desapilar();
console.log(elemento);
function print(entity) {
    console.log("Special Report: ");
    console.log(entity);
}
print(3);
print("Hello");
print(true);
//type PersonPropertyLiteral = "id" | "name" | "surname";
//function getKeyOfUsingStringLiteral(pp1: PersonPropertyLiteral, value: IPerson) {
//    console.log(pp1 + " "+value[pp1])
//}
function getKeyUsingKeyOf(key, value) {
    console.log(key + " " + value[key]);
}
let testPerson = { id: 1, name: "Miguel", surname: "Carhuas", age: 25 };
getKeyUsingKeyOf("name", testPerson);
getKeyUsingKeyOf("surname", testPerson);
getKeyUsingKeyOf("age", testPerson);
