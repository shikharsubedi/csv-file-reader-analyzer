import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches:MatchData[]): string {
    const wins = matches.filter((match: MatchData): boolean => {
      return (
        (match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
      )
    }).length

    return `Team ${this.teamName} won ${wins} games`
  }
}