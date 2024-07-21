"use client";

import Bg from "@components/Bg";
import CTA from "@components/CTA";
import Scrolls from "@components/Eg";
import Features from "@components/Features";
import Hero from "@components/Hero";
import React, { useRef } from "react";

const Home = () => {
  const targetRef = useRef();
  return (
    <section className="main">
      <div ref={targetRef} className="main">
        <Hero />
        <Scrolls targetRef={targetRef} />
      </div>
      <Features />
      <Bg />
      <CTA />
    </section>
  );
};

export default Home;
