"use strict";
var AfricanLion = /** @class */ (function () {
    function AfricanLion() {
    }
    AfricanLion.prototype.roar = function () {
        console.log('aouuuuuuuu!');
    };
    return AfricanLion;
}());
var AsianLion = /** @class */ (function () {
    function AsianLion() {
    }
    AsianLion.prototype.roar = function () {
        console.log('aooooooooooo!');
    };
    return AsianLion;
}());
var Hunter = /** @class */ (function () {
    function Hunter() {
    }
    Hunter.prototype.hunt = function (lion) {
        lion.roar();
    };
    return Hunter;
}());
var WildDog = /** @class */ (function () {
    function WildDog() {
    }
    WildDog.prototype.bark = function () {
        console.log('wang!wang!wang!');
    };
    return WildDog;
}());
var WildDogAdapter = /** @class */ (function () {
    function WildDogAdapter(dog) {
        this.dog = dog;
    }
    WildDogAdapter.prototype.roar = function () {
        this.dog.bark();
    };
    return WildDogAdapter;
}());
var wildDog = new WildDog();
var wildDogAdapter = new WildDogAdapter(wildDog);
var hunter = new Hunter();
hunter.hunt(wildDogAdapter);
