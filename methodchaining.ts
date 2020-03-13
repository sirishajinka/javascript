class Arthmetic {
    index: number;
    constructor(public a:number,public b:number){}
        add(){
            this.index = this.a+this.b;
            return this;
        }
        subtract(){
            this.index = this.a-this.b;
            return this;
        }
        multiply(){
            this.index = this.a*this.b;
            return this;
        }
        divide(){
            this.index = this.a/this.b;
            return this;
        }
        print(){
            console.log(this.index);
            return this;
        }
}
new Arthmetic(10,5).add()
.print()
.divide()
.print()
.subtract()
.print()
 