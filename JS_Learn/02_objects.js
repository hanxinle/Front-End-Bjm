// 这个文件讲的是对象，没有讲类

var book;

// 构建空对象后如何添加数据成员
book = {};

book["name"] = "hanxinle";
book["publish_date"] = "2020-03-13";

console.log(book.name);
console.log(book.publish_date);

var player;

player = {
    name: "kim",
    age: 14
}

console.log("player's name: " + player.name);
console.log("player's age:  " + player.age);