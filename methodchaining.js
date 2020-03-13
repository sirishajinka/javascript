var Arthmetic = /** @class */ (function () {
    function Arthmetic(a, b) {
        this.a = a;
        this.b = b;
    }
    Arthmetic.prototype.add = function () {
        this.index = this.a + this.b;
        return this;
    };
    Arthmetic.prototype.subtract = function () {
        this.index = this.a - this.b;
        return this;
    };
    Arthmetic.prototype.multiply = function () {
        this.index = this.a * this.b;
        return this;
    };
    Arthmetic.prototype.divide = function () {
        this.index = this.a / this.b;
        return this;
    };
    Arthmetic.prototype.print = function () {
        console.log(this.index);
        return this;
    };
    return Arthmetic;
}());
new Arthmetic(10, 5).add()
    .print()
    .divide()
    .print()
    .subtract()
    .print();
