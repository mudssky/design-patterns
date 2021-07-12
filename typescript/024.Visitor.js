"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monkey = /** @class */ (function () {
    function Monkey() {
    }
    Monkey.prototype.shout = function () {
        console.log('Ooh oo aa aa!');
    };
    Monkey.prototype.accept = function (operation) {
        operation.visitMonkey(this);
    };
    return Monkey;
}());
var Lion = /** @class */ (function () {
    function Lion() {
    }
    Lion.prototype.accept = function (operation) {
        operation.visitLion(this);
    };
    Lion.prototype.roar = function () {
        console.log('Roaaar!');
    };
    return Lion;
}());
var Dolphin = /** @class */ (function () {
    function Dolphin() {
    }
    Dolphin.prototype.accept = function (operation) {
        operation.visitDolphin(this);
    };
    Dolphin.prototype.speak = function () {
        console.log('Tuut tuttu tuutt');
    };
    return Dolphin;
}());
var Speak = /** @class */ (function () {
    function Speak() {
    }
    Speak.prototype.visitMonkey = function (monkey) {
        monkey.shout();
    };
    Speak.prototype.visitLion = function (lion) {
        lion.roar();
    };
    Speak.prototype.visitDolphin = function (dolphin) {
        dolphin.speak();
    };
    return Speak;
}());
var monkey = new Monkey();
var lion = new Lion();
var dolphin = new Dolphin();
var speak = new Speak();
monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);
