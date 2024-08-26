 
import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import Categories from "./Categories";
import SkillsSection from "./SkillsSection";
import CoursesSection from "./CoursesSection";
import GrowthSection from "./GrowthSection";
import PlansSection from "./PlansSection";
import CallToAction from "./CallToAction";
import Footer from "@/app/components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-48 bg-neutral-800 max-md:pb-24">
      <Header />
      <main>
        <Hero />
        <Categories />
        <SkillsSection />
        <CoursesSection />
        <GrowthSection />
        <PlansSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
