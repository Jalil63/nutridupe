import { BenchmarkHeader } from './benchmark-header';
import { DupeCard } from './dupe-card';
import type { BenchmarkWithDupes } from '@/lib/types';

export function BenchmarkResults({ benchmark }: { benchmark: BenchmarkWithDupes }) {
  if (benchmark.dupes.length === 0) return null;

  return (
    <div>
      <BenchmarkHeader benchmark={benchmark} />
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benchmark.dupes.map((dupe, idx) => (
          <DupeCard key={dupe.id} dupe={dupe} benchmark={benchmark} index={idx} />
        ))}
      </div>
    </div>
  );
}
