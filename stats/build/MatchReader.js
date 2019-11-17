"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var R = __importStar(require("./MatchResult"));
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[R.MATCH_DATE]),
                row[R.HOME_TEAM],
                row[R.AWAY_TEAM],
                parseInt(row[R.HOME_GOALS]),
                parseInt(row[R.AWAY_GOALS]),
                row[R.RESULT_COL],
                row[R.KEEPER]
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
