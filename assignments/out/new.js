var Home = /** @class */ (function () {
    function Home(floor) {
        this.floor = floor;
    }
    Home.prototype.walk = function () {
        alert("The floor is Dry " + this.floor);
    };
    Home.prototype.stop = function () {
        alert("The floor is wet " + this.floor);
    };
    return Home;
}());
window.onload = function () {
    var home = new Home('Marble Floor');
    home.walk();
    home.stop();
};
//# sourceMappingURL=new.js.map