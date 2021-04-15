var num;
var cont = 0;
num = prompt("Ingrese un numero:", "");
for (var i = 1; i <= num; i++) {
    if (num % i == 0)
        cont++;
}
if (cont <= 2) {
    document.write(true);
}
else {
    document.write(false);
}
