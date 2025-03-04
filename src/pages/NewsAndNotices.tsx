import { PageHeader } from '../components/common/PageHeader';
import { NoticeBoard } from '../components/Sections/NoticeBoard';
import { RecentUpdates } from '../components/Sections/RecentUpdates';

export function NewsAndNotices() {
  return (
    <div>
      <PageHeader
        title="News & Notices"
        subtitle="Stay updated with the latest announcements and events"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NoticeBoard />
          </div>
          <div>
            <RecentUpdates />
          </div>
        </div>
      </div>
    </div>
  );
}