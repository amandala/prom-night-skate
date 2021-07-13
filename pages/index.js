import Header from "../components/Header";
//import Prismic from "prismic-javascript";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Perks from "../components/Perks";
import Nav from "../components/Nav";
import Head from '../components/Head';
import { Client } from "../prismic-configuration.js";

const Home = ({ home }) => {

  return (
    <div>
      <Head title="Prom Night Girls Home" />
      <div>
        <Header
          event={{
            date: home.data.event_date,
            title: home.data.event_name,
            description: home.data.event_description[0].text,
          }}
        />
        <Nav />
        <Gallery />
        <Perks />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps(ctx) {
  const req = ctx.req;
  const home = await Client(req).getSingle("home-page");

  // const stories = await Client(req)
  //   .query(Prismic.Predicates.at("document.type", "article"), {
  //     orderings: "[my.article.released desc]",
  //   })
  //   .then(function (response) {
  //     return response;
  //     // response is the response object, response.results holds the documents
  //   });

  return {
    props: { home },
  };
}
