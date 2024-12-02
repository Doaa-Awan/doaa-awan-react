import styles from "./HeroStyles.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Hero() {
  return (
    <div>
      <div className="d-flex align-items-center vh-100">
        <div className="container">
          <div className="row">
            <div className={`${styles.headingContainer} col-7`}>
              <div className="row">
                <h1 className="ms-5">Doaa Awan</h1>
              </div>
              <div className="row">
                <h2 className="mt-4 text-end">
                  <span className={`${styles.leftBorder}`}></span>Software
                  Developer
                </h2>
              </div>
            </div>
            <div className="col-5">
              <img
                src="/src/assets/Headshots.png"
                alt="Profile"
                className="img-fluid border rounded-circle shadow"
              />
            </div>
          </div>
          <div className="row">
            <div className={`${styles.buttons} d-flex justify-content-center`}>
              <FaLinkedin
                className={`${styles.iconGithub} border rounded-circle`}
              />
              <MdOutlineMail
                className={`${styles.iconGithub} border rounded-circle bg-primary text-white p-2`}
              />
              <a
                href="https://github.com/Doaa-Awan?tab=repositories"
                target="_blank"
              >
                <FaGithub className={`${styles.iconGithub}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
