function LineChart() {
  const points =
    '12,36 24,30 36,26 48,22 60,18 72,16 84,14 96,12 108,14 120,10 132,8 144,12 156,8 168,4 180,6 192,2 204,6 216,8 228,10 240,12 252,8 264,4 276,2 288,6';
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 300 160"
      fill="none"
      className="w-full"
      preserveAspectRatio="none"
    >
      {/* Grid lines */}
      <line x1="0" y1="40" x2="300" y2="40" stroke="#E7EAF3" strokeWidth="1" />
      <line x1="0" y1="80" x2="300" y2="80" stroke="#E7EAF3" strokeWidth="1" />
      <line
        x1="0"
        y1="120"
        x2="300"
        y2="120"
        stroke="#E7EAF3"
        strokeWidth="1"
      />
      {/* Area fill */}
      <polygon
        points="12,160 12,36 24,30 36,26 48,22 60,18 72,16 84,14 96,12 108,14 120,10 132,8 144,12 156,8 168,4 180,6 192,2 204,6 216,8 228,10 240,12 252,8 264,4 276,2 288,6 288,160"
        fill="url(#lineGrad)"
      />
      {/* Line */}
      <polyline
        points={points}
        stroke="#7C5CFC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots */}
      {points.split(' ').map((p, i) => {
        const [cx, cy] = p.split(',');
        return <circle key={i} cx={cx} cy={cy} r="3" fill="#7C5CFC" />;
      })}
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ScoreBarChart() {
  const bars = [
    { label: '50-60', value: 28, height: 56 },
    { label: '60-70', value: 42, height: 84 },
    { label: '70-80', value: 55, height: 110 },
    { label: '80-90', value: 38, height: 76 },
    { label: '90-100', value: 22, height: 44 },
  ];
  return (
    <div className="flex items-end justify-between gap-2 h-40 px-1">
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="flex flex-col items-center gap-2 flex-1"
        >
          <span className="text-text-muted text-[10px] leading-none">
            {bar.value}
          </span>
          <div
            className="w-full rounded-t-sm"
            style={{
              height: `${bar.height}px`,
              backgroundColor: 'var(--color-accent)',
              opacity: 0.7 + (bar.value / 100) * 0.3,
            }}
          />
          <span className="text-text-muted text-[10px] leading-none">
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ResearchBarChart() {
  const days = [
    { label: 'Mon', value: 2, height: 32 },
    { label: 'Tue', value: 0, height: 0 },
    { label: 'Wed', value: 3, height: 48 },
    { label: 'Thu', value: 1, height: 16 },
    { label: 'Fri', value: 2, height: 32 },
    { label: 'Sat', value: 0, height: 0 },
    { label: 'Sun', value: 0, height: 0 },
  ];
  return (
    <div className="flex items-end justify-between gap-2 h-40 px-1">
      {days.map((day) => (
        <div
          key={day.label}
          className="flex flex-col items-center gap-2 flex-1"
        >
          <span className="text-text-muted text-[10px] leading-none">
            {day.value > 0 ? day.value : ''}
          </span>
          <div
            className="w-full rounded-t-sm"
            style={{
              height: `${day.height}px`,
              backgroundColor: 'var(--color-accent)',
              opacity: day.value > 0 ? 0.85 : 0.15,
            }}
          />
          <span className="text-text-muted text-[10px] leading-none">
            {day.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Jobs Found Over Time */}
      <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <h3 className="text-text-primary text-base font-semibold leading-6 mb-1">
          Jobs Found Over Time
        </h3>
        <p className="text-text-muted text-xs leading-4 mb-4">Last 30 days</p>
        <LineChart />
      </div>

      {/* Match Score Distribution */}
      <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <h3 className="text-text-primary text-base font-semibold leading-6 mb-1">
          Match Score Distribution
        </h3>
        <p className="text-text-muted text-xs leading-4 mb-4">
          All time scores
        </p>
        <ScoreBarChart />
      </div>

      {/* Company Research Activity */}
      <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <h3 className="text-text-primary text-base font-semibold leading-6 mb-1">
          Company Research Activity
        </h3>
        <p className="text-text-muted text-xs leading-4 mb-4">Last 7 days</p>
        <ResearchBarChart />
      </div>
    </div>
  );
}
