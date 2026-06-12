import { redirect } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CompletionIndicator } from '@/components/profile/CompletionIndicator';
import { ResumeUpload } from '@/components/profile/ResumeUpload';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { createInsforgeServer } from '@/lib/insforge-server';

export default async function ProfilePage() {
  const insforge = await createInsforgeServer();
  const {
    data: { user },
  } = await insforge.auth.getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  // TODO: read real profile + completion data from profiles table (06 Profile Save Logic)
  const profileComplete = false;
  const completionPercent = 42;
  const missingFields = ['Phone Number', 'Location', 'Education'];

  // Mock profile data for pre-filling form
  const mockProfile = {
    fullName: 'Alex Johnson',
    email: user.email ?? 'alex@example.com',
    phone: '',
    location: '',
    linkedinUrl: '',
    portfolioUrl: '',
    workAuthorization: '',
    currentTitle: '',
    experienceLevel: '',
    yearsExperience: '',
    skills: ['React', 'TypeScript', 'Node.js'] as string[],
    industries: ['Technology'] as string[],
    workExperience: [
      {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        current: false,
        responsibilities: '',
      },
    ],
    education: {
      degree: '',
      fieldOfStudy: '',
      institution: '',
      graduationYear: '',
    },
    jobTitlesSeeking: [] as string[],
    remotePreference: '',
    salaryExpectation: '',
    preferredLocations: '',
    coverLetterTone: '',
    resumeUrl: '',
  };

  return (
    <>
      <Navbar activePage="profile" user={user} />

      <main className="flex-1 py-8 px-8">
        <div className="max-w-360 mx-auto flex flex-col gap-6">
          {/* Page heading */}
          <div>
            <h1 className="text-text-primary text-2xl font-bold leading-8">
              Profile
            </h1>
            <p className="text-text-secondary text-sm leading-5 mt-1">
              Manage your resume, skills, and job preferences for accurate
              matching.
            </p>
          </div>

          {/* Incomplete profile banner */}
          {!profileComplete && (
            <CompletionIndicator
              completionPercent={completionPercent}
              missingFields={missingFields}
            />
          )}

          {/* Resume upload section */}
          <ResumeUpload resumeUrl={mockProfile.resumeUrl} />

          {/* Profile form */}
          <ProfileForm initialData={mockProfile} />
        </div>
      </main>

      <Footer />
    </>
  );
}
