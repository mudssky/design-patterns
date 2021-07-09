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
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('i can fly');
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('i can not fly');
    };
    return FlyNoWay;
}());
var FlyRocketPowered = /** @class */ (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.fly = function () {
        console.log('fly with a rocket!!!!!!!');
    };
    return FlyRocketPowered;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('quack!!!');
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('<<Silence>>');
    };
    return MuteQuack;
}());
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('All ducks float,even decoys');
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new FlyWithWings();
        _this.quackBehavior = new Quack();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log('this is MallarDuck');
        this.performQuack();
        this.performFly();
        this.swim();
    };
    return MallardDuck;
}(Duck));
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new FlyRocketPowered();
        _this.quackBehavior = new MuteQuack();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log('this is model duck');
        this.performQuack();
        this.performFly();
        this.swim();
    };
    return ModelDuck;
}(Duck));
var DuckCall = /** @class */ (function (_super) {
    __extends(DuckCall, _super);
    function DuckCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DuckCall;
}(Quack));
// const duck1 = new TestDuck()
// duck1.performFly()
// duck1.performQuack()
new MallardDuck().display();
new ModelDuck().display();
new DuckCall().quack();
