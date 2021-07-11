"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WoodenDoor = /** @class */ (function () {
    function WoodenDoor(width, height) {
        this.width = width;
        this.height = height;
    }
    WoodenDoor.prototype.getWidth = function () {
        return this.width;
    };
    WoodenDoor.prototype.getHeight = function () {
        return this.height;
    };
    WoodenDoor.prototype.deescribe = function () {
        console.log("width:" + this.getWidth() + ",height:" + this.getHeight());
    };
    return WoodenDoor;
}());
var DoorFactory = /** @class */ (function () {
    function DoorFactory() {
    }
    DoorFactory.makeDoor = function (width, height) {
        return new WoodenDoor(width, height);
    };
    return DoorFactory;
}());
var door = DoorFactory.makeDoor(100, 200);
door.deescribe();
var door2 = DoorFactory.makeDoor(300, 500);
door2.deescribe();
