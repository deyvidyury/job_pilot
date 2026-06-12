'use client';

import { useState } from 'react';

type WorkExperience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string;
};

type ProfileData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  portfolioUrl: string;
  workAuthorization: string;
  currentTitle: string;
  experienceLevel: string;
  yearsExperience: string;
  skills: string[];
  industries: string[];
  workExperience: WorkExperience[];
  education: {
    degree: string;
    fieldOfStudy: string;
    institution: string;
    graduationYear: string;
  };
  jobTitlesSeeking: string[];
  remotePreference: string;
  salaryExpectation: string;
  preferredLocations: string;
  coverLetterTone: string;
};

type Props = {
  initialData: ProfileData;
};

const EXPERIENCE_LEVELS = [
  'Entry Level',
  'Junior',
  'Mid-Level',
  'Senior',
  'Lead',
  'Manager',
  'Director',
  'Executive',
];

const DEGREES = [
  'High School',
  'Associate',
  'Bachelor',
  'Master',
  'PhD',
  'Bootcamp',
  'Self-taught',
];

const REMOTE_PREFERENCES = ['Remote Only', 'Hybrid', 'On-site', 'Flexible'];

const COVER_LETTER_TONES = [
  'Professional',
  'Enthusiastic',
  'Confident',
  'Humble',
  'Creative',
];

const WORK_AUTHORIZATIONS = [
  'Authorized in US',
  'Authorized in EU',
  'Authorized in UK',
  'Authorized in Canada',
  'Requires Sponsorship',
  'Authorized Worldwide',
];

