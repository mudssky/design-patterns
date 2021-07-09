"use strict";
var WeatherDate = /** @class */ (function () {
    function WeatherDate() {
        this.observers = Array();
    }
    WeatherDate.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherDate.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherDate.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherDate.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherDate.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherDate;
}());
var CurrentConditionDisplay = /** @class */ (function () {
    function CurrentConditionDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    CurrentConditionDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionDisplay.prototype.display = function () {
        console.log("Current conditionsc: " + this.temperature + " F degrees and " + this.humidity + "% humidity");
    };
    return CurrentConditionDisplay;
}());
var StatisticsConditionDisplay = /** @class */ (function () {
    function StatisticsConditionDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    StatisticsConditionDisplay.prototype.update = function (temp, humidity, pressure) {
        this.pressure = pressure;
        this.display();
    };
    StatisticsConditionDisplay.prototype.display = function () {
        console.log("Statistics conditionsc: " + this.pressure + " pressure");
    };
    return StatisticsConditionDisplay;
}());
var wd = new WeatherDate();
var ccd = new CurrentConditionDisplay(wd);
var scd = new StatisticsConditionDisplay(wd);
wd.setMeasurements(80, 65, 30.4);
wd.setMeasurements(82, 75, 28.3);
wd.setMeasurements(78, 90, 36.4);
