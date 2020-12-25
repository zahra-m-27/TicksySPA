import React from "react";
import styles from "./styles.module.scss";
import Assets from "../../../../Assets";
import TopicCard from "./TopicCard";
import { useHistory } from "react-router-dom";

export default function Topics() {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div
        className={styles.add_topic}
        onClick={() => history.push("/dashboard/topics/new")}
      >
        <p>افزودن</p>
        <img src={Assets.Images.Add} />
      </div>
      <div className={styles.cards}>
        <TopicCard username="test" />
        <TopicCard username="test" />
        <TopicCard username="test" />
      </div>
    </div>
  );
}
