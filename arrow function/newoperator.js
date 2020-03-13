var squareItSimple = function (h, w) {
    return h * w;
};
var squareItSimplest = function (h, w) { return h * w; };
console.log('squareItSimple = ' + squareItSimple(7, 10));
console.log('squareItSimplest = ' + squareItSimplest(7, 10));
//var helloworld: (name?: string) => void;
var helloworld = function (name) {
    console.log('hello ' + (name || 'unknown person'));
};
helloworld('sirisha');
helloworld();
