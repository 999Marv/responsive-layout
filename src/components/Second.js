import styles from "./styles/Second.module.css";

const Second = () => {
  return (
    <section className={styles.container}>
      <div className={styles.secondContainer}>
        <div>
          <h3 className={styles.h3}>Mobile-first</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div>
          <h3 className={styles.h3}>Efficient</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div>
          <h3 className={styles.h3}>Done Right</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Second;
