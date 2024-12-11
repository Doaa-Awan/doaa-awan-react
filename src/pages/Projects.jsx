import { Link } from "react-router-dom";
import haver from "../assets/projects/proj-haver.svg";
import emmas from "../assets/projects/proj-emmas.svg";
import contoso from "../assets/projects/proj-contoso.svg";
import weather from "../assets/projects/proj-weatherdesktop.svg";
import styles from "../styles/ProjectStyles.module.css";

import { FaArrowCircleRight } from "react-icons/fa";
import html from "../assets/icons/icon-html.svg";
import css from "../assets/icons/icon-css.svg";
import net from "../assets/icons/icons8-net.svg";
import csharp from "../assets/icons/icons8-csharp.svg";
import bootstrap from "../assets/icons/icons8-bootstrap.svg";
import azure from "../assets/icons/icons8-azure.svg";
import github from "../assets/icons/icons8-github.svg";
import netlify from "../assets/icons/icon-netlify.svg";
import xml from "../assets/icons/icon-xml.svg";
import javascript from "../assets/icons/icon-javascript.svg";
import powerbi from "../assets/icons/icons8-powerbi.svg";
import sql from "../assets/icons/icons8-sql.svg";

function Projects() {
  return (
    <div className={`${styles.pgProjects} container pgMarginTop`}>
      <div className='row'>
        <div className={`col m-2 p-0`}>
          <Link to='/Projects/Haver' className={styles.link}>
            <img
              src={haver}
              alt=''
              className={`${styles.projImage} img-fluid`}
            />
            <p className={`${styles.projTitle} text-dark`}>
              Non-Conformance Reporting System
              {/* <span>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrHaver}`}
                />
              </span> */}
            </p>
          </Link>
          <p className={`${styles.projDescription}`}>
            A web-based application designed to manage NCR's through various
            stages, including Quality Representative, Engineer, Operations, and
            Procurement.
          </p>
          <p className={styles.skills}>
            <span className={styles.skillTag}>
              <img
                src={net}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='ASP.NET MVC'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={csharp}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='C Sharp'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={javascript}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='JavaScript'
              />
            </span>
            {/* <span className={styles.skillTag}>
              <img
                src={xml}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='XML'
              />
            </span> */}
            <span className={styles.skillTag}>
              <img
                src={html}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='HTML'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={css}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='CSS'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={bootstrap}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Bootstrap'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={github}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Github'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={azure}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Azure'
              />
            </span>
            {/* <span className={styles.skillTag}>ASP.NET MVC</span>
            <span className={styles.skillTag}>C#</span>
            <span className={styles.skillTag}>XML</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>Bootstrap</span>
            <span className={styles.skillTag}>HTML/CSS</span>
            <span className={styles.skillTag}>Azure</span>
            <span className={styles.skillTag}>GitHub</span> */}
          </p>
        </div>
        <div className='col m-2 p-0'>
          <Link to='/Projects/Emmas' className={styles.link}>
            <img
              src={emmas}
              alt=''
              className={`${styles.projImage} img-fluid`}
            />
            <p className={`${styles.projTitle} text-dark`}>
              Customer Relationship Management System
              {/* <span>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrEmmas}`}
                />
              </span> */}
            </p>
          </Link>
          <p className={`${styles.projDescription}`}>
            A mock web application built for a lawncare equipment company to
            streamline the management of sales, repairs, and customer
            information.
          </p>
          <p className={`${styles.skills}`}>
            <span className={styles.skillTag}>
              <img
                src={javascript}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='JavaScript'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={html}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='HTML'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={css}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='CSS'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={bootstrap}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Bootstrap'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={github}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Github'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={netlify}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Netlify'
              />
            </span>
            {/* <span className={styles.skillTag}>HTML/CSS</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>Bootstrap</span>
            <span className={styles.skillTag}>Netlify</span>
            <span className={styles.skillTag}>GitHub</span> */}
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col m-2 p-0'>
          <Link to='/Projects/Contoso' className={styles.link}>
            <img
              src={contoso}
              alt=''
              className={`${styles.projImage} img-fluid`}
            />
            <p className={`${styles.projTitle} text-dark`}>
              Contoso PowerBI Dashboard
              {/* <span>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrContoso}`}
                />
              </span> */}
            </p>
          </Link>
          <p className={`${styles.projDescription}`}>
            An interactive PowerBI dashboard featuring dynamic gauges and charts
            that allow users to filter data by year, month, and quarter,
            providing a clear view of business performance.
          </p>
          <p className={styles.skills}>
            <span className={styles.skillTag}>
              <img
                src={powerbi}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Power BI'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={sql}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='SQL Server'
              />
            </span>
            {/* <span className={styles.skillTag}>Power BI</span>
            <span className={styles.skillTag}>SQL Server</span> */}
          </p>
        </div>
        <div className='col m-2 p-0'>
          <Link to='/Projects/Weather' className={styles.link}>
            <img
              src={weather}
              alt=''
              className={`${styles.projImage} img-fluid`}
            />
            <p className={`${styles.projTitle} text-dark`}>
              Global Weather Application{" "}
              {/* <span>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrWeather}`}
                />
              </span> */}
            </p>
          </Link>
          <p className={`${styles.projDescription}`}>
            Responsive weather app that displays the current weather temperature
            along with a 5-day forecast, giving users an up-to-date view of
            weather conditions anywhere in the world.
          </p>
          <p className={styles.skills}>
            <span className={styles.skillTag}>
              <img
                src={javascript}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='JavaScript'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={html}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='HTML'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={css}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='CSS'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={github}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Github'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={netlify}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
                title='Netlify'
              />
            </span>
            {/* <span className={styles.skillTag}>HTML/CSS</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>Netlify</span>
            <span className={styles.skillTag}>GitHub</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
