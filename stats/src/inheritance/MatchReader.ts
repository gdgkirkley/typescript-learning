import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../utils";
import * as R from "../MatchResult";

export class MatchReader extends CsvFileReader<R.MatchData> {
  mapRow(row: string[]): R.MatchData {
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
}
