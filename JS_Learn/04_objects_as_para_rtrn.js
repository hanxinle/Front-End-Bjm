// 对象作为函数的返回值和参数

// 和 Python 一样，这些都是可以省略的

// var findPlanet;
// var showPlaInfo;
// var planet1;
// var planet2;

// return 对象
findPlanet = function(name, type, distance) {
    return {
        name: name,
        type: type,
        distance: distance,
    };
};

// 对象是参数
showPlaInfo = function(planet) {
    console.log("name: " + planet.name.toUpperCase() + " , " + "type: " + planet.type + " , " + "distance: " + planet.distance);
}


planet1 = findPlanet("Moon", "Near", 30);
planet2 = findPlanet("Sum", "Far", 1000000);

showPlaInfo(planet1);
showPlaInfo(planet2);

// return String is OK
getPlaInfo1 = function(planet) {
    return "name: " + planet.name.toUpperCase() + " , " + "type: " + planet.type + " , " + "distance: " + planet.distance;
}

// test return string
console.log(getPlaInfo1(planet1));
console.log(getPlaInfo1(planet2));

// 两个参数都是对象
move = function(point, dis) {
    return {
        x: point.x + dis.x,
        y: point.y + dis.y,
    }
}

point1 = { x: 1, y: 2 };

showPoint = function(point) {
    console.log(point.x + "," + point.y);
}

point2 = move(point1, { x: 2, y: 1 });

showPoint(point1);
console.log("Call move and See:");
showPoint(point2);