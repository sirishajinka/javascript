var digit = [83, 57, 757, 62, 84, 88];
for (var i = 0; i < digit.length; i++) {
    var evenorodd = function (d) {
        if (d % 2 === 0) {
            console.log(d + " is even number");
        }
        else {
            console.log(d + " is odd number");
        }
    };
    evenorodd(digit[i]);
}
