"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("../MatchResult"));
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[R.HOME_TEAM] === this.team &&
                match[R.RESULT_COL] === R.RESULT.HOME_WINNER) {
                wins++;
            }
            else if (match[R.AWAY_TEAM] === this.team &&
                match[R.RESULT_COL] === R.RESULT.AWAY_WINNER) {
                wins++;
            }
        }
        return this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
