import { Link } from "react-router-dom";
import haver from "../assets/projects/haver-laptop.png";
import emmas from "../assets/projects/emmas-laptop.png";
import contoso from "../assets/projects/contoso-laptop.png";
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
    <div className={`${styles.pgProjects}`}>
      <div className={`${styles.gridContainer}`}>
        <div className={`${styles.projCard}`}>
          <img
            className={`${styles.projImage} card-img-top`}
            src={haver}
            alt='Card image cap'
            loading='lazy'
            width="500"
          />
          <div className='card-body p-4'>
            <div className='border-start border-primary ps-4'>
              <h5 className='card-title mb-2'>NCR System</h5>
              <p className='card-text'>
                An application designed to manage Non-Conformance Reports
                through various stages, utilizing a role-based login system to
                modify permissions and views.
              </p>
            </div>
            <div className={`${styles.skills} pb-3 pt-3`}>
              {/* | ASP.NET MVC | C# | JavaScript | SQLite | Bootstrap | GitHub | Azure | HTML/CSS | XAML | */}
              <span className={styles.skillTag}>C#</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>ASP.NET MVC</span>
              <span className={styles.skillTag}>SQLite</span>
              <span className={styles.skillTag}>HTML/CSS</span>
              <span className={styles.skillTag}>Bootstrap</span>
              <span className={styles.skillTag}>Azure</span>
              <span className={styles.skillTag}>GitHub</span>
            </div>
            <div className='d-flex justify-content-end'>
              {/* <a href='https://github.com/Dorian-Orozco/JDAC4-Haver-Niagara' target="_blank" className='btn btn-primary me-3'>
                Github
              </a> */}
              <Link to='/Projects/Haver' className='btn btn-primary'>
                More Info
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.projCard}`}>
          <img
            className={`${styles.projImage} card-img-top`}
            src={emmas}
            alt='Card image cap'
            loading='lazy'
            width="500"
          />
          <div className='card-body p-4'>
            <div className='border-start border-primary ps-4'>
              <h5 className='card-title mb-2'>CRM System</h5>
              <p className='card-text'>
                A mock customer relationship management system built for a
                lawncare equipment company to streamline the management of
                sales, repairs, and customer information.
              </p>
            </div>
            <div className={`${styles.skills} pb-3 pt-3`}>
              {/* | ASP.NET MVC | C# | JavaScript | SQLite | Bootstrap | GitHub | Azure | HTML/CSS | XAML | */}
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>HTML/CSS</span>
              <span className={styles.skillTag}>Bootstrap</span>
              <span className={styles.skillTag}>GitHub</span>
            </div>
            <div className='d-flex justify-content-end'>
              {/* <a href='https://github.com/DoaaAwan/Team_Project' target="_blank" className='btn btn-primary me-3'>
                Github
              </a> */}
              <Link to='/Projects/Emmas' className='btn btn-primary'>
                More Info
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.projCard}`}>
          <img
            className={`${styles.projImage} card-img-top`}
            src={contoso}
            alt='Card image cap'
            loading='lazy'
            width="500"
          />
          <div className='card-body p-4'>
            <div className='border-start border-primary ps-4'>
              <h5 className='card-title mb-2'>PowerBI Dashboard</h5>
              <p className='card-text'>
                An interactive PowerBI dashboard featuring dynamic gauges and
                charts that allow users to filter data by year, month, and
                quarter, providing a clear view of business performance.
              </p>
            </div>
            <div className={`${styles.skills} pb-3 pt-3`}>
              {/* | ASP.NET MVC | C# | JavaScript | SQLite | Bootstrap | GitHub | Azure | HTML/CSS | XAML | */}
              <span className={styles.skillTag}>PowerBI</span>
              <span className={styles.skillTag}>SQL Server</span>
            </div>
            <div className='d-flex justify-content-end'>
              <Link to='/Projects/Contoso' className='btn btn-primary'>
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
