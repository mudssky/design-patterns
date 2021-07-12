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
// interface WebPage {
//  protected theme: Theme
//   getContent(): string
// }
var WebPage = /** @class */ (function () {
    function WebPage() {
    }
    return WebPage;
}());
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About(theme) {
        var _this = _super.call(this) || this;
        _this.theme = theme;
        return _this;
    }
    About.prototype.getContent = function () {
        return "about page in " + this.theme.getColor();
    };
    return About;
}(WebPage));
var Careers = /** @class */ (function (_super) {
    __extends(Careers, _super);
    function Careers(theme) {
        var _this = _super.call(this) || this;
        _this.theme = theme;
        return _this;
    }
    Careers.prototype.getContent = function () {
        return "careers page in " + this.theme.getColor();
    };
    return Careers;
}(WebPage));
var DarkTheme = /** @class */ (function () {
    function DarkTheme() {
    }
    DarkTheme.prototype.getColor = function () {
        return 'Dark Black';
    };
    return DarkTheme;
}());
var LightTheme = /** @class */ (function () {
    function LightTheme() {
    }
    LightTheme.prototype.getColor = function () {
        return 'Off white';
    };
    return LightTheme;
}());
var AquaTheme = /** @class */ (function () {
    function AquaTheme() {
    }
    AquaTheme.prototype.getColor = function () {
        return 'Light blue';
    };
    return AquaTheme;
}());
var darkTheme = new DarkTheme();
var about = new About(darkTheme);
var careers = new Careers(darkTheme);
console.log(about.getContent());
console.log(careers.getContent());
