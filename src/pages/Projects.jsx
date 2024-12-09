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
import javascript from "../assets/icons/icons8-javascript.svg";
import powerbi from "../assets/icons/icons8-powerbi.svg";
import sql from "../assets/icons/icons8-sql.svg";

function Projects() {
  return (
    <div className={`${styles.pgProjects} container pgcontainer`}>
      <div className='row'>
        <div className={`col m-2 p-0`}>
          <img src={haver} alt='' className={`${styles.projImage} img-fluid`} />
          <p className={`${styles.projTitle} ${styles.clrHaver}`}>
            Non-Conformance Reporting System{" "}
            <span>
              <Link to='/Projects/Haver'>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrHaver}`}
                />
              </Link>
            </span>
          </p>
          <p className={`${styles.projDescription}`}>
            A web-based application designed to manage NCR's through various
            stages, including Quality Representative, Engineer, Operations, and
            Procurement.
            {/* The system features role-based login functionality,
            providing tailored views and permissions for different users, such
            as Admin, Finance, and other team members. */}
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
                className={`${styles.skillIcon} img-fluid`}
                title='JavaScript'
              />
            </span>
            <span className={styles.skillTag}>
              <img
                src={xml}
                alt=''
                className={`${styles.skillIcon} ${styles.scale70} img-fluid`}
                title='XML'
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
          <img src={emmas} alt='' className={`${styles.projImage} img-fluid`} />
          <p className={`${styles.projTitle} ${styles.clrEmmas}`}>
            Customer Relationship Management System
            <span>
              <Link to='/Projects/Haver'>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrEmmas}`}
                />
              </Link>
            </span>
          </p>
          <p className={`${styles.projDescription}`}>
            A mock web application built for a lawncare equipment company to
            streamline the management of sales, repairs, and customer
            information.
            {/* Technicians can view and manage repair tasks, document
            the repair process and time, and mark repairs as completed. Sales
            Representatives can search for or add customers, manage their
            equipment, create repair requests, and generate printable invoices
            for customers. Administrators have access to detailed reports,
            including warranty reports, repair reports, and weekly sales
            reports. */}
          </p>
          <p className={`${styles.skills}`}>
            <span className={styles.skillTag}>
              <img
                src={javascript}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
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
          <img
            src={contoso}
            alt=''
            className={`${styles.projImage} img-fluid`}
          />
          <p className={`${styles.projTitle} ${styles.clrContoso}`}>
            Contoso PowerBI Dashboard
            <span>
              <Link to='/Projects/Haver'>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrContoso}`}
                />
              </Link>
            </span>
          </p>
          <p className={`${styles.projDescription}`}>
            An interactive PowerBI dashboard featuring dynamic gauges and charts
            that allow users to filter data by year, month, and quarter,
            providing a clear view of business performance.
            {/* designed to visualize key
            performance indicators (KPIs) for the years 2007-2009. It  */}
            {/* Features: Includes dynamic gauges and charts to track performance
            metrics, with filters for years, months, and quarters. Insights:
            Displays lists of best-selling and worst-selling products, alongside
            detailed views of profits broken down by year, month, and quarter.
            User-Friendly: Provides actionable insights at a glance, helping
            users identify trends, optimize sales strategies, and make
            data-driven decisions. */}
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
          <img
            src={weather}
            alt=''
            className={`${styles.projImage} img-fluid`}
          />
          <p className={`${styles.projTitle} ${styles.clrWeather}`}>
            Global Weather Application{" "}
            <span>
              <Link to='/Projects/Haver'>
                <FaArrowCircleRight
                  className={`${styles.projButton} ${styles.clrWeather}`}
                />
              </Link>
            </span>
          </p>
          <p className={`${styles.projDescription}`}>
            Responsive weather app that displays the current weather temperature
            along with a 5-day forecast, giving users an up-to-date view of
            weather conditions anywhere in the world.
            {/* utilizing real-time weather data powered by
            the OpenWeatherMap API. It  */}
          </p>
          <p className={styles.skills}>
            <span className={styles.skillTag}>
              <img
                src={javascript}
                alt=''
                className={`${styles.skillIcon} img-fluid`}
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
