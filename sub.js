function add(a,b,...num){
    console.log(a+b)
    console.log(num)
}
function sub(a,b){
    console.log(a-b)
}
add(10,6,9,7,3)
sub(10,5)

module.export = add;
module.export = sub;

