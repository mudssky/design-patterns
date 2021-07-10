"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 饮料
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.description = 'Unknow Beverage';
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
// 调料装饰器
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
// 浓咖啡
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = 'Espresso';
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
// 混搭
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = 'HouseBlend';
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    return HouseBlend;
}(Beverage));
// 摩卡咖啡
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription();
    };
    Mocha.prototype.cost = function () {
        return 0.2 + this.beverage.cost();
    };
    return Mocha;
}(CondimentDecorator));
// 奶油
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription();
    };
    Whip.prototype.cost = function () {
        return 0.12 + this.beverage.cost();
    };
    return Whip;
}(CondimentDecorator));
var beverage = new Espresso();
console.log(beverage.getDescription());
var beverage2 = new HouseBlend();
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription());
console.log(beverage2.cost());
