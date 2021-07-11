"use strict";
var President = /** @class */ (function () {
    function President() {
    }
    President.getInstance = function () {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    };
    return President;
}());
var president1 = President.getInstance();
var president2 = President.getInstance();
console.log(president1 == president2);
