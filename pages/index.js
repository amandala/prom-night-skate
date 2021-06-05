import Head from "../components/Head";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <Head title="Home" />

        <Gallery />
      </div>
    </div>
  );
};

export default Home;
