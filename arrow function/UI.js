var array = ['dsfssge'];
var i;
var position;
window.onload = function () {
    var cal = new UIMod.UIClass();
    cal.init('X', 'output');
};
var UIMod;
(function (UIMod) {
    var UIClass = /** @class */ (function () {
        function UIClass() {
        }
        UIClass.prototype.init = function (x, output) {
            this.x = document.getElementById(x);
            this.output = document.getElementById(output);
            this.wireEve();
        };
        UIClass.prototype.wireEve = function () {
            var _this = this;
            document.getElementById('add').addEventListener('click', function (event) { _this.output.innerHTML = _this.add(_this.x.value); });
            document.getElementById('delete').addEventListener('click', function (event) { _this.output.innerHTML = _this["delete"](_this.x.value); });
        };
        UIClass.prototype.add = function (x) {
            array.push(x);
            console.log("updated array");
            for (i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
            return x;
        };
        UIClass.prototype["delete"] = function (x) {
            for (i = 0; i < array.length; i++) {
                if (array[i] === x) {
                    position = i;
                    break;
                }
            }
            array.splice(position, 1);
            console.log("updated array");
            for (var i_1 = 0; i_1 < array.length; i_1++) {
                console.log(array[i_1]);
            }
            return x;
        };
        return UIClass;
    }());
    UIMod.UIClass = UIClass;
})(UIMod || (UIMod = {}));
