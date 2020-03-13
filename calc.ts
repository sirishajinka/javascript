window.onload = function(){
    var cal:ICalculator = new Arithmetics.Calculator();
    cal.init('X','Y','Output');
};
interface ICalculator{
    addition(x:number,y:number):number;
    subtract(x:number,y:number):number;
    multiply(x:number,y:number):number;
    divide(x:number,y:number):number;
    modulus(x:number,y:number):number;
    init(x:string,y:string,output:string);
}
module Arithmetics{
    export class Calculator implements ICalculator{
            private x : HTMLInputElement;
            private y : HTMLInputElement;
            private output : HTMLSpanElement;
            init(x: string, y: string,output: string){
                this.x=<HTMLInputElement>document.getElementById(x);
                this.y=<HTMLInputElement>document.getElementById(y);
                this.output=<HTMLSpanElement>document.getElementById(output);
                this.wireEve();
            }
            wireEve(){
                document.getElementById('addition').addEventListener('click',event => {this.output.innerHTML = this.addition(parseInt(this.x.value),parseInt(this.y.value)).toString()});
                document.getElementById('subtract').addEventListener('click',event => {this.output.innerHTML = this.subtract(parseInt(this.x.value),parseInt(this.y.value)).toString()});
                document.getElementById('multiply').addEventListener('click',event => {this.output.innerHTML = this.multiply(parseInt(this.x.value),parseInt(this.y.value)).toString()});
                document.getElementById('divide').addEventListener('click',event => {this.output.innerHTML = this.divide(parseInt(this.x.value),parseInt(this.y.value)).toString()});
                document.getElementById('modulus').addEventListener('click',event => {this.output.innerHTML = this.modulus(parseInt(this.x.value),parseInt(this.y.value)).toString()});
            }
            addition(x: number,y: number){
                return x+y;
            }
            subtract(x: number,y: number){
                return x-y;
            }
            multiply(x: number,y:number){
                return x*y;
            }
            divide(x: number,y:number){
                return x/y;
            }
            modulus(x: number,y:number){
                return x%y;
            }
    }
}