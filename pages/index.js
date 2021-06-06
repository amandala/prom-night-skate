import Head from "../components/Head";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <Head title="Home" />
        <Gallery />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
