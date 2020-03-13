window.onload = function () {
    var cal = new Arithmetics.Calculator();
    cal.init('X', 'Y', 'Output');
};
var Arithmetics;
(function (Arithmetics) {
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.init = function (x, y, output) {
            this.x = document.getElementById(x);
            this.y = document.getElementById(y);
            this.output = document.getElementById(output);
            this.wireEve();
        };
        Calculator.prototype.wireEve = function () {
            var _this = this;
            document.getElementById('addition').addEventListener('click', function (event) { _this.output.innerHTML = _this.addition(parseInt(_this.x.value), parseInt(_this.y.value)).toString(); });
            document.getElementById('subtract').addEventListener('click', function (event) { _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString(); });
            document.getElementById('multiply').addEventListener('click', function (event) { _this.output.innerHTML = _this.multiply(parseInt(_this.x.value), parseInt(_this.y.value)).toString(); });
            document.getElementById('divide').addEventListener('click', function (event) { _this.output.innerHTML = _this.divide(parseInt(_this.x.value), parseInt(_this.y.value)).toString(); });
            document.getElementById('modulus').addEventListener('click', function (event) { _this.output.innerHTML = _this.modulus(parseInt(_this.x.value), parseInt(_this.y.value)).toString(); });
        };
        Calculator.prototype.addition = function (x, y) {
            return x + y;
        };
        Calculator.prototype.subtract = function (x, y) {
            return x - y;
        };
        Calculator.prototype.multiply = function (x, y) {
            return x * y;
        };
        Calculator.prototype.divide = function (x, y) {
            return x / y;
        };
        Calculator.prototype.modulus = function (x, y) {
            return x % y;
        };
        return Calculator;
    }());
    Arithmetics.Calculator = Calculator;
})(Arithmetics || (Arithmetics = {}));
