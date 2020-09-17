//Exercise 1
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

c = Number(c)
d = Number(d)

sum = a+b+c+d+e
console.log(sum)

var f = '1';
var g = 15;
var h = 8;
var i = "1";

f = Number(f)
i = Number(i)

product = f*g*h*i
console.log(sum)

result = sum / product
document.write(result)

//Exercise 2
var array = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
console.log(array[1][1] + " " + array[4][2] + " " + array[5][3] + " " + array[2][3] + " " + array[2][1])