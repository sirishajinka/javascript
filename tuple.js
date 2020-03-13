var tuple = ['sirisha', 't-shirt'];
var i;
var position;
var position2;
window.onload = function () {
    var cal = new UIMod.UIClass();
    cal.init('X', 'Y', 'output');
};
var UIMod;
(function (UIMod) {
    var UIClass = /** @class */ (function () {
        function UIClass() {
        }
        UIClass.prototype.init = function (x, y, output) {
            this.x = document.getElementById(x);
            this.y = document.getElementById(y);
            this.output = document.getElementById(output);
            this.wireEve();
        };
        UIClass.prototype.wireEve = function () {
            var _this = this;
            document.getElementById('add').addEventListener('click', function (event) { _this.output.innerHTML = _this.add(_this.x.value, _this.y.value); });
            document.getElementById('remove').addEventListener('click', function (event) { _this.output.innerHTML = _this.remove(_this.x.value, _this.y.value); });
        };
        UIClass.prototype.add = function (x, y) {
            tuple.push(x);
            tuple.push(y);
            console.log("updated array");
            for (i = 0; i < tuple.length; i++) {
                console.log(tuple[i]);
            }
            return x;
        };
        UIClass.prototype.remove = function (x, y) {
            for (i = 0; i < tuple.length; i++) {
                if (tuple[i] === x) {
                    position = i;
                }
                if (tuple[i] === y) {
                    position2 = i;
                }
            }
            tuple.splice(position2, 1);
            tuple.splice(position, 1);
            console.log("updated array");
            for (var i_1 = 0; i_1 < tuple.length; i_1++) {
                console.log(tuple[i_1]);
            }
            return x;
        };
        return UIClass;
    }());
    UIMod.UIClass = UIClass;
})(UIMod || (UIMod = {}));
