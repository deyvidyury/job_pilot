import Link from 'next/link';

export function IncompleteProfileBanner() {
  return (
    <div className="bg-accent-muted border border-accent-light rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1L9.8 5.8L15 6.3L11.2 9.7L12.4 15L8 12.4L3.6 15L4.8 9.7L1 6.3L6.2 5.8L8 1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <p className="text-text-primary text-sm font-semibold leading-5">
            Complete your profile
          </p>
          <p className="text-text-secondary text-sm leading-5 mt-0.5">
            Fill in your skills, experience, and preferences to get accurate job
            matches and better AI scores.
          </p>
        </div>
      </div>
      <Link
        href="/profile"
        className="bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors shrink-0"
      >
        Set Up Profile
      </Link>
    </div>
  );
}
