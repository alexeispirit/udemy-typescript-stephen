"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// import { WinsAnalysis } from "./ananysis/WinsAnalysis";
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
