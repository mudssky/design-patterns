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
var Account = /** @class */ (function () {
    function Account() {
        this.successor = null;
    }
    Account.prototype.setNext = function (account) {
        this.successor = account;
    };
    Account.prototype.pay = function (amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log("paid " + amountToPay + " using " + this.constructor.toString());
        }
        else if (this.successor) {
            console.log('cant pay ,using next...');
            this.successor.pay(amountToPay);
        }
        else {
            throw new Error('None of the accounts have enough balance');
        }
    };
    Account.prototype.canPay = function (amount) {
        return this.balance >= amount;
    };
    return Account;
}());
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return Bank;
}(Account));
var Paypal = /** @class */ (function (_super) {
    __extends(Paypal, _super);
    function Paypal(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return Paypal;
}(Account));
var Bitcoin = /** @class */ (function (_super) {
    __extends(Bitcoin, _super);
    function Bitcoin(balance) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        return _this;
    }
    return Bitcoin;
}(Account));
var bank = new Bank(100);
var paypal = new Paypal(200);
var bitcoin = new Bitcoin(300);
bank.setNext(paypal);
paypal.setNext(bitcoin);
bank.pay(259);
