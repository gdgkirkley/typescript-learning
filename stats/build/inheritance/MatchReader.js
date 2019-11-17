"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("../utils");
var R = __importStar(require("../MatchResult"));
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[R.MATCH_DATE]),
            row[R.HOME_TEAM],
            row[R.AWAY_TEAM],
            parseInt(row[R.HOME_GOALS]),
            parseInt(row[R.AWAY_GOALS]),
            row[R.RESULT_COL],
            row[R.KEEPER]
        ];
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
