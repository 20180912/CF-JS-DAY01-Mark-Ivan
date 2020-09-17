//Exercise 1
var fruits = ["apple", "banana", "kiwi"]
console.log(fruits)
fruits.push("orange")
console.log(fruits)
fruits.pop()
console.log(fruits)

//Exercise 2
var animals = ["monkey", "horse", "dog"]
console.log(animals)
animals.sort()
console.log(animals)
animals.unshift("cat")
console.log(animals)

//Exercise 3
var fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
document.write(fruits2 + "<br>")
var temp = new Array()
temp = fruits2.split("/")

for(var i = 1; i < temp.length; i += 1) {
    document.write(temp[i] + "<br>");
}