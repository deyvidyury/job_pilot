import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Find Jobs', href: '/find-jobs' },
    { label: 'Profile', href: '/profile' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-360 mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Your AI co-pilot for landing your next job. Find, match, and apply
              — fully prepared.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-text-primary text-sm font-semibold mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} JobPilot. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with AI. Designed for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
