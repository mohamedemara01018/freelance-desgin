
import Navbar from '@/components/layout/freelancer/navbar/Navbar';
import Footer from '@/components/layout/freelancer/footer/Footer';
import HeroSection from '@/components/features/profile/HeroSection';
import StatsSection from '@/components/features/profile/StatsSection';
import OverviewSection from '@/components/features/profile/OverviewSection';
import PortfolioSection from '@/components/features/profile/PortfolioSection';
import EmploymentEducationSection from '@/components/features/profile/EmploymentEducationSection';
import StatisticsSection from '@/components/features/profile/StatisticsSection';
import SidebarSection from '@/components/features/profile/SidebarSection';



export default function FreelancerProfile() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-8">
          <OverviewSection />
          <PortfolioSection />
          <EmploymentEducationSection />
          <StatisticsSection />
        </div>
        <SidebarSection />
      </div>
    </>
  );
}