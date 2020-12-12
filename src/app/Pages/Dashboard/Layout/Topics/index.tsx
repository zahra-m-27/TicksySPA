import React from "react";
import styles from "./styles.module.scss";
import Assets from "../../../../Assets";
import TopicCard from "./TopicCard";

export default function Topics() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </div>
    </div>
  );
}
