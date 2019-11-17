"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var DAY = 0;
    var MONTH = 1;
    var YEAR = 2;
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[YEAR], dateParts[MONTH] - 1, dateParts[DAY]);
};
