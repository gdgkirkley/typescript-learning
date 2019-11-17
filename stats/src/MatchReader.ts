import { dateStringToDate } from "./utils";
import * as R from "./MatchResult";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: R.MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): R.MatchData => {
        return [
          dateStringToDate(row[R.MATCH_DATE]),
          row[R.HOME_TEAM],
          row[R.AWAY_TEAM],
          parseInt(row[R.HOME_GOALS]),
          parseInt(row[R.AWAY_GOALS]),
          row[R.RESULT_COL] as R.RESULT,
          row[R.KEEPER]
        ];
      }
    );
  }
}
