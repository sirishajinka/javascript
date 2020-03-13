var AddNumber = /** @class */ (function () {
    function AddNumber(start) {
        if (start === void 0) { start = 0; }
        this.x = start;
    }
    AddNumber.prototype.add = function (index) {
        if (index === void 0) { index = 1; }
        this.x = this.x + index;
        return this;
    };
    AddNumber.prototype.print = function () {
        console.log(this.x);
        return this;
    };
    return AddNumber;
}());
new AddNumber(5).add(2)
    .print()
    .add(10)
    .print();
