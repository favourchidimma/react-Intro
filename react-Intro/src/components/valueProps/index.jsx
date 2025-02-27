import React from "react";
import styles from "./valueprops.module.css";

const ValuePropCard = ({heading, description, imgUrl, reverse}) => {
  return (
    <div className={reverse ? `${styles.valueCtn} ${styles.reverse}` : `${styles.valueCtn}`}>
      <div className={styles.textCtn}>
        <h2>{heading}</h2>
        <p>
          {description}
        </p>
      </div>
      <div className={styles.imgCtn}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default ValuePropCard;
