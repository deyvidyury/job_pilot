type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Create your profile',
    description:
      'Fill out your profile or upload your existing resume. GPT-4o extracts all your information automatically — skills, experience, preferences.',
  },
  {
    number: '02',
    title: 'Run AI job discovery',
    description:
      'Enter a job title and location. JobPilot calls Adzuna to find real openings, then GPT-4o scores each one 0–100 against your profile.',
  },
  {
    number: '03',
    title: 'Review your matches',
    description:
      'See every job with a match score, matched skills in green, and missing skills in red. Decide which roles are worth your time in seconds.',
  },
  {
    number: '04',
    title: 'Research &amp; apply',
    description:
      'Trigger company research with one click. Our AI agent browses the company site and builds a full dossier so you walk in fully prepared.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 px-8">
      <div className="max-w-360 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            How JobPilot Works
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            From profile setup to application-ready in four steps. No more
            wasted hours on the wrong jobs.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (not last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-6 h-px bg-border z-10" />
              )}

              <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] h-full">
                {/* Step number */}
                <div className="w-14 h-14 rounded-xl bg-accent-muted border border-accent-light flex items-center justify-center mb-5">
                  <span className="text-accent font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-text-primary font-semibold text-base mb-2">
                  {step.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
