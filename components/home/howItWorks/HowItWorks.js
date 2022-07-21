import styles from "../../../styles/Home.module.css";
import { steps } from "data";
import StepItem from "./StepItem";
import { useRef } from "react";

export default function HowItWorks() {
  const container = useRef();
  return (
    <section className={`${styles.how_it_works} relative pr-3`} ref={container}>
      <div className={`${styles.parallaxScroller} lg:py-12`}>
        <header className="w-full absolute z-20 top-0 left-0 w-full backdrop-blur-md text-center py-8">
          <h3 className="text-3xl text-white uppercase font-semibold">
            How It Works
          </h3>
        </header>
        <div className=" text-white py-20 container">
          {steps.map(step => (
            <StepItem
              image={step.image}
              title={step.title}
              description={step.description}
              index={step.id}
              key={step.id}
              container={container.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