export function ProfileForm({ initialData }: Props) {
  const [form, setForm] = useState<ProfileData>(initialData);
  const [skillInput, setSkillInput] = useState('');
  const [industryInput, setIndustryInput] = useState('');
  const [jobTitleInput, setJobTitleInput] = useState('');

  const updateField = <K extends keyof ProfileData>(
    key: K,
    value: ProfileData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateEducation = (
    key: keyof ProfileData['education'],
    value: string,
  ) => {
    setForm((prev) => ({
      ...prev,
      education: { ...prev.education, [key]: value },
    }));
  };

  const updateWorkExperience = (
    index: number,
    key: keyof WorkExperience,
    value: string | boolean,
  ) => {
    setForm((prev) => {
      const updated = [...prev.workExperience];
      updated[index] = { ...updated[index], [key]: value };
      return { ...prev, workExperience: updated };
    });
  };

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !form.skills.includes(trimmed)) {
      setForm((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    }
    setSkillInput('');
  };

  const removeSkill = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const addIndustry = () => {
    const trimmed = industryInput.trim();
    if (trimmed && !form.industries.includes(trimmed)) {
      setForm((prev) => ({
        ...prev,
        industries: [...prev.industries, trimmed],
      }));
    }
    setIndustryInput('');
  };

  const removeIndustry = (industry: string) => {
    setForm((prev) => ({
      ...prev,
      industries: prev.industries.filter((i) => i !== industry),
    }));
  };

  const addJobTitle = () => {
    const trimmed = jobTitleInput.trim();
    if (trimmed && !form.jobTitlesSeeking.includes(trimmed)) {
      setForm((prev) => ({
        ...prev,
        jobTitlesSeeking: [...prev.jobTitlesSeeking, trimmed],
      }));
    }
    setJobTitleInput('');
  };

  const removeJobTitle = (title: string) => {
    setForm((prev) => ({
      ...prev,
      jobTitlesSeeking: prev.jobTitlesSeeking.filter((t) => t !== title),
    }));
  };

  const addWorkRole = () => {
    if (form.workExperience.length >= 3) return;
    setForm((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          company: '',
          title: '',
          startDate: '',
          endDate: '',
          current: false,
          responsibilities: '',
        },
      ],
    }));
  };

  const removeWorkRole = (index: number) => {
    setForm((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  const inputClass =
    'w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors';
  const labelClass = 'block text-text-dark text-sm font-medium mb-1.5';
  const sectionClass =
    'border-t border-border pt-6 mt-6 first:border-t-0 first:pt-0 first:mt-0';
  const sectionTitleClass =
    'text-text-primary text-sm font-semibold leading-5 mb-4';

  return (
    <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <h2 className="text-text-primary text-base font-semibold leading-6 mb-6">
        Profile Information
      </h2>

      {/* ── Personal Info ── */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Personal Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Your full name"
              value={form.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={`${inputClass} bg-surface-secondary text-text-muted cursor-not-allowed`}
              value={form.email}
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Location</label>
            <input
              type="text"
              className={inputClass}
              placeholder="City, State"
              value={form.location}
              onChange={(e) => updateField('location', e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>LinkedIn URL</label>
            <input
              type="url"
              className={inputClass}
              placeholder="https://linkedin.com/in/yourprofile"
              value={form.linkedinUrl}
              onChange={(e) => updateField('linkedinUrl', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Portfolio / GitHub</label>
            <input
              type="url"
              className={inputClass}
              placeholder="https://github.com/yourusername"
              value={form.portfolioUrl}
              onChange={(e) => updateField('portfolioUrl', e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Work Authorization</label>
          <select
            className={inputClass}
            value={form.workAuthorization}
            onChange={(e) => updateField('workAuthorization', e.target.value)}
          >
            <option value="">Select authorization status</option>
            {WORK_AUTHORIZATIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Professional Info ── */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Professional Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Current Job Title</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. Senior Frontend Engineer"
              value={form.currentTitle}
              onChange={(e) => updateField('currentTitle', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Experience Level</label>
            <select
              className={inputClass}
              value={form.experienceLevel}
              onChange={(e) => updateField('experienceLevel', e.target.value)}
            >
              <option value="">Select experience level</option>
              {EXPERIENCE_LEVELS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Years of Experience</label>
          <input
            type="number"
            className={inputClass}
            placeholder="e.g. 5"
            value={form.yearsExperience}
            onChange={(e) => updateField('yearsExperience', e.target.value)}
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className={labelClass}>Skills</label>
          <div className="flex gap-2">
            <input
              type="text"
              className={inputClass}
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addSkill();
                }
              }}
            />
            <button
              type="button"
              onClick={addSkill}
              className="bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors shrink-0"
            >
              + Add
            </button>
          </div>
          {form.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {form.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 bg-success-lightest text-success-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-error transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Industries */}
        <div>
          <label className={labelClass}>Industries</label>
          <div className="flex gap-2">
            <input
              type="text"
              className={inputClass}
              placeholder="Add an industry"
              value={industryInput}
              onChange={(e) => setIndustryInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addIndustry();
                }
              }}
            />
            <button
              type="button"
              onClick={addIndustry}
              className="bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors shrink-0"
            >
              + Add
            </button>
          </div>
          {form.industries.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {form.industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center gap-1 bg-info-lightest text-info-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {industry}
                  <button
                    type="button"
                    onClick={() => removeIndustry(industry)}
                    className="hover:text-error transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Work Experience ── */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Work Experience</h3>
        {form.workExperience.map((role, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-4 mb-4 last:mb-0"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-text-primary text-sm font-medium">
                Role {index + 1}
              </span>
              {form.workExperience.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeWorkRole(index)}
                  className="text-text-muted hover:text-error transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 4v8H6V4m4 0H6m4 0l-.8-1.6A.5.5 0 008.7 2H7.3a.5.5 0 00-.5.4L6 4m4 0H6m-2 0h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Stripe"
                  value={role.company}
                  onChange={(e) =>
                    updateWorkExperience(index, 'company', e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Job Title</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Senior Frontend Engineer"
                  value={role.title}
                  onChange={(e) =>
                    updateWorkExperience(index, 'title', e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Start Date</label>
                <input
                  type="month"
                  className={inputClass}
                  value={role.startDate}
                  onChange={(e) =>
                    updateWorkExperience(index, 'startDate', e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>End Date</label>
                <input
                  type="month"
                  className={inputClass}
                  value={role.endDate}
                  disabled={role.current}
                  onChange={(e) =>
                    updateWorkExperience(index, 'endDate', e.target.value)
                  }
                />
              </div>
            </div>
            <label className="flex items-center gap-2 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={role.current}
                onChange={(e) =>
                  updateWorkExperience(index, 'current', e.target.checked)
                }
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="text-text-secondary text-sm">
                Currently working here
              </span>
            </label>
            <div>
              <label className={labelClass}>Key Responsibilities</label>
              <textarea
                className={inputClass}
                rows={3}
                placeholder="Describe your key responsibilities and achievements"
                value={role.responsibilities}
                onChange={(e) =>
                  updateWorkExperience(
                    index,
                    'responsibilities',
                    e.target.value,
                  )
                }
              />
            </div>
          </div>
        ))}
        {form.workExperience.length < 3 && (
          <button
            type="button"
            onClick={addWorkRole}
            className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
          >
            + Add Role
          </button>
        )}
      </div>

      {/* ── Education ── */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Highest Degree</label>
            <select
              className={inputClass}
              value={form.education.degree}
              onChange={(e) => updateEducation('degree', e.target.value)}
            >
              <option value="">Select degree</option>
              {DEGREES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Field of Study</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. Computer Science"
              value={form.education.fieldOfStudy}
              onChange={(e) => updateEducation('fieldOfStudy', e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Institution Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. MIT"
              value={form.education.institution}
              onChange={(e) => updateEducation('institution', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Graduation Year</label>
            <input
              type="number"
              className={inputClass}
              placeholder="e.g. 2020"
              value={form.education.graduationYear}
              onChange={(e) =>
                updateEducation('graduationYear', e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* ── Job Preferences ── */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>Job Preferences</h3>

        {/* Job Titles Seeking */}
        <div className="mb-4">
          <label className={labelClass}>Job Titles Seeking</label>
          <div className="flex gap-2">
            <input
              type="text"
              className={inputClass}
              placeholder="Add a job title"
              value={jobTitleInput}
              onChange={(e) => setJobTitleInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addJobTitle();
                }
              }}
            />
            <button
              type="button"
              onClick={addJobTitle}
              className="bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors shrink-0"
            >
              + Add
            </button>
          </div>
          {form.jobTitlesSeeking.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {form.jobTitlesSeeking.map((title) => (
                <span
                  key={title}
                  className="inline-flex items-center gap-1 bg-accent-muted text-accent rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {title}
                  <button
                    type="button"
                    onClick={() => removeJobTitle(title)}
                    className="hover:text-error transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Remote Preference</label>
            <select
              className={inputClass}
              value={form.remotePreference}
              onChange={(e) => updateField('remotePreference', e.target.value)}
            >
              <option value="">Select preference</option>
              {REMOTE_PREFERENCES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Salary Expectation</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. $120,000 - $150,000"
              value={form.salaryExpectation}
              onChange={(e) => updateField('salaryExpectation', e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Preferred Locations</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. Remote, New York, San Francisco"
              value={form.preferredLocations}
              onChange={(e) =>
                updateField('preferredLocations', e.target.value)
              }
            />
          </div>
          <div>
            <label className={labelClass}>Cover Letter Tone</label>
            <select
              className={inputClass}
              value={form.coverLetterTone}
              onChange={(e) => updateField('coverLetterTone', e.target.value)}
            >
              <option value="">Select tone</option>
              {COVER_LETTER_TONES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Save Button ── */}
      <div className="border-t border-border pt-6 mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-accent text-accent-foreground rounded-md px-6 py-2.5 text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}
