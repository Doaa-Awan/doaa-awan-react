import styles from "./SkillsStyles.module.css";
import python from "../../assets/icons8-python.svg";
import java from "../../assets/icons8-java.svg";
import csharp from "../../assets/icons8-csharp.svg";
import php from "../../assets/icons8-php.svg";
import javascript from "../../assets/icons8-javascript.svg";
import react from "../../assets/icons8-react.svg";
import bootstrap from "../../assets/icons8-bootstrap.svg";
import numpy from "../../assets/icons8-numpy.svg";
import pandas from "../../assets/icons8-pandas.svg";
import anaconda from "../../assets/icons8-anaconda.svg";
import mysql from "../../assets/icon-mysql.svg";
import mariadb from "../../assets/icons8-mariadb.svg";
import synapse from "../../assets/icons8-synapse.svg";
import mongodb from "../../assets/icon-mongodb.svg";
import sql from "../../assets/icons8-sql.svg";
import hadoop from "../../assets/icon-hadoop.svg";
import spark from "../../assets/icon-spark.svg";
import matplotlib from "../../assets/icon-matplotlib.svg";
import github from "../../assets/icons8-github.svg";
import azure from "../../assets/icons8-azure.svg";
import hive from "../../assets/icon-hive.svg";
import powerbi from "../../assets/icons8-powerbi.svg";
import powerautomate from "../../assets/icons8-automate.svg";
import vscode from "../../assets/icons8-vscode.svg";
import visualstudio from "../../assets/icons8-visualstudio.svg";
import jupyter from "../../assets/icons8-jupyter.svg";
import android from "../../assets/icons8-android.svg";
import eclipse from "../../assets/icon-eclipse.svg";
import figma from "../../assets/icons8-figma.svg";
import canva from "../../assets/icons8-canva.svg";
import illustrator from "../../assets/icons8-illustrator.svg";
import inkscape from "../../assets/icons8-inkscape.svg";

function Skills() {
  return (
    <div className={`${styles.skillsContainer}`}>
      <p className={`${styles.title}`}>Technical Skills</p>
      <div className='container-fluid'>
        {/* LANGUAGES */}
        <div className='row border'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Languages</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={csharp}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />{" "}
                    C Sharp
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={python}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Python
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={java}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Java
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={php}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    PHP
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={javascript}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DATABASES */}
        <div className='row border'>
          <div className='col m-2'>
            <div className='row'>
              <div className='col-2'>
                <div className={styles.skillsTitle}>Databases</div>
              </div>
              <div className='col'>
                <div className={styles.skillsCol}>
                  <span className={styles.skillTag}>
                    <img
                      src={sql}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    SQL Server
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={mysql}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    MySQL
                  </span>
                  <span className={styles.skillTag}>
                    {" "}
                    <img
                      src={mongodb}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    MongoDB
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={mariadb}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    MariaDB
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={synapse}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Azure Synapse Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LIBRARIES */}
        <div className='row border'>
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
                    Pandas
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={numpy}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    NumPy
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={anaconda}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Anaconda
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={matplotlib}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Matplotlib
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={spark}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    PySpark
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className='row border'>
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
                    React
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={bootstrap}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
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
                    Hadoop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOOLS & PLATFORMS */}
        <div className='row border'>
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
                    GitHub
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={azure}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Azure
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={powerbi}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    PowerBI
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={powerautomate}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Power Automate
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={hive}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Hive
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={vscode}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    VS Code
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={visualstudio}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Visual Studio
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={jupyter}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Jupyter Notebook
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={android}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Android Studio
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={eclipse}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Eclipse IDE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN */}
        <div className='row border'>
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
                    Figma
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={illustrator}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Adobe Illustrator
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={inkscape}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Inkscape
                  </span>
                  <span className={styles.skillTag}>
                    <img
                      src={canva}
                      alt=''
                      className={`${styles.icon} img-fluid`}
                    />
                    Canva
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
