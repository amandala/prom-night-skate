
import Prismic from "prismic-javascript";
import Nav from "../../components/Nav";
import { H1, Body, BodyExtraSmall } from "../../components/Typography";
import { Client } from "../../prismic-configuration.js";
import styles from './index.module.scss';

const Home = ({ updates }) => {

  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.HeaderContent}>
          <img className={styles.Logo} src="/promnightupdates.svg" alt="Prom Night Updates"/>
        </div>
      </div>
      <Nav />
      <div className={styles.Content}>
        {
          updates.map(update => {
            return (
              <div key={update.data.slugs}>
                <div className={styles.Title}>
                  <H1 >{update.data.title}</H1>
                  <BodyExtraSmall className={styles.Title}>{update.first_publication_date}</BodyExtraSmall>
                </div>
                <div className={styles.Update}>
                  <div className={styles.Info}>
                  {update.data.info.map(detail => (
                    <Body key={detail.text}>{detail.text}</Body>
                  ))}
                  </div>
                  <div className={styles.ImageWrapper}>
                    <img 
                      className={styles.Image} 
                      src={update.data.image.url} 
                      alt={update.data.image.alt} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps(ctx) {
  const req = ctx.req;
  

  const updates = await Client(req)
    .query(Prismic.Predicates.at("document.type", "update"), {
      orderings: "[my.update.released desc]",
      pageSize: 1000
    })
    .then(function (response) {
      return response;
      // response is the response object, response.results holds the documents
    });

  return {
    props: { updates: updates.results },
  };
}
