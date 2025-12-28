import { YearData, Commit, Bug, ProductionIncident, DeveloperStats } from './types';

// Helper to generate random date in 2025
function randomDate2025(month: number): string {
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = Math.floor(Math.random() * 24);
  return `2025-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:00:00Z`;
}

const commitMessages = {
  feature: [
    'Add dark mode support',
    'Implement user authentication',
    'Add search functionality',
    'Create dashboard layout',
    'Add file upload feature',
    'Implement real-time notifications',
    'Add export to CSV functionality',
    'Create mobile responsive design',
  ],
  fix: [
    'Fix memory leak in sidebar',
    'Fix infinite loop in useEffect',
    'Fix CSS overflow issue',
    'Fix race condition in API call',
    'Fix timezone bug',
    'Fix mobile scroll',
    'Fix broken form validation',
    'Fix null pointer exception',
  ],
  chore: [
    'Update dependencies',
    'Clean up console logs',
    'Update README',
    'Refactor folder structure',
    'Update CI/CD pipeline',
    'Add ESLint rules',
    'Update TypeScript config',
  ],
  hotfix: [
    'HOTFIX: Critical auth bypass',
    'HOTFIX: Database connection pool leak',
    'HOTFIX: Payment processing error',
    'HOTFIX: Data corruption bug',
  ],
  refactor: [
    'Refactor authentication logic',
    'Extract reusable components',
    'Improve error handling',
    'Optimize database queries',
    'Simplify state management',
  ],
};

// Generate commits
function generateCommits(): Commit[] {
  const commits: Commit[] = [];
  const types = ['feature', 'fix', 'chore', 'refactor'] as const;
  
  for (let month = 1; month <= 12; month++) {
    const commitCount = Math.floor(Math.random() * 15) + 10; // 10-25 per month
    
    for (let i = 0; i < commitCount; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const messages = commitMessages[type];
      const message = messages[Math.floor(Math.random() * messages.length)];
      const date = randomDate2025(month);
      const hour = parseInt(date.split('T')[1].split(':')[0]);
      
      commits.push({
        id: `commit-${month}-${i}`,
        date,
        message,
        type,
        linesAdded: Math.floor(Math.random() * 500) + 10,
        linesRemoved: Math.floor(Math.random() * 200),
        hour,
      });
    }
  }
  
  // Add some hotfixes
  for (let i = 0; i < 3; i++) {
    const month = Math.floor(Math.random() * 12) + 1;
    commits.push({
      id: `hotfix-${i}`,
      date: randomDate2025(month),
      message: commitMessages.hotfix[i],
      type: 'hotfix',
      linesAdded: Math.floor(Math.random() * 100) + 20,
      linesRemoved: Math.floor(Math.random() * 50),
      hour: 23, // Late night hotfix
    });
  }
  
  return commits.sort((a, b) => a.date.localeCompare(b.date));
}

const mockBugs: Bug[] = [
  {
    id: 'bug-1',
    name: 'Button not clickable on mobile',
    severity: 'high',
    timeToFix: 45,
    fixedDate: '2025-02-15',
    emoji: '🐛',
  },
  {
    id: 'bug-2',
    name: 'Memory leak in component',
    severity: 'critical',
    timeToFix: 180,
    fixedDate: '2025-03-22',
    emoji: '💥',
  },
  {
    id: 'bug-3',
    name: 'Typo in error message',
    severity: 'low',
    timeToFix: 5,
    fixedDate: '2025-04-10',
    emoji: '✍️',
  },
  {
    id: 'bug-4',
    name: 'API timeout issues',
    severity: 'high',
    timeToFix: 120,
    fixedDate: '2025-05-18',
    emoji: '⏱️',
  },
  {
    id: 'bug-5',
    name: 'CSS alignment issue',
    severity: 'medium',
    timeToFix: 30,
    fixedDate: '2025-06-05',
    emoji: '🎨',
  },
  {
    id: 'bug-6',
    name: 'Race condition in state update',
    severity: 'critical',
    timeToFix: 240,
    fixedDate: '2025-07-12',
    emoji: '🏁',
  },
  {
    id: 'bug-7',
    name: 'Broken link in footer',
    severity: 'low',
    timeToFix: 10,
    fixedDate: '2025-08-20',
    emoji: '🔗',
  },
  {
    id: 'bug-8',
    name: 'Form validation bypass',
    severity: 'critical',
    timeToFix: 90,
    fixedDate: '2025-09-08',
    emoji: '🚨',
  },
];

const mockProductionIncident: ProductionIncident = {
  title: '500 Error: Database Connection Lost',
  description: 'Production database connection pool exhausted during Black Friday traffic spike',
  impact: '23,450 users affected',
  resolutionTime: 47, // minutes
  timestamp: '2025-11-29T14:32:00Z',
};

function calculateStats(commits: Commit[]): DeveloperStats {
  const lateNightCommits = commits.filter(c => c.hour >= 22 || c.hour <= 5).length;
  const weekendCommits = commits.filter(c => {
    const date = new Date(c.date);
    const day = date.getDay();
    return day === 0 || day === 6;
  }).length;
  
  const typeCount: Record<string, number> = {};
  commits.forEach(c => {
    typeCount[c.type] = (typeCount[c.type] || 0) + 1;
  });
  
  const favoriteType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0] as any;
  const totalLines = commits.reduce((sum, c) => sum + c.linesAdded, 0);
  
  return {
    totalCommits: commits.length,
    totalBugsFixed: mockBugs.length,
    lateNightCommits,
    weekendCommits,
    favoriteCommitType: favoriteType,
    coffeeConsumed: Math.floor(lateNightCommits * 2.5) + weekendCommits,
    linesOfCode: totalLines,
    productionHotfixes: commits.filter(c => c.type === 'hotfix').length,
  };
}

// Generate and export data
const commits = generateCommits();
const stats = calculateStats(commits);

export const yearData: YearData = {
  commits,
  bugs: mockBugs,
  productionIncident: mockProductionIncident,
  stats,
};

// Export individual pieces for convenience
export { commits as mockCommits };
export { mockBugs };
export { mockProductionIncident };
export { stats as mockStats };
