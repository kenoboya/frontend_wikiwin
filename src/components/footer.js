import telegram from "../assets/icons/telegram.svg";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";

import styles from "../css/footer.module.css";

const icons = {
  telegram,
  facebook,
  youtube,
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocialIcons}>
        {Object.keys(icons).map((key, index) => (
          <a key={index} href="#">
            <img src={icons[key]} alt={key} />
          </a>
        ))}
      </div>
      <div className={styles.footerLinks}>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookie</a>
      </div>
    </footer>
  );
}

export default Footer;
