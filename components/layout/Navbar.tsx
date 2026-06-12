import Link from 'next/link';

type Props = {
  activePage?: 'dashboard' | 'find-jobs' | 'profile';
};

function navLinkClass(active: boolean) {
  return `text-sm font-medium transition-colors ${
    active ? 'text-accent' : 'text-text-dark hover:text-accent'
  }`;
}

export function Navbar({ activePage }: Props) {
  return (
    <header className="h-16 w-full bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-360 mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-text-primary font-semibold text-base">
            JobPilot
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/dashboard"
            className={navLinkClass(activePage === 'dashboard')}
          >
            Dashboard
          </Link>
          <Link
            href="/find-jobs"
            className={navLinkClass(activePage === 'find-jobs')}
          >
            Find Jobs
          </Link>
          <Link
            href="/profile"
            className={navLinkClass(activePage === 'profile')}
          >
            Profile
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/login"
          className="bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Start for free
        </Link>
      </div>
    </header>
  );
}
