import styles from "../styles/ExperienceStyles.module.css";

function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className='container'>
        <div className='row border rounded p-4'>
        <div className='col'>
            <div>
              <h3>Work experience</h3>
              <div>
                <p>
                  <b>B4 Networks - Computer Technician</b>
                </p>
                <ul>
                  <li>
                    Analyzed data, generated comprehensive reports for internal
                    use, and developed SQL queries to extract, manipulate, and
                    display data in an accurate and reliable manner.
                  </li>
                  <li>
                    Designed and implemented real-time interactive dashboards to
                    monitor key performance indicators (KPIs) and metrics using
                    HaloPSA, Grafana and Microsoft PowerBI.
                  </li>
                  <li>
                    Automated data synchronization across multiple platforms by
                    creating Rewst workflows, significantly reducing manual
                    efforts and enhancing data consistency.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Aerie - Brand Ambassador</b>
                </p>
                <ul>
                  <li>
                    Fostered exceptional customer experiences through attentive
                    support and personalized service.
                  </li>
                  <li>
                    Welcomed customers and drove sales by imparting product
                    knowledge and assistance.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Salnan POS - Marketing Assistant</b>
                </p>
                <ul>
                  <li>
                    Optimized and enhanced the Salnan POS website using
                    WordPress CMS, ensuring the content remained current,
                    precise, and captivating through regular reviews and edits.
                  </li>
                  <li>
                    Collaborated within a small, closely-knit team including
                    Customer Service, and Sales, maintaining effective
                    communication and asking relevant questions to streamline
                    processes and reach alignment.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Project Experience</h3>
              <p>
                <b>Non-Conformance Report System - Team Lead</b>
                <br />
                Led the development of an internal business management
                application for a local company in the Niagara region.
              </p>
              <p>
                <b> CRM System - GitHub Manager / Designer</b>
                <br />
                Collaborated with a team to design and develop a mock web
                application that manages the customer repair process for a local
                lawn care company.
              </p>
            </div>
          </div>
        <div className='col border-start ps-4 ms-4'>
            <div>
              <h3>Technical Skills</h3>
              <div>
                <p>
                  <b>Languages</b>
                  <span className={styles.skillTag}>C#</span>
                  <span className={styles.skillTag}>Python</span>
                  <span className={styles.skillTag}>Java</span>
                  <span className={styles.skillTag}>SQL</span>
                  <span className={styles.skillTag}>JavaScript</span>
                  <span className={styles.skillTag}>HTML/CSS</span>
                </p>
                <p>
                  <b>Frameworks</b>
                  <span className={styles.skillTag}>React</span>
                  <span className={styles.skillTag}>.NET</span>
                  <span className={styles.skillTag}>Bootstrap</span>
                  <span className={styles.skillTag}>Hadoop</span>
                </p>
                <p>
                  <b>Libraries</b>
                  <span className={styles.skillTag}>Pandas</span>
                  <span className={styles.skillTag}>NumPy</span>
                  <span className={styles.skillTag}>Anaconda</span>
                  <span className={styles.skillTag}>Matplotlib</span>
                  <span className={styles.skillTag}>PySpark</span>
                </p>
                <p>
                  <b>Dev Tools</b>
                  <span className={styles.skillTag}>GitHub</span>
                  <span className={styles.skillTag}>Azure</span>
                  <span className={styles.skillTag}>Netlify</span>
                </p>
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <div>
                <p>
                  <b>Niagara College</b>
                  <br />
                  Advanced Diploma in Computer Programming & Analysis (Co-op)
                </p>
                <p>
                  <b>McMaster University</b>
                  <br />
                  B.A in Justice, Political Philosophy & Law (Honours)
                </p>
              </div>
            </div>
            <div>
              <h3>Leadership</h3>
              <div>
                <p>
                  <b>NCSAC Women in Tech Club - President</b>
                </p>
                <ul>
                  <li>
                    Led meetings to align strategies and ensure everyone was on
                    the same page regarding club initiatives.
                  </li>
                  <li>
                    Worked with the team to orchestrate and execute diverse
                    events, ensuring seamless planning and organization.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Awards</h3>
              <p>
                <b>Web Design & Development</b>
                <br />
                Skills Ontario 2024, Bronze
              </p>
            </div>
            <div>
              <h3>Certifications</h3>
              <p>
                <b>Advanced React Development</b>
                <br />
                SheCodes, 2022
              </p>
              <p>
                <b>Responsive Web Development</b>
                <br />
                SheCodes, 2022
              </p>
            </div>
          </div>
       
        
        </div>
      </div>
    </div>
  );
}

export default Experience;
