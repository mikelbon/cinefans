function simpleDecorator(constructor:Function)
{
    console.log("Decorador invocado");
}

@simpleDecorator
class ClassWithSimpleDecorator
{
    constructor()
    {
        console.log("Constructor de la clase");
    }
}   