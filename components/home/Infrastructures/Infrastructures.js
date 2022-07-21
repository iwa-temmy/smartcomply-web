import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Button from "../../button/Button";
import InfraCard from "./InfraCard";
import { motion } from "framer-motion";

const Infrastructures = ({ openModal }) => {
  return (
    <section className="container w-full my-12 py-20 lg:py-28">
      <div className="flex justify-between flex-col items-start lg:flex-row lg:flex-row px-5">
        <div className="mb-10 mx-auto">
          <motion.h2
            className={`primary-text mb-5 text-3xl text-center capitalize lg:text-left lg:text-5xl max-w-xl font-extrabold lg:leading-tight lg:mb-12`}
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect Your Infrastructure & application for continuous Monitoring
          </motion.h2>
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              name="schedule a free demo"
              styles={styles.infrastructureButton}
              buttonAction={openModal}
            />
          </motion.div>
        </div>
        <div className=" mt-8 lg:mt-0 grid ">
          <InfraRow>
            <InfraCard image="/googlecloud.svg" index={0.5} />
          </InfraRow>
          <InfraRow>
            <InfraCard image="/digitalocean.svg" index={1} />
            <InfraCard image="/aws.svg" index={1.5} />
          </InfraRow>
          <InfraRow>
            <InfraCard image="/jira.svg" index={2} />
            <InfraCard image="/github.svg" index={2.5} />
            <InfraCard image="/azure.svg" index={3} />
          </InfraRow>
        </div>
      </div>
    </section>
  );
};

const InfraRow = props => {
  const { children } = props;
  return (
    <div className="flex flex-wrap justify-center align-center lg:justify-end ">
      {children}
    </div>
  );
};

export default Infrastructures;
