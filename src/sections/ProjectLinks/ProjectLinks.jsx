import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectLinksStyles.module.css";

function ProjectLinks({ src }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`${styles.projectLinksContainer} d-flex justify-content-end`}
      >
        <button
          onClick={() => navigate("/Projects")}
          className={`${styles.backButton} btn btn-outline-primary me-4`}
        >
          <IoChevronBack className={styles.linkIcon} />
          Back to Projects
        </button>
        {src && (
          <a
            href={src}
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.forwardButton} btn btn-primary`}
          >
            GitHub
            <IoChevronForward className={styles.linkIcon} />
          </a>
        )}
      </div>
    </>
  );
}

export default ProjectLinks;
