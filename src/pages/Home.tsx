import { Hero } from '../components/Sections/Hero';
import { InstitutionalOverview } from '../components/Sections/InstitutionalOverview';
import { InformationOfficer } from '../components/Sections/InformationOfficer';
import { CampusChiefMessage } from '../components/Sections/CampusChiefMessage';
import { Statistics } from '../components/Sections/Statistics';
import { QuickLinks } from '../components/Sections/QuickLinks';
import { RecentUpdates } from '../components/Sections/RecentUpdates';
import { NoticeBoard } from '../components/Sections/NoticeBoard';
import { GraduateTracer } from '../components/Sections/GraduateTracer';
import { JournalSection } from '../components/Sections/JournalSection';
import { CampusLocation } from '../components/Sections/CampusLocation';

export function Home() {
  return (
    <>
      <Hero />
      <InstitutionalOverview />
      <Statistics />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NoticeBoard />
          </div>
          <div>
            <InformationOfficer />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <CampusChiefMessage />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <QuickLinks />
          <div className="lg:col-span-2">
            <RecentUpdates />
          </div>
        </div>
      </div>
      
      <JournalSection />
      <CampusLocation />
    </>
  );
}