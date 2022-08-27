import React from "react";
import DarkSection from "../components/home/dark-section/DarkSection";
import Testimonial from "../components/home/testimonial/Testimonial";
import FAQ from "../components/home/faq/FAQ";
import HeadingText from "../components/home/heading-text/HeadingText";
import Hero from "../components/home/hero/Hero"; 
import Layout from "../components/layout/layout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <HeadingText />
      <DarkSection />
      <Testimonial />
      <FAQ />
    </Layout>
  );
}
