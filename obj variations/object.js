// namespace demo{
//     //object1: Normal way
//     var point1={x:10,y:20};
//     //object2: declare and then assign
//     var point2={};
//     point2={x:10,y:20};
//     //object3: declare using Object keyword and then assign
//     var point3:Object={x:10,y:20};
//     point3={name:'sirisha'};
//     //object creating a function
//     var rectangle={
//         h:10,
//         w:20,
//         calcArea: function(){
//             return this.h*this.w;
//         }
//     };
//     console.log('rectangle area = ' + rectangle.calcArea());
//     //another method -> assign variable to a function
//     var squareIt1 = function(x){
//         return x*x;
//     };
//     var val1 = squareIt1('2');
//     console.log('squareIt1 = ' + val1);
//     var val1 = squareIt1('john');
//     console.log('squareIt1 = ' + val1);
//     var squareIt2 = function(x:number){
//         return x*x;
//     }
//     var val2 = squareIt2(4)
//     console.log('squareIt2 is ' +val2);
var squareIt3;
squareIt3 = function (x) {
    return x * x;
};
var val3 = squareIt3(4);
console.log('squareIt2 is ' + val3);
//}
