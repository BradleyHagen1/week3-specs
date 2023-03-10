import React from "react";
import styles from "./Detail.module.css";
import moreStyles from '../homeComponents/Home.module.css'

const DetailImage = ({ image, title }) => {
  const backgroundString = `--background: url(${image})`
  return (
    <div
      className={moreStyles.ad_banner}
  
    style={{backgroundString}}
    >
      <div className={styles.ad_text}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;
