import Head from "../components/Head";
import Header from "../components/Header";
import { H1, H2 } from "../components/Typography";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <Head title="Home" />
        <div className={styles.UnderConst}>
          <H1 className={styles.Heading}>🚧 SITE UNDER CONSTRUCTION 🚧</H1>
          <H2>Check back soon for updates!</H2>
        </div>
      </div>
    </div>
  );
};

export default Home;
