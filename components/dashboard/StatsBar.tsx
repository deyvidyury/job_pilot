type Stat = {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
};

const stats: Stat[] = [
  { label: 'Total Jobs Found', value: '24', trend: '12%', trendUp: true },
  { label: 'Avg. Match Rate', value: '72%', trend: '5%', trendUp: true },
  { label: 'Companies Researched', value: '8', trend: '2', trendUp: true },
  { label: 'Jobs This Week', value: '6', trend: '2', trendUp: true },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
        >
          <p className="text-text-muted text-xs font-normal leading-4 mb-2">
            {stat.label}
          </p>
          <p className="text-[30px] font-semibold leading-9 text-text-primary mb-1">
            {stat.value}
          </p>
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded ${
              stat.trendUp
                ? 'bg-success-lightest text-success-darker'
                : 'bg-accent-muted text-text-secondary'
            }`}
          >
            {stat.trendUp ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2L8 6H2L5 2Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 8L2 4H8L5 8Z" fill="currentColor" />
              </svg>
            )}
            {stat.trend}
          </span>
        </div>
      ))}
    </div>
  );
}
