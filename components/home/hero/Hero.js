import Button from "../../button/Button";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
const Hero = ({openModal}) => {
  return (
    <main className={`${styles.hero} px-8 lg:px-20 -mt-1`}>
      <div className="flex items-center flex-col py-0 md:py-5 lg:flex-row lg:items-center lg:py-12">
        <div className="w-full lg:w-11/12">
          <div className="text-white text-3xl md:text-4xl text-center md:text-5xl md:font-semibold my-8 md:my-14 text-relaxed lg:text-left">
            <h2 className="my-5 md:my-6">Faster Compliance</h2>
            <h2>For Smart Businesses</h2>
          </div>
          <p className="text-white text-base mb-5 lg:text-lg my-10 lg:my-14">
            Make your ongoing compliance operations more efficient,
            cost-effective and easier with our simple but powerful compliance
            automation solution
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button name="schedule a free demo" styles={styles.button} buttonAction={openModal}/>
          </div>
        </div>
        <div className="w-full -ml-10">
          <Image
            src="/hero.svg"
            width="1000"
            height="900"
            alt="SmartcomplyApp Dashboard"
            layout="responsive"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
