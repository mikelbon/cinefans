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
}
const pila = new Pila();
const pila2 = new Pila(20);
console.log(pila.arreglo.length);
console.log(pila2.arreglo.length);
