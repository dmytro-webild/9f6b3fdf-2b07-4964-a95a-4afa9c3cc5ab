"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { Users } from "lucide-react";

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

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="About Capital Cleaning: Our Commitment to Cleanliness"
      description="Capital Cleaning was founded on the principle of delivering exceptional cleanliness with a steadfast commitment to customer satisfaction and eco-friendly practices. We believe a clean environment contributes significantly to a healthier, happier life, and we strive to provide that for every client."
      tag="Our Story"
      bulletPoints={[
        {
          title: "Experienced Professionals",
          description: "Our team consists of highly trained and experienced cleaning specialists dedicated to delivering spotless results.",
          icon: Users,
        },
        {
          title: "Eco-Friendly Approach",
          description: "We prioritize the health of our clients and the planet by using environmentally safe and sustainable cleaning products.",
          icon: Leaf,
        },
        {
          title: "Customized Cleaning Plans",
          description: "Every space is unique, so we offer tailored cleaning solutions that perfectly fit your specific needs and schedule.",
          icon: ClipboardCheck,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cleaning-products-arrangement-flat-lay_23-2148883455.jpg?_wi=2"
      imageAlt="Sparkling clean modern kitchen"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "1",
          name: "Elena Rodriguez",
          role: "Lead Cleaning Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-natural-pretty-woman-with-curly-hairstyle_285396-4322.jpg?_wi=3",
          imageAlt: "Elena Rodriguez",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "Operations Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-cheerfully-casually-pointing-copy-space-side-feeling-happy-satisfied_1194-631901.jpg?_wi=3",
          imageAlt: "Marcus Thorne",
        },
        {
          id: "3",
          name: "Sophia Lee",
          role: "Client Relations",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg?_wi=3",
          imageAlt: "Sophia Lee",
        },
      ]}
      title="Meet Our Dedicated Team"
      description="Our professional cleaners are thoroughly vetted, highly trained, and passionate about creating pristine environments for our clients."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Trusted for Quality and Reliability"
      tag="Our Impact"
      metrics={[
        {
          id: "1",
          value: "10+",
          description: "Years of experience in professional cleaning services",
        },
        {
          id: "2",
          value: "98%",
          description: "Customer satisfaction rate across all services",
        },
        {
          id: "3",
          value: "500+",
          description: "Happy homes and offices cleaned monthly",
        },
      ]}
      metricsAnimation="slide-up"
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
