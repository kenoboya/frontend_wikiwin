import telegram from "../assets/icons/telegram.svg";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";

const icons = {
  telegram,
  facebook,
  youtube,
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        {Object.keys(icons).map((key, index) => (
          <a key={index} href="#">
            <img src={icons[key]} alt={key} />
          </a>
        ))}
      </div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookie</a>
      </div>
    </footer>
  );
}

export default Footer;
