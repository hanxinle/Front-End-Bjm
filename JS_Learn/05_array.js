// 接触的 JS 的第一个数据结构 array,
// 相较于 C 的数组，JS的 array 具有栈、构造函数、迭代器特性.

// 输出保留数组格式
score = [1, 2, 3, 4];
letter = ["a", "b", "c"];

console.log(score);
console.log(letter);

// array 可以组合构成新的 array.
combined = [score, letter];
console.log(combined);

// 支持索引
console.log(score[0]);
console.log(score[3]);

plusOne = function(item) {
    var re = item + 10;
    console.log(re);
}

score.forEach(plusOne);