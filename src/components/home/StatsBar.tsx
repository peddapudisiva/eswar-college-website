import { STATS } from '../../lib/constants';
import { useCountUp } from '../../hooks/useCountUp';

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="text-center py-9 px-4">
      <div className="text-gold font-bold" style={{ fontSize: '48px', lineHeight: '1' }}>
        {count}{suffix}
      </div>
      <div className="text-white/70 mt-3" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-navy-deep border-t-[3px] border-gold">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatCell key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
