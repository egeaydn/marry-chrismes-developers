'use client';

import { useState } from 'react';
import { TerminalBoot } from '@/components/TerminalBoot/TerminalBoot';
import { CommitCounterSection } from '@/components/CommitCounter/CommitCounterSection';
import { BugTimelineSection } from '@/components/BugTimeline/BugTimelineSection';
import { ProductionMomentSection } from '@/components/ProductionMoment/ProductionMomentSection';
import { StatsSection } from '@/components/Stats/StatsSection';
import { FinalCTASection } from '@/components/FinalCTA/FinalCTASection';
import { yearData } from '@/lib/mockData';

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {!hasStarted ? (
        <TerminalBoot onCompleteAction={() => setHasStarted(true)} />
      ) : (
        <main className="w-full">
          <CommitCounterSection
            totalCommits={yearData.stats.totalCommits}
            linesOfCode={yearData.stats.linesOfCode}
          />
          
          <BugTimelineSection bugs={yearData.bugs} />
          
          <ProductionMomentSection incident={yearData.productionIncident} />
          
          <StatsSection stats={yearData.stats} />
          
          <FinalCTASection />
        </main>
      )}
    </div>
  );
}

