"use strict";
var KaraTea = /** @class */ (function () {
    function KaraTea() {
    }
    return KaraTea;
}());
var TeaMaker = /** @class */ (function () {
    function TeaMaker() {
        this.availableTea = {};
    }
    TeaMaker.prototype.make = function (preference) {
        if (!this.availableTea[preference]) {
            this.availableTea[preference] = new KaraTea();
        }
        return this.availableTea[preference];
    };
    return TeaMaker;
}());
var Teashop = /** @class */ (function () {
    function Teashop(teaMaker) {
        this.orders = {};
        this.teaMaker = teaMaker;
    }
    Teashop.prototype.takeOrder = function (teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    };
    Teashop.prototype.server = function () {
        for (var key in this.orders) {
            console.log("Serving Tea to table#" + key + " ");
        }
    };
    return Teashop;
}());
var teaMaker = new TeaMaker();
var shop = new Teashop(teaMaker);
shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);
shop.server();
