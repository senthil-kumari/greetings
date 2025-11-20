import "./CardCover.css";
import coverImg from "./assets/billi.jpeg";

export default function CardCover({ onOpen }) {
  return (
    <div className="cover-container" onClick={onOpen}>
      <img src={coverImg} alt="cover" className="cover-image" />

      <h2 className="cover-title">Tap to Open 💌</h2>
    </div>
  );
}
