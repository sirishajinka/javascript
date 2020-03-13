class Employee{
    firstName : string;
    lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        console.log("first name is " +this.firstName);
    }
    getLastName(){
        console.log("last name is "+this.lastName);
    }
    getFullName(){
        console.log("full name is " +this.firstName+this.lastName);
    }
}

    window.onload = function() {
        var emp=new Employee('Sirisha','Jinka');
        emp.getFirstName();
        emp.getLastName();
        emp.getFullName();
        
    };
    