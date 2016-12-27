var x = prompt('Цифра');
var n = prompt('Степень');

var x,n;

function pow(x, n) {

    var result = x;
    var i;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    if (n < 0) {
        n = Math.abs(n);
        x = Math.round(x);
        for (var i = 1; i < n; i++) {
            result *= x;
        }
        return 1 / result;

    } else if (n == 0) {
        return 1;
    }

    return result;

}

console.log(pow(x, n));
