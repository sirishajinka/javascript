namespace Mod1 {
    export interface IStudent {
        AddStudents(ID:number,firstName:string,lastName:string,phone:number): void;
        DeleteStudents(ID:number,firstName:string,lastName:string,phone:number): void;
    }
    let array = [];
    export class Student implements IStudent {
        constructor() {}
        AddStudents(ID,firstName,lastName,phone) {
            array.push(ID,firstName,lastName,phone);
            return array[1];
            //console.log(array);
        }
        DeleteStudents() {
            array.pop();
            //console.log(array);
        }
    }
}
namespace Mod2 {
    function run(){
    var student : Mod1.IStudent = new Mod1.Student();
    var stud = student.AddStudents(23,'sirisha','jinka',6374271858);
    console.log(stud);
    var stud1=student.AddStudents(22,'madhumitha','I',9074271858);
    console.log(stud1);

    //var student2 : Mod1.IStudent = new Mod1.Student(25,'madhu','I',6374271858);
    //var stud2 = student2.AddStudents();
    //var stud2 = student2.DeleteStudents();
    }
    run();
}