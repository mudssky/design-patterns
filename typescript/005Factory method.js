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
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.askQuestions = function () {
        console.log('ask about design patterns!');
    };
    return Developer;
}());
var CommunityExecutive = /** @class */ (function () {
    function CommunityExecutive() {
    }
    CommunityExecutive.prototype.askQuestions = function () {
        console.log('ask more about community building');
    };
    return CommunityExecutive;
}());
var HiringManager = /** @class */ (function () {
    function HiringManager() {
    }
    HiringManager.prototype.takeInterview = function () {
        var interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    };
    return HiringManager;
}());
var DevelopmentManager = /** @class */ (function (_super) {
    __extends(DevelopmentManager, _super);
    function DevelopmentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopmentManager.prototype.makeInterviewer = function () {
        return new Developer();
    };
    return DevelopmentManager;
}(HiringManager));
var MarketingManager = /** @class */ (function (_super) {
    __extends(MarketingManager, _super);
    function MarketingManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketingManager.prototype.makeInterviewer = function () {
        return new CommunityExecutive();
    };
    return MarketingManager;
}(HiringManager));
var devManager = new DevelopmentManager();
devManager.takeInterview();
var marketManager = new MarketingManager();
marketManager.takeInterview();
