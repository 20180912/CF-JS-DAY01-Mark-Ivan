//Challenge 1
var array = [["Vienna",,,,],[,"is",,,],[,,"a",,],[,,,"nice",],[,,,,"city"]]
var array2 = [["Vienna","","","",""],["","is","","",""],["","","a","",""],["","","","nice",""],["","","","","city"]]

console.log(array)
console.log(array2)

//Challenge 2
var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

sentence_clean = sentence.replace(/\$/g," ")
console.log(sentence_clean)