// import Image from "next/image";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import WorkShowcase from "./components/workShowcase";

export default function Home(): JSX.Element {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <WorkShowcase />
      <Footer />
    </main>
  );
}
