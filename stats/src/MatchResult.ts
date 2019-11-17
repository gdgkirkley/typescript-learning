export const MATCH_DATE = 0;
export const HOME_TEAM = 1;
export const AWAY_TEAM = 2;
export const HOME_GOALS = 3;
export const AWAY_GOALS = 4;
export const RESULT_COL = 5;
export const KEEPER = 6;

export enum RESULT {
  HOME_WINNER = "H",
  AWAY_WINNER = "A",
  DRAW = "D"
}

export type MatchData = [Date, string, string, number, number, RESULT, string];
