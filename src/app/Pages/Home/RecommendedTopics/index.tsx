import Topic from "./Topic";
import Assets from "../../../Assets";
import styles from "./styles.module.scss";

export default function RecommendedTopics() {
  const topics = new Array(6).fill({
    icon: Assets.Images.TopicIcon,
    badge: Assets.Images.TopicBadge,
    title: "لورم اپسیوم متن ساختگی",
    description: "نیاز و کاربردهای متنوع با هدف بهبود ابزار کاربردی میباشد",
  });

  return (
    <div className={styles.main}>
      <h2 className={styles.main_title}>تاپیک های پیشنهادی</h2>
      <div className={styles.topic_container}>
        {topics.map((topic) => (
          <Topic
            icon={topic.icon}
            title={topic.title}
            badge={topic.badge}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
}
