import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Info.css";
import photo from "../images/my_photo.png";

export default function Info() {
  return (
    <div className="info">
      <img className="info__photo" src={photo} alt="My Photos" />
      <h1 className="info__name">Obula Reddy</h1>
      <h3 className="info__title">React Native Developer</h3>
      <a className="info__website" href="https://obula-reddy.github.io/">
        obula-reddy.github.io
      </a>
      <div className="info__buttons">
        <button className="info__button info__button--email">
          <i className="fa-solid fa-envelope"></i> Email
        </button>
        <button className="info__button info__button--linkedin">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
}
