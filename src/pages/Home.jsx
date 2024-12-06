import Hero from "../sections/Hero/Hero";
import styles from "../styles/HomeStyles.module.css";

function Home() {
  return (
    <>
      <Hero />
      <div className={`${styles.pgHome}`}>
        {/* <div className="row">
          <div className={`${styles.statementTitle} col`}>about me</div>
        </div> */}
        <p className={`${styles.statement} text-muted`}>
          Full-stack developer specializing in web design, with a passion for
          creating visually appealing, user-friendly applications that solve
          real-world problems.
        </p>
        <p className={`${styles.title}`}>Technical Skills</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <div className={styles.skillsTitle}>Languages</div>
                </div>
                <div className="col">
                  <div className={styles.skillsCol}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>C#</span>
                    <span className={styles.skillTag}>PHP</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>Jinja</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={styles.skillsTitle}>Libraries</div>
              <div className={styles.skillsCol}>
                <span className={styles.skillTag}>PyMongo</span>
                <span className={styles.skillTag}>NumPy</span>
                <span className={styles.skillTag}>Pandas</span>
                <span className={styles.skillTag}>Matplotlib</span>
                <span className={styles.skillTag}>PySpark</span>
                <span className={styles.skillTag}>Anaconda</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.skillsTitle}>Frameworks</div>
              <div className={styles.skillsCol}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Bootstrap</span>
                <span className={styles.skillTag}>UWP</span>
                <span className={styles.skillTag}>MAUI</span>
                <span className={styles.skillTag}>ASP.NET MVC</span>
                <span className={styles.skillTag}>Hadoop</span>
              </div>
            </div>
            <div className="col">
              <div className={styles.skillsTitle}>Databases</div>
              <div className={styles.skillsCol}>
                <span className={styles.skillTag}>MongoDB</span>
                <span className={styles.skillTag}>MySQL</span>
                <span className={styles.skillTag}>SQL Server</span>
                <span className={styles.skillTag}>MariaDB</span>
                <span className={styles.skillTag}>Azure Synapse Analytics</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.skillsTitle}>Tools & Platforms</div>
              <div className={styles.skillsCol}>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>Azure</span>
                <span className={styles.skillTag}>Hive</span>
                <span className={styles.skillTag}>PowerBI</span>
                <span className={styles.skillTag}>Power Automate</span>
                <span className={styles.skillTag}>VS Code</span>
                <span className={styles.skillTag}>Visual Studio</span>
                <span className={styles.skillTag}>Jupyter Notebook</span>
                <span className={styles.skillTag}>Android Studio</span>
                <span className={styles.skillTag}>Eclipse IDE</span>
                <span className={styles.skillTag}>Rewst</span>
                <span className={styles.skillTag}>Figma</span>
                <span className={styles.skillTag}>Canva</span>
                <span className={styles.skillTag}>Adobe Illustrator</span>
                <span className={styles.skillTag}>Inkscape</span>
              </div>
            </div>
          </div>
        </div>
        {/* page container end */}
      </div>
    </>
  );
}

export default Home;
