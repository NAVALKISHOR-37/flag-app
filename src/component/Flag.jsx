import React from "react";
import styles from "./Flag.module.css"; // Import the CSS module

export const Flag = () => {
  return (

    <div className={styles.step}>
      <div className={styles.gol}>g</div>
      <div className={styles.flag}>
        <div className={styles.f1}></div>
        <div className={styles.f2}>
          <div className={styles.f2}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/767/958/original/ashok-chakra-logo-ashok-chakra-icon-transparent-free-png.png"
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.f3}></div>
      </div>
      <div className={styles.pipe}></div>
      <div className={styles.step1}></div>
      <div className={styles.step2}></div>
      <div className={styles.step3}></div>
    </div>
  );
};
