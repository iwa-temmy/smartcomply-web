//Components
import Image from "next/image";
import Button from "../../button/Button";
import { motion } from "framer-motion";

import { auditsProcesses, auditPartners } from "data";
// style
import styles from "styles/Home.module.css";

const AuditProcess = ({ openModal }) => {
  return (
    <section className="bg-primary">
      <div className="py-9 px-8 lg:px-20">
        <div className="container">
          <motion.h3
            className="mt-4 mb-16 lg:mb-6 text-center text-2xl font-semibold text-white"
            initial={{ opacity: 0, x: "-5vw" }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              type: "tween",
              duration: 0.8
            }}
          >
            Simplify your audit process
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:p-10 lg:justify-items-center lg:mb-5">
            {auditsProcesses?.map((process, index) => {
              return (
                <motion.div
                  className={`${styles.auditCard} text-base lg:text-xl border rounded-2xl p-4 md:max-h-max lg:px-8 lg:py-1 `}
                  key={process?.id}
                  initial={{ opacity: 0, x: "5vw" }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.8,
                    delay: (0.3 * index) / 2
                  }}
                >
                  <div className="mt-0">
                    <Image
                      src={process?.image}
                      alt={process?.name}
                      width="300"
                      height="100"
                    />
                  </div>
                  <p className="font-medium text-white pb-10">
                    {process?.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="flex justify-center my-16 font-semibold"
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              type: "spring",
              duration: 0.8,
              bounce: 0.5
            }}
          >
            <Button
              name="schedule a free demo"
              styles={styles?.button}
              buttonAction={openModal}
            />
          </motion.div>
        </div>
      </div>
      <div className={`${styles.auditPartners} py-5`}>
        <motion.h3
          className="mb-7 text-center uppercase text-white font-semibold"
          initial={{ opacity: 0, x: "-5vw" }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            type: "tween",
            duration: 0.8
          }}
        >
          Audit Partners
        </motion.h3>
        <div className="flex items-center justify-center flex-wrap">
          {auditPartners.map(partner => (
            <motion.div
              key={partner.id}
              className="mx-3"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                type: "spring",
                duration: 0.8,
                bounce: 0.5
              }}
            >
              <Image
                src={partner.image}
                width={180}
                height={100}
                alt={partner.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditProcess;
