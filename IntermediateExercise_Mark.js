//Exercise 1
var brands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]
console.log(brands.sort())

//Exercise 2
var fruits = ["apple", "banana", "kiwi"]
console.log(fruits)
fruits.push("orange")
console.log(fruits)
fruits.pop()
console.log(fruits)

var animals = ["monkey", "horse", "dog"]
console.log(animals)
animals.sort()
console.log(animals)
animals.unshift("cat")
console.log(animals)

//Exercise 3
var fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
document.write(fruits2 + "<br>")
/*var temp = new Array()
temp = fruits2.split("/")*/
var temp = fruits2.split("/")

//using a loop
for(var i = 1; i < temp.length; i += 1) {
    document.write(temp[i] + "<br>");
    console.log(temp[i])
}

//using join
temp2 = temp.join("<br>")
document.write(temp2)
console.log(temp)
console.log(temp2)