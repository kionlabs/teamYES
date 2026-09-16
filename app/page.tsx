import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import TeacherShowcase from '@/components/TeacherShowcase';
import VideoSection from '@/components/VideoSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <TeacherShowcase />
        <VideoSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
