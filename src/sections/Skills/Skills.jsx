import styles from "./SkillsStyles.module.css";
import python from "../../assets/icons/icons8-python.svg";
import java from "../../assets/icons/icons8-java.svg";
import csharp from "../../assets/icons/icons8-csharp.svg";
import php from "../../assets/icons/icons8-php.svg";
import javascript from "../../assets/icons/icons8-javascript.svg";
import react from "../../assets/icons/icons8-react.svg";
import bootstrap from "../../assets/icons/icons8-bootstrap.svg";
import numpy from "../../assets/icons/icons8-numpy.svg";
import pandas from "../../assets/icons/icons8-pandas.svg";
import anaconda from "../../assets/icons/icons8-anaconda.svg";
import mysql from "../../assets/icons/icon-mysql.svg";
import mariadb from "../../assets/icons/icons8-mariadb.svg";
import synapse from "../../assets/icons/icons8-synapse.svg";
import mongodb from "../../assets/icons/icon-mongodb.svg";
import sql from "../../assets/icons/icons8-sql.svg";
import hadoop from "../../assets/icons/icon-hadoop.svg";
import spark from "../../assets/icons/icon-spark.svg";
import matplotlib from "../../assets/icons/icon-matplotlib.svg";
import github from "../../assets/icons/icons8-github.svg";
import azure from "../../assets/icons/icons8-azure.svg";
import hive from "../../assets/icons/icon-hive.svg";
import powerbi from "../../assets/icons/icons8-powerbi.svg";
import powerautomate from "../../assets/icons/icons8-automate.svg";
import vscode from "../../assets/icons/icons8-vscode.svg";
import visualstudio from "../../assets/icons/icons8-visualstudio.svg";
import jupyter from "../../assets/icons/icons8-jupyter.svg";
import android from "../../assets/icons/icons8-android.svg";
import eclipse from "../../assets/icons/icon-eclipse.svg";
import figma from "../../assets/icons/icons8-figma.svg";
import canva from "../../assets/icons/icons8-canva.svg";
import illustrator from "../../assets/icons/icons8-illustrator.svg";
import inkscape from "../../assets/icons/icons8-inkscape.svg";
import css from "../../assets/icons/icon-css.svg";
import grafana from "../../assets/icons/icon-grafana.svg";
import net from "../../assets/icons/icons8-net.svg";

function Skills() {
  return (
    <div className={`${styles.skillsContainer}`}>
      {/* <p className={`${styles.title}`}>Technical Skills</p> */}
      <div className='container-fluid'>
        {/* LANGUAGES */}
        <div className='row '>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={`${styles.skillsTitle}`}>Languages</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={csharp}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />C Sharp
                  </span>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={python}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Python
                  </span>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={java}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Java
                  </span>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={sql}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    SQL
                  </span>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={php}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    PHP
                  </span>
                  <span className={`${styles.skillTag}`}>
                    <img
                      src={javascript}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className='row'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Frameworks</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={react}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    React
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={bootstrap}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Bootstrap
                  </span>
                  {/* <span className={styles.skillTag}>UWP</span>
                  <span className={styles.skillTag}>MAUI</span>
                  <span className={styles.skillTag}>ASP.NET MVC</span> */}
                  <span className={styles.skillTag}>
                    <img
                      src={hadoop}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Hadoop
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={net}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    .NET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DATABASES */}
        <div className='row'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Databases</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={mysql}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    MySQL
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={mongodb}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    MongoDB
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={mariadb}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    MariaDB
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={synapse}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Azure Synapse
                    <br />
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LIBRARIES */}
        <div className='row'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Libraries</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  {/* <span className={styles.skillTag}>PyMongo</span> */}
                  <span className={styles.skillTag}>
                    <img
                      src={pandas}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Pandas
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={numpy}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    NumPy
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={anaconda}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Anaconda
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={matplotlib}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Matplotlib
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={spark}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    PySpark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOOLS & PLATFORMS */}
        <div className='row'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Tools & Platforms</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={github}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    GitHub
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={azure}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Azure
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={powerbi}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    PowerBI
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={grafana}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Grafana
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={powerautomate}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Power
                    <br />
                    Automate
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={hive}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Hive
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={visualstudio}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Visual
                    <br />
                    Studio
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={vscode}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    VS Code
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={android}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Android
                    <br />
                    Studio
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={eclipse}
                      alt=''
                      className={`${styles.icon} ${styles.scale55} img-fluid`}
                    />
                    <br />
                    Eclipse IDE
                  </span>
                  {/* <span className={styles.skillTag}>
                    <img
                      src={jupyter}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Jupyter Notebook
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN */}
        <div className='row'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Design</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={figma}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Figma
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={illustrator}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Adobe
                    <br />
                    Illustrator
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={inkscape}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Inkscape
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={canva}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    <br />
                    Canva
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={css}
                      alt=''
                      className={`${styles.icon} ${styles.scale55} img-fluid`}
                    />
                    <br />
                    CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page container end */}
    </div>
  );
}

export default Skills;
