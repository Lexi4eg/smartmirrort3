"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
          return prevProgress;
        }
        return Math.min(prevProgress + 10, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-4 w-full rounded bg-gray-200">
      <motion.div
        className="h-full rounded bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${progress}%` }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default ProgressBar;
