"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report) {
        var html = "\n            <div>\n                <h1>Analysis Output</h1>\n                <p>" + report + "</p>\n            </div>\n        ";
        fs_1.default.writeFileSync("report.html", html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
