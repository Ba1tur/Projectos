import React from "react";
import { useEffect, useState } from "react";
import s from "./Preoader.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  const textAnimation = {
    hiddenTop: {
      y: -200,
      opacity: 0,
    },
    hiddenBottom: {
      y: 200,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1000 },
    }),
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  return loading ? (
    <div className={s.preloader}>
      <div className={s.preloader_loader}></div>
      <motion.div
        variants={textAnimation}
        initial="hiddenTop"
        whileInView="visible"
        className={s.preloader_logo}
      >
        <Image src="/generalLogo.png" width={200} height={55} alt="generalLogo" />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial="hiddenTop"
        whileInView="visible"
        className={s.preloader_left_cloud}
      >
        <Image src="/leftCloud.png" width={370} height={290} alt="leftCloud" />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial="hiddenBottom"
        whileInView="visible"
        className={s.preloader_right_cloud}
      >
        <Image src="/rightCloud.png" width={370} height={290} alt="leftCloud" />
      </motion.div>
    </div>
  ) : null;
};

export default Preloader;
