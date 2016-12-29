var arr = ['Костя', 'Назар', 'Ольга', 'Степан', 'Светлана'];


while (i < arr.length) {
    arr.push(prompt('Введите имя пользователя'));
}

var N = prompt('Введите Ваше имя');
var txt = 'Error';

for (var i = 0; i < arr.length; i++) {
    if (N == arr[i]) {
        txt = N + ', Вы успешно вошли!';
        console.log(arr);
        break;
    }
}
alert(txt);
