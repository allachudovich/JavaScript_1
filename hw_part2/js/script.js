var arr = ['Костя', 'Назар', 'Ольга', 'Степан', 'Светлана'];
var N = prompt('Введите имя');
i = 0;

while (i < arr.length) {
    if (N == arr[i]) {
        alert('Ошибка');
    } else if (N !== arr[i] && i == (arr.length - 1)) {
        alert(N + ' Вы успешно вошли!');
        arr.push(N);

        console.log(arr);
    }
    i++;
}
