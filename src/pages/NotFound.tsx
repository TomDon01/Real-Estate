import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/home/SearchBar";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import StatsSection from "@/components/home/StatsSection";
import WhyInvestSection from "@/components/home/WhyInvestSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import BlogPreview from "@/components/home/BlogPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SearchBar />
      <FeaturedProperties />
      <StatsSection />
      <WhyInvestSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
