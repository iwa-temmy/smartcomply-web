import styles from "../../../styles/Home.module.css";
import { auditsProcesses } from "../../../data";
//Components

import Image from "next/image";
import Button from "../../button/Button";
const AuditProcess = ({ openModal }) => {
  return (
    <section>
      <div className="bg-primary py-9 px-8 lg:px-20">
        <div className="container">
          <h3 className="mt-4 mb-16 text-center text-2xl font-medium text-white">
            Simplify your audit process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:p-6 lg:justify-items-center lg:mb-5">
            {auditsProcesses?.map(process => {
              return (
                <div
                  className="border-2 h-80 rounded-2xl p-4 md:max-h-max lg:px-8 lg:py-1 lg:h-64"
                  key={process?.id}
                >
                  <div className="mt-0">
                    <Image
                      src={process?.image}
                      alt={process?.name}
                      width="300"
                      height="100"
                    />
                  </div>
                  <p className="font-medium text-white">
                    {process?.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center my-16">
            <Button
              name="schedule a free demo"
              styles={styles?.button}
              buttonAction={openModal}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-4 mb-7 text-center uppercase">Audit Partners</h3>
        <div className="flex items-center justify-center flex-row">
          <div>
            <Image
              src="/infoprive-logo.svg"
              width={180}
              height={100}
              alt="infoprive"
            />
          </div>
          <div>
            <Image
              src="/techhive-logo.svg"
              width={180}
              height={100}
              alt="techhive"
            />
          </div>
          <div>
            <Image
              src="/platview-logo.svg"
              width={180}
              height={100}
              alt="platview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditProcess;
