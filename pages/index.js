import Head from "../components/Head";
import { Body } from "../components/Typography";
import Header from "../components/Header";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <Head title="Home" />
      </div>
    </div>
  );
};

export default Home;
