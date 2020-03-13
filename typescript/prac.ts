class Person {
    constructor(private name: string, private age: number) { }
    sayName() {
        console.log(`im ${this.name}`)
    }
    sayAge() {
        console.log(`im ${this.age} yrs old`)
    }
}

class Employee extends Person{
    constructor( name:string,age:number,private salary:number){
        super(name,age)
    }
    saySalary(){
        console.log("shh, thats secret..")
    }
    askForBonus(){
        return this.salary*0.2
    }
    getSalary(){
        return this.salary
    }
}

class Boss extends Employee{
   
    askForBonus(){
        return this.getSalary()*0.5 + super.askForBonus()
    }
}

const boss=new Boss("NAG",36,1000.00)
