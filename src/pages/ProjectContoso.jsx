import contoso from "../assets/projects/full-contoso.svg";
import styles from "../styles/ProjectStyles.module.css";
import ProjectLinks from "../sections/ProjectLinks/ProjectLinks";

function ProjectContoso() {
  return (
    <div className={styles.detailsContainer}>
      <div className='container'>
        <h2 className={`${styles.detailsTitle} clrContoso`}>
          Contoso Retailers
          <span className={styles.detailsSkill}>PowerBI</span>
          <span className={styles.detailsSkill}>SQL Server</span>
        </h2>
        <div className='d-flex'>
          <img
            src={contoso}
            alt=''
            className='img-fluid rounded shadow p-2 m-3'
          />
          <div className={`${styles.overview} m-3`}>
            <p className='text-muted'>
              Microsoft Contoso BI Demo Dataset for Retail Industry
            </p>
            <ul>
              <li>
                Designed to visualize key performance indicators (KPIs) for the
                years 2007-2009, with dynamic gauges and charts to track
                performance.
              </li>
              <li>
                Displays lists of best-selling and worst-selling products,
                alongside detailed views of profits broken down by year, month,
                and quarter.
              </li>
              <li>
                Provides actionable insights at a glance, helping users identify
                trends, optimize sales strategies, and make data-driven
                decisions.
              </li>
            </ul>
            <ProjectLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContoso;
