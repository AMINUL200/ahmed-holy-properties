import React from "react";
import HeroSection from "../../component/landing_page/HeroSection";
import ServiceSection from "../../component/landing_page/ServiceSection";
import AboutSection from "../../component/landing_page/AboutSection";
import WhyChooseUs from "../../component/landing_page/WhyChooseUs";
import TestimonialsSection from "../../component/landing_page/TestimonialsSection";
import BookingSection from "../../component/landing_page/BookingSection";
import PageHelmet from "../../component/common/PageHelmet";
import PageLoading from "../../component/common/PageLoading";

const LandingPage = () => {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


if(loading){
  return <PageLoading/>
}

  return (
    <>
      <PageHelmet title="Home | Ahmed Holy Properties - Trusted Property Services" />

      <div>
        {/* Section 1 : Hero Section */}
        <HeroSection />

        {/* Section 2 : Service Section */}
        <ServiceSection />

        {/* Section 3 : About Section */}
        <AboutSection />

        {/* Section 4 : Why Choose Us Section */}
        <WhyChooseUs />

        {/* Section 5 : Testimonials Section */}
        <TestimonialsSection />

        {/* Section 6 : Booking Section */}
        <BookingSection />
      </div>
    </>
  );
};

export default LandingPage;
