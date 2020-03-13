interface Ipoint{
    getDist(): number;
}
module Shapes{
    export class Point implements Ipoint{
        constructor(public x: number, public y: number){}
        getDist(){
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        static origin = new Point(0,0);
    }
}

var p: Ipoint = new Shapes.Point(3,4);
var dist = p.getDist();
console.log(dist);

