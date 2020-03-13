class AddNumber {
    private x: number;
    constructor(start = 0){
        this.x = start;
    }
    public add(index = 1){
        this.x = this.x + index;
        return this;
    }
    public print(){
        console.log(this.x);
        return this;
    }
}
new AddNumber(5).add(2)
.print()
.add(10)
.print()

