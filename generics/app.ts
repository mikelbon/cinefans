class Pila<T> {
    tamanioDefault: number = 100;
    arreglo: T[];
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
    apilar(element: T): void {
        if (this.numElementos === this.arreglo.length) {
            throw Error("Array is Full");
        }
        else {
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    }

    desapilar(): T {
        if (this.numElementos === 0) {
            throw Error("Array is Empty");
        }
        else {
            this.indiceActual--;
            const elemento: T = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento;
        }
    }
}
class ClaseGenerica<T extends ConnectionBase, U> {
    dato?: T;
    dato2?: U;
    constructor(_dato: T) {
        this.dato = _dato;
        console.log(this.dato2);
    }
    DoSomething(parameter: T): T {
        const dato: T = parameter;
        return dato;
    }
    OpenConnection(parameter: T): void {
        console.log(parameter.connectionString)
    }
}

interface ConnectionBase {
    connectionString?: string;
}

class SQLConnection implements ConnectionBase {
    connectionString: string = "abc";
}
class OracleConnection implements ConnectionBase {
    connectionString: string = "def";
}
const generic: ClaseGenerica<SQLConnection, string> = new ClaseGenerica(new SQLConnection());
const generic2: ClaseGenerica<OracleConnection, number> = new ClaseGenerica(new OracleConnection());

//const generic: ClaseGenerica<number,string> = new ClaseGenerica(3);
//const prueba1 = generic.DoSomething(24);
//console.log(prueba1);
//
//const generic2: ClaseGenerica<string, boolean> = new ClaseGenerica("Hello");
//const prueba2 = generic2.DoSomething("Hello World");
//console.log(prueba2)


const pila: Pila<number> = new Pila();
const pila2: Pila<string> = new Pila();

pila.apilar(25);
pila.apilar(11);
pila.apilar(82);

pila2.apilar("Hola");
pila2.apilar("Mundo");

let elemento: number = pila.desapilar();
console.log(elemento);

elemento = pila.desapilar();
console.log(elemento);

elemento = pila.desapilar();
console.log(elemento);

function print<T>(entity: T) {
    console.log("Special Report: ");
    console.log(entity);
}

print(3);
print("Hello");
print(true);

interface IPerson {
    id: number;
    name: string;
    surname: string;
    age:number;
}
//type PersonPropertyLiteral = "id" | "name" | "surname";
//function getKeyOfUsingStringLiteral(pp1: PersonPropertyLiteral, value: IPerson) {
//    console.log(pp1 + " "+value[pp1])
//}
function getKeyUsingKeyOf(key: keyof IPerson, value: IPerson) 
{
    console.log(key + " "+value[key])
}

let testPerson: IPerson = { id: 1, name: "Miguel", surname: "Carhuas", age: 25 };
getKeyUsingKeyOf("name", testPerson);
getKeyUsingKeyOf("surname", testPerson);
getKeyUsingKeyOf("age", testPerson);    