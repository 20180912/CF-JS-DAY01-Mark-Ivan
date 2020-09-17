//Exercise 1
var sentence = "Hey there, i am a javascript developer, and i live in vienna"
console.log(sentence.substring(0,38))

//Exercise 2
var fruits = ['apple', 'banana', 'kiwi']
fruits.splice(2,0,'orange','strawberry')
console.log(fruits)

//Exercise 3
var value = prompt("Please enter the amount of money to withdraw:\n")

//Amount of bills in the ATM
var n_hundred = 5
var n_fifty = 5
var n_twenty = 5
var n_ten = 5

if (value > n_hundred*100+n_fifty*50+n_twenty*20+n_ten*10) {
    alert("Sorry, I don't have enough money")
} else if (value % 10 !=0) {
    alert("Please enter a value divisible by 10")
} else {
    if (value >= 100) {
        if (n_hundred >= value/100) {
            hundred = Math.floor(value/100)
            value = value % 100
        } else {
            hundred = n_hundred
            value = value-n_hundred*100
        }
        alert(hundred + " note(s) of 100 Euros")
    }

    if (value >= 50) {
        if (n_fifty >= value/50) {
            fifty = Math.floor(value/50)
            value = value % 50
        } else {
            fifty = n_fifty
            value = value-n_fifty*50
        }
        alert(fifty + " note(s) of 50 Euros")
    }

    if (value >= 20) {
        if (n_twenty >= value/20) {
            twenty = Math.floor(value/20)
            value = value % 20
        } else {
            twenty = n_twenty
            value = value-n_twenty*20
        }
        alert(twenty + " note(s) of 20 Euros")
    }

    if (value >= 10) {
        if (n_ten >= value/10) {
            ten = Math.floor(value/10)
            value = value % 10
        } else {
            ten = n_ten
            value = value-n_ten*10
        }
        alert(ten + " note(s) of 10 Euros")
    }
}