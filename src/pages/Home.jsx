import Hero from "../sections/Hero/Hero";
import styles from "../styles/HomeStyles.module.css";

function Home() {
  return (
    <>
      <Hero />
      {/* <div className="row">
          <div className={`${styles.statementTitle} col`}>about me</div>
          </div> */}
      <p className={`${styles.statement}`}>
        creating <b>user-friendly</b> applications that{" "}
        <b>solve real problems</b>.
      </p>
      <div className={`${styles.skillsContainer}`}>
        <p className={`${styles.title}`}>Technical Skills</p>
        <div className='container-fluid'>
          {/* LANGUAGES */}
          <div className='row'>
            <div className='col border m-2'>
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.skillsTitle}>Languages</div>
                </div>
                <div className='col'>
                  <div className={styles.skillsCol}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>C#</span>
                    <span className={styles.skillTag}>PHP</span>
                    <span className={styles.skillTag}>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LIBRARIES */}
          <div className='row'>
            <div className='col border m-2'>
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.skillsTitle}>Libraries</div>
                </div>
                <div className='col'>
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
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div className='row'>
            <div className='col border m-2'>
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.skillsTitle}>Frameworks</div>
                </div>
                <div className='col'>
                  <div className={styles.skillsCol}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Bootstrap</span>
                    <span className={styles.skillTag}>UWP</span>
                    <span className={styles.skillTag}>MAUI</span>
                    <span className={styles.skillTag}>ASP.NET MVC</span>
                    <span className={styles.skillTag}>Hadoop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DATABASES */}
          <div className='row'>
            <div className='col border m-2'>
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.skillsTitle}>Databases</div>
                </div>
                <div className='col'>
                  <div className={styles.skillsCol}>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>MySQL</span>
                    <span className={styles.skillTag}>SQL Server</span>
                    <span className={styles.skillTag}>MariaDB</span>
                    <span className={styles.skillTag}>
                      Azure Synapse Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TOOLS & PLATFORMS */}
          <div className='row'>
            <div className='col border m-2'>
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.skillsTitle}>Tools & Platforms</div>
                </div>
                <div className='col'>
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
                    <span className={styles.skillTag}>Figma</span>
                    <span className={styles.skillTag}>Canva</span>
                    <span className={styles.skillTag}>Adobe Illustrator</span>
                    <span className={styles.skillTag}>Inkscape</span>
                  </div>
                </div>
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
