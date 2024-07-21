"use client"

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scrolls = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0,0.5], ["-8%", "-27%"]);

  const P1y = useTransform(scrollYProgress, [0, 1], [-1, 0]);
  const P1s = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const P2o = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const P2y = useTransform(scrollYProgress, [0,1], [120, 0]);
  const P3s = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const P3y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    <section className="relative mt-20 h-fit overflow-hidden">
      <div className=" flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{ x, scale: P1s, y: P1y }}
          className="flex *:rounded-lg space-x-3  *:-z-10"
        >
          <motion.div
            initial={{ x: -25 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className='w-[40vw] -translate-y- bg-[url("https://assets.playgroundai.com/87d75239-2fe6-4dca-848e-67a7a79fe56c.jpg")] '
          ></motion.div>

          <motion.div
            style={{ opacity: P2o, y: P2y }}
            className='w-[40vw] h-[60vh] bg-[url("https://images.playground.com/0253ecaf73a14485be8cc8c252ecf07a.jpeg")] '
          ></motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{ scale: P3s, y: P3y }}
            className='w-[40vw] h-[60vh] bg-[url("https://images.playground.com/4a7a548964794bbaa23037f124eea5f3.jpeg")] '
          ></motion.div>

          <motion.div
            style={{}}
            className='w-[40vw] h-[60vh] bg-[url("https://images.playground.com/e5ab71ed3c4c40168a07787b2f427392.jpeg")] '
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scrolls;
