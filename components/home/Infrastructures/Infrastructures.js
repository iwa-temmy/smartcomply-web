import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Button from "../../button/Button";

const Infrastructures = () => {
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
            />
          </div>
        </div>
        <div className="w-full mt-8 lg:w-11/12 lg:mt-0">
          {/* <div className="flex justify-between items-end lg:flex-row">
            <div className="p-5 border h-32 rounded-2xl shadow-xl shadow-gray-400">
              <Image src="/aws-logo.svg" alt="Aws" width={100} height={80} />
            </div>
            <div className="p-5 border mt-4 h-32 rounded-2xl shadow-xl shadow-gray-400 lg:mt-0">
              <Image
                src="/gcp-logo.svg"
                alt="Google Cloud"
                width={100}
                height={80}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-9">
              <div className="p-5 border h-32 rounded-2xl shadow-xl shadow-gray-400">
                <Image
                  src="/digital-ocean-logo.svg"
                  alt="Aws"
                  width={100}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-9 items-end lg:flex-row">
            <div className="p-5 border h-32 rounded-2xl shadow-xl shadow-gray-400">
              <Image
                src="/github-logo.svg"
                alt="Github"
                width={100}
                height={80}
              />
            </div>
            <div className="p-5 border mt-4 h-32 rounded-2xl shadow-xl shadow-gray-400 lg:mt-0">
              <Image
                src="/azure-logo.svg"
                alt="Azure"
                width={100}
                height={80}
              />
            </div>
          </div> */}
          <Image src="/infrastructures.svg" alt="infrastructures" width="620" height="600" />
        </div>
      </div>
    </section>
  );
};

export default Infrastructures;
