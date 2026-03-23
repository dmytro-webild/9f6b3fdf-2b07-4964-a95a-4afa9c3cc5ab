"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

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
          name: "Home",
          id: "home",
          href: "/",
        },
        {
          name: "Services",
          id: "services",
          href: "/services",
        },
        {
          name: "About Us",
          id: "about",
          href: "/about",
        },
        {
          name: "Contact",
          id: "contact",
          href: "/contact",
        },
      ]}
      brandName="Capital Cleaning"
      button={{
        text: "Get a Free Quote",
        href: "/contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Residential Cleaning",
          description: "Keep your home sparkling with our flexible and thorough residential cleaning packages, designed for your comfort.",
          tag: "Homes",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-gardening-indoors_23-2148509861.jpg",
          imageAlt: "residential cleaning happy home",
        },
        {
          id: "2",
          title: "Commercial Cleaning",
          description: "Maintain a pristine and productive workspace with our professional commercial cleaning solutions for businesses of all sizes.",
          tag: "Offices",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-teacher-disinfecting-school-benches-classroom_23-2148848243.jpg",
          imageAlt: "commercial office cleaning team",
        },
        {
          id: "3",
          title: "Deep Cleaning Services",
          description: "For an unparalleled level of clean, our deep cleaning service tackles every nook and cranny, leaving your space immaculate.",
          tag: "Specialized",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-man-doing-house-chores_23-2151733030.jpg",
          imageAlt: "deep cleaning service spotless bathroom",
        },
      ]}
      title="Our Professional Cleaning Services"
      description="Capital Cleaning offers a comprehensive range of services tailored to meet your needs, ensuring every space is impeccably clean and fresh."
      tag="Our Expertise"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_j",
          testimonial: "Capital Cleaning transformed my home! It's never been so clean, and their team is always so professional and friendly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-natural-pretty-woman-with-curly-hairstyle_285396-4322.jpg",
          imageAlt: "Sarah J. photo",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@mchen",
          testimonial: "Reliable and efficient commercial cleaning. Our office always looks impeccable, which is great for client impressions.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-cheerfully-casually-pointing-copy-space-side-feeling-happy-satisfied_1194-631901.jpg",
          imageAlt: "Michael Chen photo",
        },
        {
          id: "3",
          name: "Emily R.",
          handle: "@emily.r",
          testimonial: "The deep cleaning service was incredible. They paid attention to every detail, and my apartment feels brand new!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg",
          imageAlt: "Emily R. photo",
        },
        {
          id: "4",
          name: "David L.",
          handle: "@davidl",
          testimonial: "Exceptional service from start to finish. Booking was easy, and the results exceeded my expectations. Highly recommend!",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-smiling-young-handsome-bearded-wild-curly-hair-man-with-bright-blue-eyes-isolated-white-background-young-thinking-man-green-tshirt-white-background_549566-955.jpg",
          imageAlt: "David L. photo",
        },
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear from satisfied customers who trust Capital Cleaning for their homes and businesses, experiencing the difference we make."
      tag="Testimonials"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get Started"
      title="Ready for a Spotless Space?"
      description="Schedule your professional cleaning service today and experience the Capital Cleaning difference for yourself."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Residential Cleaning",
              href: "/services",
            },
            {
              label: "Commercial Cleaning",
              href: "/services",
            },
            {
              label: "Deep Cleaning",
              href: "/services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Capital Cleaning. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
