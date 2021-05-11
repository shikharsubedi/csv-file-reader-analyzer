import { CsvFileReader } from './CsvFileReader'
import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'
import {MatchReader} from './MatchReader'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReports'
import { Summary } from './Summary'
import { HtmlReports } from './reportTargets/HtmlReports'
const reader = MatchReader.fromCsv('football.csv')
reader.load()
const matches = reader.matches

const winsAnalyzer = new WinsAnalysis('Man United')
const reporter = new ConsoleReport()
const summary = new Summary(winsAnalyzer, reporter)
summary.buildAndPrintReport(matches)


const htmlSummary = new Summary(winsAnalyzer, new HtmlReports())
htmlSummary.buildAndPrintReport(matches)
