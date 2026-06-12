'use client';

import { signInWithGoogle, signInWithGithub } from '@/actions/auth';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      <div className="bg-surface rounded-xl border border-border p-8 w-full max-w-sm shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <h1 className="text-text-primary text-xl font-semibold text-center mb-2">
          Welcome to JobPilot
        </h1>
        <p className="text-text-secondary text-sm text-center mb-8">
          Sign in to start finding your next role
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
