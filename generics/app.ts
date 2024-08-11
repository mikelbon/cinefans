class Pila {
    tamanioDefault: number = 100;
    arreglo: number[];
    indiceActual: number = 0;
    numElementos:number=0;

    constructor(_tamanio?:number)
    {
        if(_tamanio)
        {
            if(_tamanio > 0)
            {
                this.arreglo=new Array(_tamanio);
            }
            else
            {
                throw Error("Bad Size");
            }
        }else
        {
            this.arreglo=new Array(this.tamanioDefault);
        }

    }
}

const pila:Pila = new Pila();
const pila2:Pila = new Pila(20);
console.log(pila.arreglo.length);
console.log(pila2.arreglo.length);