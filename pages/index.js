import Head from "../components/Head";
import { Body } from "../components/Typography";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.Main}>
      <Head title="Home" />
      <Body>Hi</Body>
    </div>
  );
};

export default Home;
