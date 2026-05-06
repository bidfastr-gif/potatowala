import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EnquirySection } from "@/components/EnquirySection";
import { Categories } from "@/components/Categories";
import { AboutSection } from "@/components/AboutSection";
import { StatisticsBanner } from "@/components/StatisticsBanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import pattern from "@/assets/food-pattern.jpg";

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${pattern})`,
                            backgroundSize: "auto",
                            backgroundRepeat: "repeat",
                        }}
                    />
                </div>
                <div className="relative z-10">
                    <Hero />
                    <EnquirySection />
                    <Categories />
                    <AboutSection />
                    <StatisticsBanner />
                    <WhyChooseUs />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
