// JS 函数的语法和 C 语法一脉相承

var a = 12;
var b = 13;

// 函数前可以不加 var 等修饰，
// 类似 lambda 省略 auto 定义函数
sum = function(v1, v2) {
    return v1 + v2;
}

var c = sum(a, b);

console.log("sum: " + c);

// 返回字符串
sayHello = function(name) {
    return "Hi, " + name;
}

// 错误，sayhello 可以作为 console.log 参数，
// 但 sayhello 调用要直接使用字符串，不能使用局部变量.

// var han = "Benjamin";
// console.log(sayhello(han));

//var han = "Benjamin";             // these 2 lines are OK
//var greeting = sayHello(han);
var greeting = sayHello("Benjamin");
console.log(greeting);

console.log(sayHello("test ok"));