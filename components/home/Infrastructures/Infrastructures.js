import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Button from "../../button/Button";

const Infrastructures = ({openModal}) => {
  return (
    <section className="w-full my-12 py-10 px-4 lg:px-20 lg:py-14">
      <div className="flex justify-between flex-col items-center md:flex-row lg:flex-row px-5">
        <div className="w-full">
          <p
            className={`${styles.infrastructure_description}  mb-8 text-2xl leading-relaxed capitalize lg:text-4xl md:w-11/12 lg:w-10/12`}
          >
            Connect our Infrastructure and application for continuous Monitoring
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              name="schedule a free demo"
              styles={styles.infrastructureButton}
              buttonAction={openModal}
            />
          </div>
        </div>
        <div className="w-full mt-8 lg:w-11/12 lg:mt-0">
          <Image src="/infrastructures.svg" alt="infrastructures" width="620" height="600" />
        </div>
      </div>
    </section>
  );
};

export default Infrastructures;
