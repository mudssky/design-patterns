"use strict";
var LabDoor = /** @class */ (function () {
    function LabDoor() {
    }
    LabDoor.prototype.open = function () {
        console.log('opening the lab door');
    };
    LabDoor.prototype.close = function () {
        console.log('closing the lab door');
    };
    return LabDoor;
}());
var SecuredDoor = /** @class */ (function () {
    function SecuredDoor(door) {
        this.password = '123456';
        this.door = door;
    }
    SecuredDoor.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.door.open();
        }
        else {
            console.log('No,you cant open this door');
        }
    };
    SecuredDoor.prototype.authenticate = function (passwords) {
        return this.password == passwords;
    };
    SecuredDoor.prototype.close = function () {
        this.door.close();
    };
    return SecuredDoor;
}());
var door = new SecuredDoor(new LabDoor());
door.open('1234567');
door.open('123456');
door.close();
