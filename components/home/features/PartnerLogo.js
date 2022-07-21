import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const PartnerLogo = props => {
  const { src, alt, animationDelay } = props;

  // hooks
  const animationRef = useRef();
  const animationControl = useAnimation();

  // functions
  const handleCardAnimation = entries => {
    const entry = entries[0];
    const inView = entry.isIntersecting;

    if (inView) {
      animationControl.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.8,
          delay: 0.3 * animationDelay
        }
      });
    } else {
      const y = entry?.boundingClientRect?.y > 0 ? "5vh" : "-5vh";
      animationControl.start({
        y,
        x: "5vw",
        opacity: 0,
        transition: { type: "tween" }
      });
    }
  };

  useEffect(() => {
    // intersection observer
    const animationObserver = new IntersectionObserver(handleCardAnimation, {});
    animationObserver.observe(animationRef.current);
  }, []);

  return (
    <motion.div
      className="mx-5"
      animate={animationControl}
      ref={animationRef}
      initial={{ x: "5vw", y: "5vh", opacity: 0 }}
    >
      <Image src={src} alt={alt} width="150" height="100" />
    </motion.div>
  );
};

export default PartnerLogo;
