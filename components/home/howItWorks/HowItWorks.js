import styles from "../../../styles/Home.module.css";
import Image from "next/image";
export default function HowItWorks() {
  return (
    <section
      className={`${styles.how_it_works} p-8 font-semibold lg:py-12 lg:px-20`}
    >
      <div data-aos="fade-down">
        <p className="text-center">How It Works</p>
        <div className="my-12">
          <article className="flex justify-between items-center flex-col md:flex-row">
            <div className="w-full my-10">
              <Image
                src="/onboarding.svg"
                alt="onboarding"
                width="500"
                height="350"
              />
            </div>
            <div className="w-full lg:pl-10">
              <h2 className="capitalize text-2xl md:text-3xl my-5 font-medium">
                Get Onboarded
              </h2>
              <p className="w-full lg:w-[90%]">
                With SMARTCOMPLY&apos;S technical compliance advisors, you can
                enjoy seamless onboarding and pre-audit of your infrastructure
                for FREE. This one time support helps you acquainted with the
                platform through a hand-held process by our advisors.
              </p>
            </div>
          </article>
          <article className="flex justify-between items-center flex-col-reverse md:flex-row">
            <div className="w-11/12 md: w-full">
              <h2 className="capitalize text-2xl md:text-3xl my-5 font-medium">
                Connect Your <br /> Technology Stack
              </h2>
              <p className="w-full lg:w-[90%]">
                Integrate all your technology stack into SMARTCOMPLY and allow
                the platform continuously monitor your infrastructure and
                collect evidence for compliance
              </p>
            </div>
            <div className="w-full my-10">
              <Image
                src="/technology.svg"
                alt="onboarding"
                width="450"
                height="200"
                layout="responsive"
              />
            </div>
          </article>
          <article className="flex justify-between items-center flex-col md:flex-row">
            <div className="w-full my-10">
              <Image
                src="/server-status.svg"
                alt="onboarding"
                width="550"
                height="350"
              />
            </div>
            <div className="w-full lg:w-[90%]">
              <h2 className="capitalize text-2xl md:text-3xl my-5 font-medium">
                Track The Status Of Your Compliance
              </h2>
              <p className="w-full lg:w-10/12">
                SMARTCOMPLY tracks the status of your compliance and security
                posture by continuously mapping all scans and evidence to all
                compliance regulations
              </p>
            </div>
          </article>
          <article className="flex justify-between flex-col-reverse items-center md:flex-row">
            <div className="w-full lg:w-11/12">
              <h2 className="capitalize text-2xl md:text-3xl my-5 font-medium">
                Get Notified Of Audit
              </h2>
              <p className="w-full lg:w-10/12">
                With access to numerous partner auditors, based on your
                compliance status, smart comply tells you which audit you are
                ready for and manages your audit timeline.
              </p>
            </div>
            <div className="w-full my-10">
              <Image
                src="/audit-notification.svg"
                alt="onboarding"
                width="600"
                height="350"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
