let tuple = ['sirisha','t-shirt'];
let i:number;
let position:number;
let position2:number;
window.onload = function () {
    var cal:UI = new UIMod.UIClass();
    cal.init('X','Y','output');
};
interface UI {
    add(x: string,y:string): string;
    remove(x: string,y:string): string;
    init(x: string,y:string, output: string);
}
module UIMod {
    export class UIClass implements UI {
        private x: HTMLInputElement;
        private y: HTMLInputElement;
        private output: HTMLSpanElement;
        init(x: string,y:string, output: string) {
            this.x = <HTMLInputElement>document.getElementById(x);
            this.y = <HTMLInputElement>document.getElementById(y);
            this.output = <HTMLSpanElement>document.getElementById(output);
            this.wireEve();
        }
        wireEve() {
            document.getElementById('add').addEventListener('click', event => { this.output.innerHTML = this.add(this.x.value,this.y.value)});
            document.getElementById('remove').addEventListener('click', event => { this.output.innerHTML = this.remove(this.x.value,this.y.value)});

        }
        add(x: string,y:string) {
            tuple.push(x);
            tuple.push(y);
            console.log("updated array")
            for(i=0;i<tuple.length;i++){
                console.log(tuple[i]);
            }
            return x;
        }
        remove(x: string,y:string) {
            for(i=0;i<tuple.length;i++){
                if(tuple[i]===x){
                    position = i;
                }
                if(tuple[i]===y){
                    position2=i;
                }
            }
            tuple.splice(position2,1);
            tuple.splice(position,1);
            console.log("updated array")
            for(let i=0;i<tuple.length;i++){
                console.log(tuple[i]);
                }
                return x;
        }
    }
}