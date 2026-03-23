"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch with Capital Cleaning"
      description="Have questions, need a custom quote, or ready to book a service? Fill out the form below, and our friendly team will get back to you promptly."
      inputs={[
        {
          name: "fullName",          type: "text",          placeholder: "Full Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
        {
          name: "phoneNumber",          type: "tel",          placeholder: "Phone Number (Optional)"},
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/offsetting-tape-airport_1127-377.jpg"
      imageAlt="Bright and clean office space"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What areas do you serve?",          content: "Capital Cleaning proudly serves the entire Capital City metropolitan area and surrounding suburbs. Please contact us to confirm service availability in your specific location."},
        {
          id: "2",          title: "Are your cleaning products eco-friendly?",          content: "Yes, we are committed to using eco-friendly and non-toxic cleaning products that are safe for your family, pets, and the environment. We can also accommodate special requests for specific products."},
        {
          id: "3",          title: "How do I book a cleaning service?",          content: "You can easily book a service by filling out the contact form on this page, calling us directly, or sending an email. We'll respond quickly to discuss your needs and schedule your service."},
        {
          id: "4",          title: "What if I need to reschedule or cancel?",          content: "We understand plans can change. Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment to avoid any cancellation fees."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about our cleaning services, scheduling, and payment."
      tag="FAQs"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact-cta" data-section="contact-cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Book Now"
      title="Schedule Your Cleaning Today"
      description="Experience the spotless results and professional service that Capital Cleaning provides. Get your free personalized quote and enjoy a cleaner, healthier space."
      buttons={[
        {
          text: "Request a Quote",          href: "/contact"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Residential Cleaning",              href: "/services"},
            {
              label: "Commercial Cleaning",              href: "/services"},
            {
              label: "Deep Cleaning",              href: "/services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/about"},
            {
              label: "Contact",              href: "/contact"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
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
