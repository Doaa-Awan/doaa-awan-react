import Hero from "../sections/Hero/Hero";
import styles from "../styles/HomeStyles.module.css";
import Skills from "../sections/Skills/Skills";

function Home() {
  return (
    <>
      <Hero />
      {/* <div className="row">
          <div className={`${styles.statementTitle} col`}>about me</div>
          </div> */}
      <p className={`${styles.statement}`}>
        creating <b>user-friendly</b> applications that
        <b> solve real problems</b>.
      </p>
      <Skills />
    </>
  );
}

export default Home;
