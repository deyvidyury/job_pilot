type Props = {
  completionPercent: number;
  missingFields: string[];
};

export function CompletionIndicator({
  completionPercent,
  missingFields,
}: Props) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const filled = (completionPercent / 100) * circumference;

  return (
    <div className="bg-accent-muted border border-accent-light rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        {/* Completion ring */}
        <div className="relative w-16 h-16 shrink-0">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="-rotate-90"
          >
            {/* Background circle */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="var(--color-accent-light)"
              strokeWidth="4"
            />
            {/* Progress circle */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - filled}
              className="transition-[stroke-dashoffset] duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-accent text-xs font-bold">
            {completionPercent}%
          </span>
        </div>

        <div>
          <p className="text-text-primary text-sm font-semibold leading-5">
            Your profile needs attention
          </p>
          <p className="text-text-secondary text-sm leading-5 mt-0.5">
            Complete your profile to get better job matches and more accurate
            scoring.
          </p>
          {/* Missing field tags */}
          {missingFields.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {missingFields.map((field) => (
                <span
                  key={field}
                  className="inline-flex items-center gap-1 bg-surface border border-border-light text-text-secondary rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {field.toUpperCase()}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="text-text-muted shrink-0"
                  >
                    <path
                      d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors shrink-0"
      >
        Complete Profile
      </button>
    </div>
  );
}
