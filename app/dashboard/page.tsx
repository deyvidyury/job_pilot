import { redirect } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatsBar } from '@/components/dashboard/StatsBar';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts';
import { IncompleteProfileBanner } from '@/components/dashboard/IncompleteProfileBanner';
import { createInsforgeServer } from '@/lib/insforge-server';

export default async function DashboardPage() {
  const insforge = await createInsforgeServer();
  const {
    data: { user },
  } = await insforge.auth.getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const isProfileComplete = false; // TODO: check profiles table after 04 Database Schema

  return (
    <>
      <Navbar activePage="dashboard" user={user} />

      <main className="flex-1 py-8 px-8">
        <div className="max-w-360 mx-auto flex flex-col gap-6">
          {/* Page heading */}
          <div>
            <h1 className="text-text-primary text-2xl font-bold leading-8">
              Dashboard
            </h1>
            <p className="text-text-secondary text-sm leading-5 mt-1">
              Welcome back{user.email ? `, ${user.email}` : ''}. Here&apos;s
              your job search overview.
            </p>
          </div>

          {/* Incomplete profile banner */}
          {!isProfileComplete && <IncompleteProfileBanner />}

          {/* Stats bar */}
          <StatsBar />

          {/* Activity + Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <RecentActivity />
            </div>
            <div className="lg:col-span-2">
              <AnalyticsCharts />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
