"use strict";
var JobInfo = /** @class */ (function () {
    function JobInfo(info) {
        this.info = info;
    }
    JobInfo.prototype.getInfo = function () {
        return this.info;
    };
    return JobInfo;
}());
var JobSite = /** @class */ (function () {
    function JobSite() {
        this.observers = Array();
    }
    JobSite.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    JobSite.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    JobSite.prototype.notifyObservers = function (info) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this, info);
        }
    };
    JobSite.prototype.AddJob = function (info) {
        console.log('招聘网站有新的工作追加了');
        this.notifyObservers(info);
    };
    return JobSite;
}());
var Jiucai = /** @class */ (function () {
    function Jiucai(name) {
        this.name = name;
    }
    Jiucai.prototype.update = function (s, arg) {
        console.log(this.name + "\u6536\u5230\u65B0\u5DE5\u4F5C\u63A8\u9001\uFF0C\u804C\u4F4D\u662F" + arg.getInfo());
    };
    return Jiucai;
}());
var zibenjia = new JobSite();
var jiucai1 = new Jiucai('生命1号');
var jiucai2 = new Jiucai('脑白金');
zibenjia.registerObserver(jiucai1);
zibenjia.registerObserver(jiucai2);
zibenjia.AddJob(new JobInfo('web前端'));
zibenjia.AddJob(new JobInfo('算法工程师'));
