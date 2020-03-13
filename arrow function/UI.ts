let array = ['dsfssge'];
let i:number;
let position:number;
window.onload = function () {
    var cal:UI = new UIMod.UIClass();
    cal.init('X', 'output');
};
interface UI {
    add(x: string): string;
    delete(x: string): string;
    init(x: string, output: string);
}
module UIMod {
    export class UIClass implements UI {
        private x: HTMLInputElement;
        private output: HTMLSpanElement;
        init(x: string, output: string) {
            this.x = <HTMLInputElement>document.getElementById(x);
            this.output = <HTMLSpanElement>document.getElementById(output);
            this.wireEve();
        }
        wireEve() {
            document.getElementById('add').addEventListener('click', event => { this.output.innerHTML = this.add(this.x.value)});
            document.getElementById('delete').addEventListener('click', event => { this.output.innerHTML = this.delete(this.x.value)});

        }
        add(x: string) {
            array.push(x);
            console.log("updated array")
            for(i=0;i<array.length;i++){
                console.log(array[i]);
            }
            return x;
        }
        delete(x: string) {
            for(i=0;i<array.length;i++){
                if(array[i]===x){
                    position = i;
                    break;
                }
            }
            array.splice(position,1);
            console.log("updated array")
            for(let i=0;i<array.length;i++){
                console.log(array[i]);
                }
                return x;
        }
    }
}