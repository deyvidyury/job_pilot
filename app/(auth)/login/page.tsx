'use client';

import { signInWithGoogle, signInWithGithub } from '@/actions/auth';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      {/* Two-pane card */}
      <div className="w-full max-w-2xl bg-surface rounded-xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* ── Left pane ── */}
        <div
          className="p-8 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: `linear-gradient(160deg, var(--color-surface) 0%, var(--color-accent-muted) 45%, color-mix(in srgb, var(--color-accent-light) 60%, var(--color-surface)) 100%)`,
          }}
        >
          {/* Soft glow — top right */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, color-mix(in srgb, var(--color-accent) 12%, transparent) 0%, transparent 70%)`,
            }}
          />
          {/* Soft glow — bottom left */}
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            {/* InsForge badge */}
            <div className="inline-flex items-center gap-2 bg-accent-muted border border-accent-light text-accent rounded-full px-3 py-1 mb-8">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.5 7.5 6 9l3.5-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-medium">
                OAuth secured by InsForge
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-text-primary text-2xl font-bold leading-tight mb-3">
              Sign in and let the agent prep your next application.
            </h1>

            {/* Body */}
            <p className="text-text-secondary text-sm leading-relaxed">
              Connect with Google or GitHub to build your profile, match jobs,
              and create application materials — all powered by AI.
            </p>
          </div>

          {/* New user note */}
          <p className="text-text-muted text-xs leading-relaxed mt-8 relative z-10">
            New users are routed to profile setup after sign-in.
          </p>
        </div>

        {/* ── Right pane ── */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-text-primary text-lg font-semibold mb-1.5">
            Welcome to JobPilot
          </h2>
          <p className="text-text-secondary text-sm mb-8">
            Choose your preferred provider to continue.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => signInWithGoogle()}
              className="w-full flex items-center justify-center gap-3 bg-surface border border-border text-text-primary rounded-md px-4 py-2.5 text-sm font-medium hover:bg-surface-secondary transition-colors"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <button
              onClick={() => signInWithGithub()}
              className="w-full flex items-center justify-center gap-3 bg-overlay-dark text-white rounded-md px-4 py-2.5 text-sm font-medium hover:bg-overlay transition-colors"
            >
              <GitHubIcon />
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.349 7.523H9.409v3.16h3.995c-.42 2.065-1.99 3.2-3.995 3.2a4.409 4.409 0 1 1 0-8.817 4.308 4.308 0 0 1 2.935 1.095l2.35-2.35A7.351 7.351 0 0 0 9.409 2a7.409 7.409 0 1 0 7.409 7.409c0-.49-.054-.97-.155-1.432-.053-.122-.194-.306-.314-.454Z"
        fill="#4285F4"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.03 0 0 4.03 0 9c0 3.978 2.578 7.35 6.157 8.537.45.082.615-.195.615-.434 0-.213-.008-.927-.012-1.68-2.505.544-3.033-1.067-3.033-1.067-.41-1.04-1-1.317-1-1.317-.818-.558.062-.547.062-.547.904.063 1.38.928 1.38.928.803 1.376 2.107.978 2.62.748.082-.582.314-.978.572-1.203-2-.227-4.103-1-4.103-4.453 0-.984.352-1.788.928-2.418-.093-.227-.402-1.143.088-2.383 0 0 .756-.242 2.475.924A8.624 8.624 0 0 1 9 3.75c.765.003 1.535.103 2.25.302 1.72-1.166 2.475-.924 2.475-.924.492 1.24.18 2.156.09 2.383.578.63.927 1.434.927 2.418 0 3.462-2.107 4.223-4.112 4.444.323.278.612.828.612 1.668 0 1.204-.01 2.175-.01 2.472 0 .24.162.522.618.433C15.425 16.347 18 12.977 18 9c0-4.97-4.03-9-9-9Z"
      />
    </svg>
  );
}
