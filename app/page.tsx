import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/homepage/Hero';
import { HowItWorks } from '@/components/homepage/HowItWorks';
import { Features } from '@/components/homepage/Features';

const testimonials = [
  {
    quote:
      'JobPilot saved me hours every week. Instead of manually reading 50 job descriptions, I get a scored shortlist with company research ready to go.',
    name: 'Alex Torres',
    role: 'Senior Frontend Engineer',
    avatar: '/images/user-icon.png',
  },
  {
    quote:
      'The company research agent is incredible. I walked into every interview knowing the tech stack, culture, and exactly why the role was open.',
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    avatar: '/images/user-icon.png',
  },
  {
    quote:
      'I went from dreading job searching to actually enjoying it. The AI match scores are surprisingly accurate — I only apply to roles I have a real shot at.',
    name: 'Marcus Bell',
    role: 'Backend Engineer',
    avatar: '/images/user-icon.png',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* How It Works */}
        <HowItWorks />

        {/* Features */}
        <Features />

        {/* Testimonials */}
        <section className="bg-background py-24 px-8">
          <div className="max-w-360 mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
                Testimonials
              </p>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                What developers are saying
              </h2>
              <p className="text-text-secondary text-base max-w-xl mx-auto">
                JobPilot is already helping developers spend less time searching
                and more time landing offers.
              </p>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col gap-5"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 1L9.8 5.8L15 6.3L11.2 9.7L12.4 15L8 12.4L3.6 15L4.8 9.7L1 6.3L6.2 5.8L8 1Z"
                          fill="#FF8904"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-text-dark text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-text-primary text-sm font-medium">
                        {t.name}
                      </p>
                      <p className="text-text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-overlay py-24 px-8">
          <div className="max-w-360 mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to land your next job?
            </h2>
            <p className="text-info-muted text-base max-w-lg mx-auto mb-10">
              Join developers who are using AI to cut their job search time in
              half and walk into every interview fully prepared.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/login"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                Start for Free
              </Link>
              <Link
                href="#how-it-works"
                className="border border-white/20 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
