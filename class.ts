import iOperations from './ioperations';
export default class Person{
    public name:string="sruthi";
    private id:number=123;
    protected salary:any="21k";
    static age:string="21";
    anonProp:any;
}
export function Sample(){

}
export class Employee extends Person implements iOperations{
    constructor(){
        super();

    }
    public getname(){
        return this.name;
    }
    private getid(){
        return this.getid;
    }
    public worked():string{
        return "worked a lot";
    }
}
var person=new Person();
var employee=new Employee();
console.log(employee.getname());

console.log(Person.age);
console.log(employee.worked());
