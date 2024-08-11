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
const pila = new Pila();
pila.apilar(25);
pila.apilar(11);
pila.apilar(87);
let elemento = pila.desapilar();
console.log(elemento);
elemento = pila.desapilar();
console.log(elemento);
elemento = pila.desapilar();
console.log(elemento);
