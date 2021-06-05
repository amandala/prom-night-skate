import Head from "../components/Head";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import { H1 } from "../components/Typography";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <Head title="Home" />
        <div className={styles.Tagline}>
          <H1 className={styles.Tag}>Empowering girls through boardsports</H1>
        </div>
        <Gallery />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
