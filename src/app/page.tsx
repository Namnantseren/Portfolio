// import Image from "next/image";
"use client";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import WorkShowcase from "./components/workShowcase";
import { CldImage, getCldImageUrl } from "next-cloudinary";

export default function Home(): JSX.Element {
  return (
    <main
      className="bg-black"
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/djkb0iudu/image/upload/v1722754353/overlay)",
      // }}
    >
      <Header />
      <HeroSection />
      <WorkShowcase />
      <Footer />
    </main>
  );
}
