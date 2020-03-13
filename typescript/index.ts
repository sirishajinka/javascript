class Me{
    constructor(public name : string, private age : number, private location : string){}
    sayName(){
        console.log(this.name)
    }
    sayAge(){
        console.log(this.age)
    }
    sayLocation(){
        console.log(this.location)
    }
}
class She extends Me{
    constructor(name : string, age : number, private location : string){
        super(name,age,location)
    }
    sayLocation(){
        console.log(this.location)
    }
}
let she = new She("sirisha",21,"chennai") 
she.sayName();
she.sayAge();
she.sayLocation();