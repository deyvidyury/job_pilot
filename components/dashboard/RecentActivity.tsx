type Activity = {
  id: string;
  message: string;
  time: string;
  type: 'success' | 'info' | 'warning';
};

const activities: Activity[] = [
  {
    id: '1',
    message: "Found 12 new jobs matching 'Frontend Engineer'",
    type: 'info',
    time: '2 hours ago',
  },
  {
    id: '2',
    message: 'Researched Stripe — company dossier ready',
    type: 'success',
    time: '5 hours ago',
  },
  {
    id: '3',
    message: "Found 8 jobs matching 'React Developer'",
    type: 'info',
    time: '1 day ago',
  },
  {
    id: '4',
    message: 'Researched Vercel — company dossier ready',
    type: 'success',
    time: '1 day ago',
  },
  {
    id: '5',
    message: 'Profile updated — new skills added',
    type: 'warning',
    time: '2 days ago',
  },
];

const dotColors: Record<Activity['type'], string> = {
  success: 'bg-success',
  info: 'bg-info',
  warning: 'bg-warning',
};

export function RecentActivity() {
  return (
    <div className="bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <h2 className="text-text-primary text-base font-semibold leading-6 mb-5">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-text-muted text-sm">
          No recent activity yet. Start by finding jobs or completing your
          profile.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-start gap-3">
              <div
                className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotColors[activity.type]}`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium leading-5">
                  {activity.message}
                </p>
                <p className="text-text-muted text-xs leading-4 mt-0.5">
                  {activity.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
