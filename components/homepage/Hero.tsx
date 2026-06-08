import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-surface pt-20 pb-0 px-8 overflow-hidden">
      <div className="max-w-360 mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent-muted border border-accent-light text-accent rounded-full px-4 py-1.5 text-sm font-medium">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z"
                fill="currentColor"
              />
            </svg>
            <span>AI-Powered Job Hunting</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl font-bold text-text-primary leading-tight mb-6 max-w-3xl mx-auto">
          Find, Match &amp; Apply to Jobs —{' '}
          <span className="text-accent">with AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Set up your profile once. JobPilot discovers jobs from Adzuna, scores
          each one against your skills with GPT-4o, and researches every company
          so you arrive at every application fully prepared.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <Link
            href="/login"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            Get Started for Free
          </Link>
          <Link
            href="/find-jobs"
            className="bg-surface border border-border text-text-primary px-6 py-3 rounded-md text-sm font-medium hover:bg-surface-secondary transition-colors"
          >
            Find Your First Match
          </Link>
        </div>

        {/* Dashboard Screenshot */}
        <div className="relative mx-auto max-w-5xl rounded-t-xl overflow-hidden border border-border border-b-0 shadow-[0_8px_40px_rgba(124,92,252,0.12)]">
          {/* Browser chrome bar */}
          <div className="bg-surface-tertiary border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error opacity-60" />
            <div className="w-3 h-3 rounded-full bg-warning opacity-60" />
            <div className="w-3 h-3 rounded-full bg-success opacity-60" />
            <div className="ml-4 flex-1 bg-surface rounded px-3 py-1 text-xs text-text-muted">
              jobpilot.app/dashboard
            </div>
          </div>
          <Image
            src="/images/dashboard-demo.png"
            alt="JobPilot Dashboard"
            width={1200}
            height={700}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
