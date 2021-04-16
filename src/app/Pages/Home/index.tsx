import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.scss';
import RecommendedTopics from './RecommendedTopics';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <RecommendedTopics />
      <Footer />
    </div>
  );
}
