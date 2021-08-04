// 类，构造函数

// 使用 this 关键字，
// Planet 是构造函数，构造对象使用 new.
var Planet = function(name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function() {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
    };
};

// new 创建新的对象
planet = new Planet("Jupiter", 5, "Gas Giant");
planet.showPlanet();

// 旧方法定义函数构造对象.
// 还需要从函数名看
// 定义了构造函数，其实也就是定义了一个类，
// 并且指明了类的数据成员和成员函数 showPlanet.

var buildPlanet = function(name, position, type) {
    // 1. 对象
    var planet = {};
    // 2. 数据成员
    planet.name = name;
    planet.position = position;
    planet.type = type;
    // 3. 成员函数
    planet.showPlanet = function() {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };
    // 4. 返回对象
    return planet;
};

// 构造对象
planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);
// 调用成员函数
planet1.showPlanet();