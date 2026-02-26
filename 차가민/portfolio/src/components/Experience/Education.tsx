import { EDUCATION_DATA } from "./data";
import styles from "./Education.module.css";

function Education() {
  return (
    <div className="educationContainer">
      <div className={styles.sectionTitle}>
        <span>교육</span>
      </div>

      <ul className={styles.educationList}>
        {EDUCATION_DATA.map((item) => (
          <li key={item.id} className={styles.educationItem}>
            <div className="itemPeriod">
              <span>✦</span>
              {item.period}
            </div>

            <div className="itemDetails">
              <h3>{item.school}</h3>
              {item.major && <p>{item.major}</p>}

              {/* bulletpoints는 존재할때만 표시 */}
              {item.descriptions.length > 0 && (
                <ul>
                  {item.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
