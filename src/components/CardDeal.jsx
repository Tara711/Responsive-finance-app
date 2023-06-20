import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          consectetur aut sed ullam vitae, tempore molestiae voluptates eligendi
          totam dicta placeat! Itaque id temporibus esse, nostrum necessitatibus
          possimus vero illo suscipit aliquam consectetur ipsam commodi tempore
          dignissimos assumenda provident ad quae nulla. Ab modi neque
          voluptates cupiditate iste, tenetur facere.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
