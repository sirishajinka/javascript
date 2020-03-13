var squareItSimple = function(h:number,w:number){
    return h*w;
}

var squareItSimplest = (h:number, w:number) => h*w;

console.log('squareItSimple = ' +squareItSimple(7,10));
console.log('squareItSimplest = ' +squareItSimplest(7,10));


//var helloworld: (name?: string) => void;
var helloworld = (name ?: string) => {
    console.log('hello '+(name || 'unknown person'));
}
helloworld('sirisha')
helloworld()
