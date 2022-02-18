import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="bg" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES! THE BEST BAKED SLICE OF PIZZA IN THE 6IX.
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            123 Front Street
            <br /> Toronto,
            <br /> Ontario,
            <br /> Canada
            <br /> (555) 123-1221
          </p>
          <p className={styles.text}>
            123 Fake Street
            <br /> Toronto,
            <br /> Ontario,
            <br /> Canada
            <br /> (555) 123-1221
          </p>
          <p className={styles.text}>
            123 Bake Street
            <br /> Toronto,
            <br /> Ontario,
            <br /> Canada
            <br /> (555) 123-1221
          </p>
          <p className={styles.text}>
            123 Slice Street
            <br /> Toronto,
            <br /> Ontario,
            <br /> Canada
            <br /> (555) 123-1221
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
