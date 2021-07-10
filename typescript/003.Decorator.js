"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 10;
    };
    SimpleCoffee.prototype.getDescription = function () {
        return 'simple coffee';
    };
    return SimpleCoffee;
}());
var MilkDecorator = /** @class */ (function () {
    function MilkDecorator(c) {
        this.coffee = c;
        this.description = 'milk';
    }
    MilkDecorator.prototype.getCost = function () {
        return 4 + this.coffee.getCost();
    };
    MilkDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ' ' + this.description;
    };
    return MilkDecorator;
}());
var WhipDecorator = /** @class */ (function () {
    function WhipDecorator(c) {
        this.coffee = c;
        this.description = 'whip';
    }
    WhipDecorator.prototype.getCost = function () {
        return 5 + this.coffee.getCost();
    };
    WhipDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ' ' + this.description;
    };
    return WhipDecorator;
}());
// 香草
var VanillaDecorator = /** @class */ (function () {
    function VanillaDecorator(c) {
        this.coffee = c;
        this.description = 'vanilla';
    }
    VanillaDecorator.prototype.getCost = function () {
        return 3 + this.coffee.getCost();
    };
    VanillaDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ' ' + this.description;
    };
    return VanillaDecorator;
}());
var simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.getDescription());
console.log(simpleCoffee.getCost());
var milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.getDescription());
console.log(milkCoffee.getCost());
var mixCoffee = new VanillaDecorator(new MilkDecorator(new WhipDecorator(simpleCoffee)));
console.log(mixCoffee.getDescription());
console.log(mixCoffee.getCost());
