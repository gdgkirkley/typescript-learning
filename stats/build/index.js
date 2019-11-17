"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Have to instal NodeJS type definition file @types/node
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport("Leicester");
summary.buildAndPrintReport(matchReader.matches);
// OR
var summaryConsole = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summaryConsole.buildAndPrintReport(matchReader.matches);
