"use strict";
var UpperCase = /** @class */ (function () {
    function UpperCase() {
    }
    UpperCase.prototype.write = function (words) {
        console.log("Uppercase:" + words);
    };
    return UpperCase;
}());
var LowerCase = /** @class */ (function () {
    function LowerCase() {
    }
    LowerCase.prototype.write = function (words) {
        console.log("Lowercase:" + words);
    };
    return LowerCase;
}());
var DefaultText = /** @class */ (function () {
    function DefaultText() {
    }
    DefaultText.prototype.write = function (words) {
        console.log("DefaultText:" + words);
    };
    return DefaultText;
}());
var TextEditor = /** @class */ (function () {
    function TextEditor(state) {
        this.state = state;
    }
    TextEditor.prototype.setState = function (state) {
        this.state = state;
    };
    TextEditor.prototype.type = function (words) {
        this.state.write(words);
    };
    return TextEditor;
}());
var editor = new TextEditor(new DefaultText());
editor.type('hello');
editor.setState(new UpperCase());
editor.type('1');
editor.setState(new LowerCase());
editor.type('2');
