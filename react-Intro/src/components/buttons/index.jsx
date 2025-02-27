import React from "react";
import styles from "./buttons.module.css";

const Buttons = ({ label, primary }) => {
  return (
    <>
      {primary ? (
        <button className={`${styles.btn} ${styles.primaryBtn}`}>
          {label} <span className={styles.arrow}> &#62; </span>
        </button>
      ) : (
        <button className={`${styles.secondaryBtn} ${styles.btn}`}>
          {label}
        </button>
      )}
    </>
  );
};

export default Buttons;

// if(type === "primary"){
//     return(
//     <button className={styles.btn}>
//         {label} <span className={styles.arrow}> &#62; </span>
//     </button>
//     )
// }

{
  /* {type === "primary" && (
        <button className={`${styles.btn} ${styles.primaryBtn}`}>
          {label} <span className={styles.arrow}> &#62; </span>
        </button>
      )}

      {type === "secondary" && (
        <button className={`${styles.secondaryBtn} ${styles.btn}`}>{label}</button>
      )} */
}
