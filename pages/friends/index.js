
import Prismic from "prismic-javascript";
import Nav from "../../components/Nav";
import { H1, Body, BodyExtraSmall } from "../../components/Typography";
import Link from 'next/link';
import { Client } from "../../prismic-configuration.js";
import styles from './index.module.scss';

const Friends = ({ friends }) => {

  console.log(friends);

  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.HeaderContent}>
          <img className={styles.Logo} src="/promnightfriends.svg" alt="Prom Night Updates"/>
        </div>
      </div>
      <Nav />
      <div className={styles.Content}>
        {
          friends.map(friend => {
            return (
              <a className={styles.FriendWrapper} target="_blank" rel="noreferrer" href={friend.data.link.url} key={friend.data.slugs}>
                <div className={styles.Friend} >
                  <div className={styles.ImageWrapper}>
                    <img 
                      className={styles.Image} 
                      src={friend.data.logo.url} 
                      alt={friend.data.logo.alt} />
                  </div>
                  <div className={styles.Title}>
                    <H1 >{friend.data.org_name}</H1>
                  </div>
                  <div className={styles.friend}>
                    <div className={styles.Info}>
                    {friend.data.description.map(detail => (
                      <Body key={detail.text}>{detail.text}</Body>
                    ))}
                    </div>
                  
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  );
};

export default Friends;

export async function getStaticProps(ctx) {
  const req = ctx.req;
  

  const friends = await Client(req)
    .query(Prismic.Predicates.at("document.type", "friends"), {
      orderings: "[my.friends.name]",
      pageSize: 1000
    })
    .then(function (response) {
      return response;
      // response is the response object, response.results holds the documents
    });

  return {
    props: { friends: friends.results },
  };
}
