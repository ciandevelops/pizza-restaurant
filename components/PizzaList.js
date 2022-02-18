import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TORONTO</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        possimus inventore voluptas nostrum architecto aperiam iure dolores
        dolor nobis illo optio ab, eveniet repellat magni. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Aperiam possimus magnam
        obcaecati, exercitationem ratione atque doloribus dicta corporis
        voluptatum ea eveniet animi fugit blanditiis repellendus!
      </p>

      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
