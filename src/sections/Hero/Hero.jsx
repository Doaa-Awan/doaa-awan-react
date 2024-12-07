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
                <h2 className="mt-4 text-center">
                  <span className={`${styles.leftBorder}`}></span>Software
                  Developer
                </h2>
              </div>
            </div>
            <div className="col-5">
              <img
                src="/src/assets/pfp.png"
                alt="Profile"
                className="img-fluid border rounded-circle shadow"
              />
            </div>
          </div>
          <div className="row">
            <div className={`${styles.buttons} d-flex justify-content-center`}>
              <FaLinkedin
                className={`${styles.iconSocial} border rounded-circle`}
              />
              <a
                href="https://github.com/Doaa-Awan?tab=repositories"
                target="_blank"
              >
                <MdOutlineMail
                  className={`${styles.iconSocial} ${styles.emailIcon} border rounded-circle`}
                />
              </a>
              <a
                href="https://github.com/Doaa-Awan?tab=repositories"
                target="_blank"
              >
                <FaGithub className={`${styles.iconSocial}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
