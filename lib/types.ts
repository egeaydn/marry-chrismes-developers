export type CommitType = 'feature' | 'fix' | 'chore' | 'hotfix' | 'refactor';

export interface Commit {
  id: string;
  date: string; // ISO format
  message: string;
  type: CommitType;
  linesAdded: number;
  linesRemoved: number;
  hour: number; // 0-23 for late night analysis
}

export interface Bug {
  id: string;
  name: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  timeToFix: number; // minutes
  fixedDate: string;
  emoji: string;
}

export interface ProductionIncident {
  title: string;
  description: string;
  impact: string;
  resolutionTime: number; // minutes
  timestamp: string;
}

export interface DeveloperStats {
  totalCommits: number;
  totalBugsFixed: number;
  lateNightCommits: number; // after 22:00
  weekendCommits: number;
  favoriteCommitType: CommitType;
  coffeeConsumed: number; // cups (mock)
  linesOfCode: number;
  productionHotfixes: number;
}

export interface YearData {
  commits: Commit[];
  bugs: Bug[];
  productionIncident: ProductionIncident;
  stats: DeveloperStats;
}
