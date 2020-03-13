var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Me = /** @class */ (function () {
    function Me(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    Me.prototype.sayName = function () {
        console.log(this.name);
    };
    Me.prototype.sayAge = function () {
        console.log(this.age);
    };
    Me.prototype.sayLocation = function () {
        console.log(this.location);
    };
    Me.prototype.tell = function () {
        return this.location;
    };
    return Me;
}());
var She = /** @class */ (function (_super) {
    __extends(She, _super);
    function She(name, age, location) {
        var _this = _super.call(this, name, age, location) || this;
        _this.location = location;
        return _this;
    }
    She.prototype.sayLocation = function () {
        console.log(this.location + _super.prototype.tell);
    };
    return She;
}(Me));
var she = new She("sirisha", 21, "chennai");
she.sayName();
she.sayAge();
she.sayLocation();
