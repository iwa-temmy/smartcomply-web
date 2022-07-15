import { useEffect } from "react";
//Styles
import styles from "../../../styles/Home.module.css";
//Components
import Image from "next/image";
import Glide from "@glidejs/glide";
import Button from "../../button/Button";
import { motion } from "framer-motion";
const Features = ({openModal}) => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      startAt: 0,
      perView: 4,
      gap: 30,
      autoplay: 900,
      breakpoints: {
        600: {
          perView: 3,
        },
      },
    });
    glide.update({
      rewindDuration: 0,
      autoplay: 2500,
    });
    glide.mount();
  }, []);
  return (
    <section className="px-8 py-8 font-semibold lg:px-20" >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true}}
      >
        <p className={`${styles.infrastructure_description} text-center`}>
          Fast-growing brands that trust us
        </p>
        <div className="relative w-full">
          <div className="glide">
            <div
              className="glide__track"
              data-glide-el="track"
              data-glide-dir="{pattern}"
            >
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Image
                    src="/simplify-logo.svg"
                    alt="simplify"
                    width="150"
                    height="100"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/appzone-logo.svg"
                    alt="appzone"
                    width="150"
                    height="100"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/pennytree-logo.svg"
                    alt="pennytree"
                    width="150"
                    height="100"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/3line-logo.svg"
                    alt="3line"
                    width="150"
                    height="100"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/swiftend-logo.svg"
                    alt="swiftend"
                    width="150"
                    height="100"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/dashboard.svg"
            alt="SmartcomplyApp dashboard"
            width="800"
            height="600"
          />
        </div>
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="w-full lg:w-11/12 lg:mr-10">
            <p
              className={`${styles.infrastructure_description} my-8 text-lg lg:text-xl`}
            >
              Your all-in-one compliance solution suite helping you consolidate
              your compliance process end-to-end at a very affordable rate with
              monthly spaced payment.
            </p>
            <p className={`my-8 text-lg lg:text-xl font-semibold`}>
              Find out why smart businesses trust us
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                name="schedule a free demo"
                styles={styles?.infrastructureButton}
                buttonAction={openModal}
              />
            </div>
          </div>
          <div className="w-11/12">
            <Image
              src="/features.svg"
              width="700"
              alt="features"
              height="500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
