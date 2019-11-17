import { Analyzer } from "../Summary";
import * as R from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: R.MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        match[R.HOME_TEAM] === this.team &&
        match[R.RESULT_COL] === R.RESULT.HOME_WINNER
      ) {
        wins++;
      } else if (
        match[R.AWAY_TEAM] === this.team &&
        match[R.RESULT_COL] === R.RESULT.AWAY_WINNER
      ) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games`;
  }
}
