"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WoodenDoor = /** @class */ (function () {
    function WoodenDoor() {
    }
    WoodenDoor.prototype.getDescription = function () {
        console.log('I am a wooden door');
    };
    return WoodenDoor;
}());
var IronDoor = /** @class */ (function () {
    function IronDoor() {
    }
    IronDoor.prototype.getDescription = function () {
        console.log('i am an iron door');
    };
    return IronDoor;
}());
var Welder = /** @class */ (function () {
    function Welder() {
    }
    Welder.prototype.getDescription = function () {
        console.log('i can only fit iron doors');
    };
    return Welder;
}());
var Carpenter = /** @class */ (function () {
    function Carpenter() {
    }
    Carpenter.prototype.getDescription = function () {
        console.log('i can only fit wooden doors');
    };
    return Carpenter;
}());
var WoodenDoorFactory = /** @class */ (function () {
    function WoodenDoorFactory() {
    }
    WoodenDoorFactory.prototype.makeDoor = function () {
        return new WoodenDoor();
    };
    WoodenDoorFactory.prototype.makeFittingExpert = function () {
        return new Carpenter();
    };
    return WoodenDoorFactory;
}());
var IronDoorFactory = /** @class */ (function () {
    function IronDoorFactory() {
    }
    IronDoorFactory.prototype.makeDoor = function () {
        return new IronDoor();
    };
    IronDoorFactory.prototype.makeFittingExpert = function () {
        return new Welder();
    };
    return IronDoorFactory;
}());
var woodenFactory = new WoodenDoorFactory();
var door = woodenFactory.makeDoor();
var expert = woodenFactory.makeFittingExpert();
door.getDescription();
expert.getDescription();
