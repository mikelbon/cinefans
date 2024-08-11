class Pila {
    tamanioDefault: number = 100;
    arreglo: number[];
    indiceActual: number = 0;
    numElementos: number = 0;

    constructor(_tamanio?: number) {
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arreglo = new Array(_tamanio);
            }
            else {
                throw Error("Bad Size");
            }
        } else {
            this.arreglo = new Array(this.tamanioDefault);
        }

    }
    apilar(element: number): void {
        if (this.numElementos === this.arreglo.length) {
            throw Error("Array is Full");
        }
        else {
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    }

    desapilar(): number {
        if (this.numElementos === 0) {
            throw Error("Array is Empty");
        }
        else {
            this.indiceActual--;
            const elemento: number = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento;
        }
    }
}
class ClaseGenerica<T,U> {
    dato?: T;
    dato2?: U;
    constructor(_dato: T) 
    {
        this.dato = _dato;
        console.log(this.dato2);
    }
    DoSomething(parameter: T): T 
    {
        const dato:T = parameter;
        return dato;
    }
}

interface ConnectionBase<T>
{
    connectionString?: string;
}

class SQLConnection implements ConnectionBase<string>
{
    connectionString: string = "abc";
}
const generic: ClaseGenerica<number,string> = new ClaseGenerica(3);
const prueba1 = generic.DoSomething(24);
console.log(prueba1);

const generic2: ClaseGenerica<string, boolean> = new ClaseGenerica("Hello");
const prueba2 = generic2.DoSomething("Hello World");
console.log(prueba2)


//const pila: Pila = new Pila();
//
//pila.apilar(25);
//pila.apilar(11);
//pila.apilar(87);
//
//let elemento: number = pila.desapilar();
//console.log(elemento);
//
//elemento = pila.desapilar();
//console.log(elemento);
//
//elemento = pila.desapilar();
//console.log(elemento);