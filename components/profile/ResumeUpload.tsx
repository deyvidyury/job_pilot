type Props = {
  resumeUrl: string;
};

export function ResumeUpload({ resumeUrl }: Props) {
  const hasResume = resumeUrl.length > 0;

  return (
    <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <h2 className="text-text-primary text-base font-semibold leading-6 mb-5">
        Resume
      </h2>

      {/* Upload area */}
      <div className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        {/* Upload icon */}
        <div className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-muted"
          >
            <path
              d="M12 16V4M12 4L8 8M12 4L16 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-text-primary text-sm font-medium mb-1">
          Click to upload or drag and drop
        </p>
        <p className="text-text-muted text-xs">PDF (MAX. 5MB)</p>

        <button
          type="button"
          className="mt-5 bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors"
        >
          Select Resume
        </button>
      </div>

      {/* Generate resume button */}
      <button
        type="button"
        className="mt-4 w-full bg-surface border border-border text-text-primary rounded-md px-4 py-2.5 text-sm font-medium hover:bg-surface-secondary transition-colors"
      >
        Generate Resume from Profile
      </button>
    </div>
  );
}
