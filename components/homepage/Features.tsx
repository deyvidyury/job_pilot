import Image from 'next/image';

type Feature = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: boolean;
};

const features: Feature[] = [
  {
    label: 'Smart Matching',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-5h2v2h-2v-2zm0-8h2v6h-2V5z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'AI Job Matching — 0 to 100',
    description:
      'GPT-4o reads every job description and scores it against your exact skills and experience. See matched skills in green, missing ones in red — instantly know which roles are worth your time.',
    image: '/images/jobs-lists.png',
    imageAlt: 'Job matching list with AI scores',
    accent: false,
  },
  {
    label: 'Company Research',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Full Company Dossier',
    description:
      "One click and our AI agent browses the company's public pages. You get their tech stack, culture signals, why the role exists, and interview prep — before you ever apply.",
    image: '/images/agnet-log.png',
    imageAlt: 'AI agent research log',
    accent: true,
  },
  {
    label: 'Apply Ready',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Apply with Everything Ready',
    description:
      'Your profile becomes a living resume. Generate a professional PDF in one click. Every application comes with a full research package so you walk in knowing more than anyone else.',
    image: '/images/dashboard-demo.png',
    imageAlt: 'Dashboard overview',
    accent: false,
  },
];

export function Features() {
  return (
    <section className="bg-surface py-24 px-8">
      <div className="max-w-360 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Everything you need to land your next role
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            JobPilot handles the entire research and discovery workflow so you
            focus on what matters — preparing and applying.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className={`rounded-xl border overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col ${
                feature.accent
                  ? 'border-accent bg-accent-muted'
                  : 'border-border bg-surface'
              }`}
            >
              {/* Card content */}
              <div className="p-6 flex-1">
                {/* Label + icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      feature.accent
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-accent-muted text-accent'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <span
                    className={`text-xs font-medium uppercase tracking-wide ${
                      feature.accent ? 'text-accent' : 'text-text-secondary'
                    }`}
                  >
                    {feature.label}
                  </span>
                </div>

                <h3 className="text-text-primary font-semibold text-base leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Screenshot preview */}
              <div
                className={`mx-4 mb-0 rounded-t-lg overflow-hidden border border-b-0 ${
                  feature.accent ? 'border-accent-light' : 'border-border'
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={340}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
