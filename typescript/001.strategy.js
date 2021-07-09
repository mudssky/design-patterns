"use strict";
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (arr) {
        console.log('do bubble sort');
        return arr;
    };
    return BubbleSortStrategy;
}());
var QuickSortStrategy = /** @class */ (function () {
    function QuickSortStrategy() {
    }
    QuickSortStrategy.prototype.sort = function (arr) {
        console.log('do quick sort');
        return arr;
    };
    return QuickSortStrategy;
}());
var Sorter = /** @class */ (function () {
    function Sorter(sortStrategy) {
        this.sortStrategy = sortStrategy;
    }
    Sorter.prototype.sort = function (arr) {
        return this.sortStrategy.sort(arr);
    };
    return Sorter;
}());
new Sorter(new BubbleSortStrategy()).sort([9, 2, 4, 3, 5]);
new Sorter(new QuickSortStrategy()).sort([9, 2, 4, 3, 5]);
