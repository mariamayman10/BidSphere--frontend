import HeroSection from "./heroSection";
import CategoriesSection from "./categoriesSection";
import LiveAuctionsSection from "./liveAuctionsSection";
import UpcomingAuctionsSection from "./upcomingAuctionsSection";
import HowItWorksSection from "./howItWorksSection";
import TestimonialsSection from "./testimonialsSection";

function Home() {
  return (
    <div className="home-page min-h-screen">
      <HeroSection/>
      <CategoriesSection/>
      <LiveAuctionsSection/>
      <UpcomingAuctionsSection/>
      <HowItWorksSection/>
      <TestimonialsSection/>
    </div>
  );
}

export default Home;
