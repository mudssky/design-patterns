"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorMemento = /** @class */ (function () {
    function EditorMemento(content) {
        this.content = content;
    }
    EditorMemento.prototype.getContent = function () {
        return this.content;
    };
    return EditorMemento;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.content = '';
    }
    Editor.prototype.type = function (words) {
        this.content = this.content + words;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.save = function () {
        return new EditorMemento(this.content);
    };
    Editor.prototype.restore = function (memento) {
        this.content = memento.getContent();
    };
    return Editor;
}());
var editor = new Editor();
editor.type('first sentence\n');
editor.type('this is second\n');
var saved = editor.save();
editor.type('third\n');
console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
