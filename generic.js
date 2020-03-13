var Product = /** @class */ (function () {
    function Product() {
        this.contents = [];
    }
    Product.prototype.add = function (object) {
        this.contents.push(object);
        console.log(object);
    };
    Product.prototype.remove = function () {
        return this.contents.pop();
    };
    return Product;
}());
var prod = new Product();
prod.add({ size: 's', make: "Adidas" });
console.log(prod);
var myShoe = prod.remove();
var chair = new Product();
chair.add({ size: 'm', manufacture: "woodpecker" });
console.log(chair);
var myChair = chair.remove();
