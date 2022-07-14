import Button from "../../button/Button";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <main className={`${styles.hero} px-8 lg:px-20 -mt-1`}>
      <div className="flex items-center flex-col py-5 lg:flex-row lg:py-12">
        <div className="w-full lg:w-11/12">
          <div className="text-white text-3xl lg:text-4xl my-14 text-relaxed">
            <h2 className="my-6">Faster Compliance</h2>
            <h2>For Smart Businesses</h2>
          </div>
          <p className="text-white text-lg my-10 lg:my-14">
            Make your ongoing compliance operations more efficient,
            cost-effective and easier with our simple but powerful compliance
            automation solution
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button name="schedule a free demo" styles={styles.button}/>
          </div>
        </div>
        <div className="w-full">
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
