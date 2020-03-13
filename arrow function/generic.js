var Cabinet = /** @class */ (function () {
    function Cabinet() {
        this.contents = [];
    }
    Cabinet.prototype.add = function (object) {
        this.contents.push(object);
    };
    Cabinet.prototype.remove = function () {
        return this.contents.pop();
    };
    return Cabinet;
}());
var sockCabinet = new Cabinet();
sockCabinet.add({ color: "pink" });
console.log(sockCabinet);
var mySock = sockCabinet.remove();
var tshirtCabinet = new Cabinet();
tshirtCabinet.add({ size: 'm' });
console.log(tshirtCabinet);
var mixedCabinet = new Cabinet();
