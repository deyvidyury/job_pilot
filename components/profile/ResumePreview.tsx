type Props = {
  resumeUrl: string;
};

export function ResumePreview({ resumeUrl }: Props) {
  if (!resumeUrl) return null;

  return (
    <div className="mt-4 border border-border rounded-lg overflow-hidden">
      <div className="bg-surface-secondary border-b border-border px-4 py-2 flex items-center justify-between">
        <span className="text-text-primary text-sm font-medium">
          Current Resume
        </span>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-xs font-medium hover:text-accent-dark transition-colors"
        >
          View PDF
        </a>
      </div>
      <div className="p-4 flex items-center gap-3">
        {/* PDF icon */}
        <div className="w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M11 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H14C14.5523 18 15 17.5523 15 17V6L11 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 2V6H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-text-primary text-sm font-medium">resume.pdf</p>
          <p className="text-text-muted text-xs">
            Uploaded resume — used for AI profile extraction
          </p>
        </div>
      </div>
    </div>
  );
}
