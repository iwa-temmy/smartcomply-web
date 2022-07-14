import styles from "../../../styles/Home.module.css";
import Image from "next/image";
export default function HowItWorks() {
  return (
    <section className={`${styles.how_it_works} px-8 lg:py-12 lg:px-20`}>
      <p className="text-center">How It Works</p>
      <div className="my-12">
        <article className="flex justify-between items-center flex-col lg:flex-row">
          <div className="w-full my-10">
            <Image
              src="/onboarding.svg"
              alt="onboarding"
              width="500"
              height="350"
            />
          </div>
          <div className="w-full lg:w-11/12">
            <h2 className="capitalize text-3xl my-5">Get Onboarded</h2>
            <p className="w-10/12">
              With SMARTCOMPLY'S technical compliance advisors, you can enjoy
              seamless onboarding and pre-audit of your infrastructure for FREE.
              This one time support helps you acquainted with the platform
              through a hand-held process by our advisors.
            </p>
          </div>
        </article>
        <article className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="w-11/12">
            <h2 className="capitalize text-3xl my-5">
              Connect Your Technology Stack
            </h2>
            <p className="w-full lg:w-10/12">
              Integrate all your technology stack into SMARTCOMPLY and allow the
              platform continuously monitor your infrastructure and collect
              evidence for compliance
            </p>
          </div>
          <div className="w-full my-10">
            <Image
              src="/technology.svg"
              alt="onboarding"
              width="450"
              height="300"
            />
          </div>
        </article>
        <article className="flex justify-between items-center flex-col lg:flex-row">
          <div className="w-full my-10">
            <Image
              src="/server-status.svg"
              alt="onboarding"
              width="550"
              height="350"
            />
          </div>
          <div className="w-full lg:w-11/12">
            <h2 className="capitalize text-3xl my-5">
              Track The Status Of Your Compliance
            </h2>
            <p className="w-full lg:w-10/12">
              SMARTCOMPLY tracks the status of your compliance and security
              posture by continuously mapping all scans and evidence to all
              compliance regulations
            </p>
          </div>
        </article>
        <article className="flex justify-between flex-col-reverse items-center lg:flex-row">
          <div className="w-full lg:w-11/12">
            <h2 className="capitalize text-3xl my-5">Get Notified Of Audit</h2>
            <p className="w-full lg:w-10/12">
              With SMARTCOMPLY'S technical compliance advisors, you can enjoy
              seamless onboarding and pre-audit of your infrastructure for FREE.
              This one time support helps you acquainted with the platform
              through a hand-held process by our advisors.
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
    </section>
  );
}
