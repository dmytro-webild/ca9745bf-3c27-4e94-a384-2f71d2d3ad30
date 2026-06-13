"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Droplet, Grid, Heart, Shield, Sparkles, Star, User, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Treatments",          id: "#treatments"},
        {
          name: "Results",          id: "#results"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Clear Smile Dental"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient"}}
      title="Your Brightest Smile Starts Here"
      description="At Clear Smile Dental Clinic, we combine expert care with a gentle touch to give you a healthy, radiant smile. Experience dentistry designed for your comfort."
      tag="Trusted Dental Care in Pune"
      buttons={[
        {
          text: "Book an Appointment",          href: "#contact"},
        {
          text: "Explore Services",          href: "#services"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-dentist-writing-report_107420-74191.jpg",          imageAlt: "Dentist examining a patient's teeth"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-talking-female-patient_107420-73976.jpg",          imageAlt: "Happy woman with a bright smile"},
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="5.0 rating based on 200+ reviews"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Clear Smile Dental: Caring for Your Health & Happiness"
      metrics={[
        {
          icon: Star,
          label: "Years of Experience",          value: "15+"},
        {
          icon: Users,
          label: "Happy Patients",          value: "5000+"},
        {
          icon: Heart,
          label: "Treatments Offered",          value: "20+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBorderGlow
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      features={[
        {
          icon: Star,
          title: "General Dentistry",          description: "Routine check-ups, cleanings, fillings, and preventive care to maintain optimal oral health for your entire family."},
        {
          icon: Sparkles,
          title: "Cosmetic Dentistry",          description: "Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic treatments tailored to your desires."},
        {
          icon: Grid,
          title: "Orthodontics",          description: "Correct misaligned teeth and bite issues with traditional braces or discreet clear aligners for a perfectly straight smile."},
        {
          icon: Droplet,
          title: "Oral Surgery",          description: "Expert care for extractions, wisdom teeth removal, dental implants, and other surgical procedures with comfort in mind."},
        {
          icon: Shield,
          title: "Periodontics",          description: "Specialized treatment for gum disease, including deep cleanings, scaling, root planing, and gum graft procedures."},
        {
          icon: User,
          title: "Pediatric Dentistry",          description: "Gentle and comprehensive dental care for children, focusing on preventive treatments and creating positive dental experiences."},
      ]}
      title="Our Comprehensive Dental Services"
      description="From routine check-ups to advanced cosmetic procedures, we offer a full spectrum of dental care to meet all your needs under one roof."
    />
  </div>

  <div id="treatments" data-section="treatments">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      animationType="slide-up"
      products={[
        {
          id: "p1",          name: "Dental Implants",          price: "Starting at ₹25,000",          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-3d-illustration-dental-implant-inside-jawbone_183364-123704.jpg",          imageAlt: "Dental implant model",          rating: 5,
        },
        {
          id: "p2",          name: "Root Canal Treatment",          price: "Starting at ₹7,000",          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-scared-dental-check-up_107420-74158.jpg",          imageAlt: "Root canal treatment diagram",          rating: 4,
        },
        {
          id: "p3",          name: "Professional Whitening",          price: "Starting at ₹8,000",          imageSrc: "http://img.b2bpic.net/free-photo/young-female-patient-bed-physiotherapy-center_1139-1121.jpg",          imageAlt: "Professional teeth whitening kit",          rating: 5,
        },
        {
          id: "p4",          name: "Dental Crowns",          price: "Starting at ₹6,000",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fashion-woman-red-lips-big-smile_1150-14158.jpg",          imageAlt: "Dental crown on a tooth model",          rating: 5,
        },
        {
          id: "p5",          name: "Composite Fillings",          price: "Starting at ₹1,500",          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-receiving-dental-treatment_107420-65506.jpg",          imageAlt: "Composite dental filling",          rating: 4,
        },
        {
          id: "p6",          name: "Clear Aligners",          price: "Starting at ₹50,000",          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-orthodontic-silicone-invisible-braces_107420-74181.jpg",          imageAlt: "Invisible braces aligners",          rating: 5,
        },
      ]}
      title="Our Popular Dental Treatments"
      description="Explore our most sought-after treatments, meticulously performed by our experienced dental professionals using advanced techniques."
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "m1",          value: "98%",          description: "Patient Satisfaction Rate"},
        {
          id: "m2",          value: "15+",          description: "Years of Excellence"},
        {
          id: "m3",          value: "5000+",          description: "Successful Smiles"},
        {
          id: "m4",          value: "A++",          description: "Hygiene Standards"},
      ]}
      title="Our Commitment to Your Oral Health"
      description="Dedicated to providing exceptional dental care, our clinic focuses on delivering outstanding results and a comfortable experience for every patient."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Clear Smile Dental Clinic transformed my smile! The team is incredibly professional and caring. I always feel comfortable and confident in their hands. Highly recommend for anyone in Pune!"
      rating={5}
      author="Priya Sharma"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-businesswoman-smiling-happy-standing-city_839833-16454.jpg",          alt: "Priya Sharma"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-confident-male-employee-white-collar-shirt-smiling-camera-standing-selfassured-agai_1258-112592.jpg",          alt: "Rohan Mehta"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-brunette-model-dressed-summer-hipster-jacket-jeans-clothes-trendy-girl-sitting-bench-street_158538-1671.jpg",          alt: "Anjali Deshmukh"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg",          alt: "Sameer Khan"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-elegant-elderly-woman-wearing-stylish-clothes-isolated_273609-34699.jpg",          alt: "Geeta Patil"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What are your clinic hours?",          content: "Our clinic is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays."},
        {
          id: "faq2",          title: "Do you accept new patients?",          content: "Yes, we are always happy to welcome new patients to Clear Smile Dental Clinic! Please contact us to schedule your first appointment."},
        {
          id: "faq3",          title: "What payment methods do you accept?",          content: "We accept cash, major credit/debit cards, and UPI payments. We also offer various payment plans for extensive treatments."},
        {
          id: "faq4",          title: "Is parking available at your clinic?",          content: "Yes, ample parking is available in Vithai Plaza for our patients' convenience. We are located at Vadacha Stop, Karvenagar."},
        {
          id: "faq5",          title: "How often should I visit the dentist?",          content: "We recommend a dental check-up and cleaning every six months to maintain optimal oral health and prevent issues."},
        {
          id: "faq6",          title: "Do you offer emergency dental services?",          content: "For dental emergencies, please call our clinic directly. We will do our best to accommodate you as soon as possible."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our clinic, services, appointments, and what to expect during your visit."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch with Clear Smile Dental"
      description="Schedule your appointment today or reach out with any questions. We look forward to welcoming you!"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: false,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message or Inquiry",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/building-with-modern-design_1127-2284.jpg"
      imageAlt="Exterior of Clear Smile Dental Clinic"
      mediaAnimation="slide-up"
      mediaPosition="left"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Clear Smile Dental"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
