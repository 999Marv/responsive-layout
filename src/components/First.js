import styles from "./styles/First.module.css";

const First = () => {
  return (
    <section className={styles.container}>
      <div className={styles.secondContainer}>
        <h1>Responsive Layouts don't have to be a struggle</h1>
        <div className={styles.divider}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className={styles.hide}>I want to learn</button>
          <button className={styles.show}>Login</button>
          <button className={styles.show}>Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default First;
