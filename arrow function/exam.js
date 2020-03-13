var Mod1;
(function (Mod1) {
    var array = [];
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.AddStudents = function (ID, firstName, lastName, phone) {
            array.push(ID, firstName, lastName, phone);
            return array[1];
            //console.log(array);
        };
        Student.prototype.DeleteStudents = function () {
            array.pop();
            //console.log(array);
        };
        return Student;
    }());
    Mod1.Student = Student;
})(Mod1 || (Mod1 = {}));
var Mod2;
(function (Mod2) {
    function run() {
        var student = new Mod1.Student();
        var stud = student.AddStudents(23, 'sirisha', 'jinka', 6374271858);
        console.log(stud);
        var stud1 = student.AddStudents(22, 'madhumitha', 'I', 9074271858);
        console.log(stud1);
        //var student2 : Mod1.IStudent = new Mod1.Student(25,'madhu','I',6374271858);
        //var stud2 = student2.AddStudents();
        //var stud2 = student2.DeleteStudents();
    }
    run();
})(Mod2 || (Mod2 = {}));
