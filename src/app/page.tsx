"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Capital Cleaning"
      button={{
        text: "Get a Free Quote",        href: "/contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "radial-gradient"}}
      title="Capital Cleaning: Spotless Results Every Time"
      description="Dedicated to providing top-tier cleaning services for homes and businesses. Experience the difference with our professional and reliable team."
      buttons={[
        {
          text: "Get a Free Quote",          href: "/contact"},
        {
          text: "View Services",          href: "/services"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cleaning-products-arrangement-flat-lay_23-2148883455.jpg?_wi=1",          imageAlt: "Sparkling clean modern kitchen"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sensual-woman-lying-bed_23-2147778896.jpg",          imageAlt: "Organized bathroom"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-colleagues-with-face-masks-waving-while-greeting-someone-conference-call-office_637285-11052.jpg",          imageAlt: "Professional office cleaning"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-while-holding-cleaning-product_23-2148465038.jpg",          imageAlt: "Eco-friendly cleaning supplies"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-holding-smartphone_23-2149345537.jpg",          imageAlt: "Clean bedroom interior"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cleaning-concept-young-woman-holding-cleaning-tools-kitchen_231208-560.jpg",          imageAlt: "Bright sunlit room"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Capital Cleaning"
      description={[
        "We are a local cleaning company committed to excellence and customer satisfaction. With years of experience, our skilled team uses eco-friendly products to ensure a healthy and sparkling environment for your home or office.",        "Our mission is to make your life easier by taking care of the dirty work, giving you back precious time to focus on what matters most."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Residential Cleaning",          description: "Keep your home sparkling clean with our regular, deep, or move-in/move-out cleaning options, customized to your schedule.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-gardening-indoors_23-2148509861.jpg?_wi=1",          imageAlt: "Residential cleaning"},
        {
          id: 2,
          title: "Commercial Cleaning",          description: "Ensure a healthy and professional environment for your business with our tailored cleaning plans for offices, retail, and more.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-teacher-disinfecting-school-benches-classroom_23-2148848243.jpg?_wi=1",          imageAlt: "Commercial cleaning"},
        {
          id: 3,
          title: "Deep Cleaning",          description: "For those times your space needs extra attention, our deep cleaning service tackles every nook and cranny for a truly pristine finish.",          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-man-doing-house-chores_23-2151733030.jpg?_wi=1",          imageAlt: "Deep cleaning"},
      ]}
      title="Our Professional Cleaning Services"
      description="From routine maintenance to deep cleaning, we offer a wide range of services tailored to meet your specific needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Homeowner",          testimonial: "Capital Cleaning transformed my home! Their team is thorough, professional, and always leaves my house looking immaculate. Highly recommend!",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-natural-pretty-woman-with-curly-hairstyle_285396-4322.jpg?_wi=1"},
        {
          id: "2",          name: "Michael T.",          role: "Office Manager",          testimonial: "Our office has never been cleaner. Capital Cleaning provides consistent, high-quality service, and they are very accommodating to our business hours.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-cheerfully-casually-pointing-copy-space-side-feeling-happy-satisfied_1194-631901.jpg?_wi=1"},
        {
          id: "3",          name: "Emily R.",          role: "Property Manager",          testimonial: "I've used Capital Cleaning for multiple properties, and they always deliver exceptional results. Their deep cleaning service is unmatched!",          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg?_wi=1"},
        {
          id: "4",          name: "David K.",          role: "Retail Business Owner",          testimonial: "Reliable, efficient, and friendly! Capital Cleaning keeps my store pristine, which makes a huge difference for my customers.",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-smiling-young-handsome-bearded-wild-curly-hair-man-with-bright-blue-eyes-isolated-white-background-young-thinking-man-green-tshirt-white-background_549566-955.jpg?_wi=1"},
      ]}
      title="What Our Clients Say"
      description="Hear from satisfied customers who trust Capital Cleaning for their residential and commercial cleaning needs."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "City Bank",        "Gourmet Eats",        "Tech Solutions",        "Green Grocers",        "Metro Properties",        "Fitness Hub",        "Art Gallery"]}
      logos={[
        "http://img.b2bpic.net/free-vector/bank-service-concept-facebook-cover-template_23-2150459652.jpg",        "http://img.b2bpic.net/free-vector/restaurant-logo_1114-262.jpg",        "http://img.b2bpic.net/free-vector/gradient-technology-logo-template-collection_23-2148220978.jpg",        "http://img.b2bpic.net/free-vector/healthy-food-card-collection-with-flat-design_23-2147848503.jpg",        "http://img.b2bpic.net/free-vector/gradient-accounting-logo-template_23-2148854302.jpg",        "http://img.b2bpic.net/free-vector/set-fitness-badges-vintage-style_23-2147814213.jpg",        "http://img.b2bpic.net/free-vector/gradient-printing-house-logo-design-template_23-2149857389.jpg"]}
      title="Trusted by Leading Businesses"
      description="We've proudly partnered with various local businesses to maintain immaculate workspaces."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Ready for a Spotless Space?"
      description="Get your personalized cleaning quote today! Our team is ready to transform your environment with our professional services."
      imageSrc="http://img.b2bpic.net/free-photo/offsetting-tape-airport_1127-377.jpg?_wi=1"
      imageAlt="Clean and bright office space"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Request a Quote"
      termsText="By clicking Request a Quote you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Services",              href: "/services"},
            {
              label: "About Us",              href: "/about"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "/contact"},
            {
              label: "FAQ",              href: "/faq"},
            {
              label: "Blog",              href: "/blog"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Capital Cleaning"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
