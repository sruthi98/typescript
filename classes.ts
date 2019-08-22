class Greetings{
    public strProp:string;
    private numProp:number;
    protected safeProp:any="some safe locker here ";
    static aStaticProp:string="I'm static";
    anonProp:any;
}
interface iDidSomething{
    worked():string;
    
}
class SpecialGreetings extends Greetings implements iDidSomething{
    constructor(){
        super();

    }
    public getSafeProp(){
        return this.safeProp;
    }
    public worked():string{
        return "worked a lot";
    }
}
var aa=new Greetings();
var objGreetings=new SpecialGreetings();
console.log(objGreetings.getSafeProp());
console.log(Greetings.aStaticProp);
console.log(objGreetings.worked());