// Have to instal NodeJS type definition file @types/node
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHTMLReport("Leicester");

summary.buildAndPrintReport(matchReader.matches);

// OR

const summaryConsole = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summaryConsole.buildAndPrintReport(matchReader.matches);
