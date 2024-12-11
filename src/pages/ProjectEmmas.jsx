import emmas from "../assets/projects/full-emmas.svg";
import styles from "../styles/ProjectStyles.module.css";
import ProjectLinks from "../sections/ProjectLinks/ProjectLinks";

function ProjectEmmas() {
  return (
    <div className={styles.detailsContainer}>
      <div className='container'>
        <h2 className={`${styles.detailsTitle} clrEmmas`}>
          Emma's Small Engines
          <span className={styles.detailsSkill}>JavaScript</span>
          <span className={styles.detailsSkill}>HTML/CSS</span>
          <span className={styles.detailsSkill}>Bootstrap</span>
        </h2>
        <div className='d-flex'>
          <img
            src={emmas}
            alt=''
            className='img-fluid rounded shadow p-2 m-3 img-fluid'
          />
          <div className={`${styles.overview} m-3`}>
            <p className='text-muted'>
              Role-based customer relationship management system for a lawncare
              equipment company
            </p>
            <ul>
              <li>
                Technicians can view and manage repair tasks, document the
                repair process and time, and mark repairs as completed.
              </li>
              <li>
                Sales Representatives can search for or add customers, manage
                their equipment, create repair requests, and generate printable
                invoices for customers.
              </li>
              <li>
                Administrators have access to detailed reports, including
                warranty reports, repair reports, and weekly sales reports.
              </li>
            </ul>
            <ProjectLinks src='https://digitaledge-emmademo.netlify.app/pages/login' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEmmas;
