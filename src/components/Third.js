import styles from "./styles/Third.module.css";
import image from "../imgs/the-image.jpeg";

const Third = () => {
  return (
    <section className={styles.container}>
      <div className={styles.cont2}>
        <article className={styles.main}>
          <div className={styles.sec}>
            <h2 className={styles.h2}>It doesn't have to be so hard</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </h4>
          </div>

          <div>
            <img src={image} alt="bub"></img>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </h4>
          </div>
        </article>

        {/*        */}

        <article className={styles.container2}>
          <div className={styles.dark}>
            <h3 className={styles.h3}>Break it down</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.dark}>
            <h3 className={styles.h3}>Work your way up</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.dark}>
            <h3 className={styles.h3}>Embrace it</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Third;
