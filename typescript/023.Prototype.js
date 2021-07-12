"use strict";
var Sheep = /** @class */ (function () {
    function Sheep(name, category) {
        if (category === void 0) { category = 'Mountain Sheep'; }
        this.name = name;
        this.category = category;
    }
    Sheep.prototype.setName = function (name) {
        this.name = name;
    };
    Sheep.prototype.getName = function () {
        return this.name;
    };
    Sheep.prototype.setCategory = function (category) {
        this.category = category;
    };
    Sheep.prototype.getCategory = function () {
        return this.category;
    };
    return Sheep;
}());
var original = new Sheep('Jolly');
console.log("name:" + original.getName() + ", category: " + original.getCategory());
// 需要调用一个深拷贝方法，js原生并没有这种方法
