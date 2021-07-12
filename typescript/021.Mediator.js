"use strict";
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
    }
    ChatRoom.prototype.showMessage = function (user, message) {
        var time = new Date().toUTCString();
        var sender = user.getName();
        console.log(time + "[" + sender + "]:" + message);
    };
    return ChatRoom;
}());
var User = /** @class */ (function () {
    function User(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.send = function (message) {
        this.chatMediator.showMessage(this, message);
    };
    return User;
}());
var mediator = new ChatRoom();
var john = new User('John Doe', mediator);
var jane = new User('Jane Doe', mediator);
john.send('hi,its me');
jane.send('hey!');
