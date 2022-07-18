import Button from "../../button/Button";
import styles from "styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <main className={`${styles.hero} flex items-center justify-center`}>
      <div className="container flex items-center flex-col py-10 md:py-5 lg:flex-row lg:py-12 px-4">
        <div className="w-full lg:w-11/12 text-center lg:text-left ">
          <motion.h2
            className="max-w-lg text-white text-3xl lg:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: "-10vh" },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            Faster Compliance For Smart Businesses
          </motion.h2>
          <motion.p
            className="text-white font-normal text-base  mt-6 mb-2 lg:mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: "-5vh" },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Make your ongoing compliance operations more efficient,
            cost-effective and easier with our simple but powerful compliance
            automation solution
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: "-5vh" },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button name="schedule a free demo" styles={styles.button} />
          </motion.div>
        </div>
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: "10vh" },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero.svg"
            width="1000"
            height="900"
            alt="SmartcomplyApp Dashboard"
            layout="responsive"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
