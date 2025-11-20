import { useState, useRef } from "react";
import CardCover from "./CardCover";
import LoveSlider from "./Slider";
import "./App.css";
import "./Flip.css";
import bgMusic from "./assets/song.mp3";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);
  const handleOpen = () => {
    setIsOpen(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch(() =>
            console.log("Autoplay blocked, waiting for user interaction")
          );
      }
    }, 300);
  };

  return (
    <div className="card-wrapper">
      <div className={`card ${isOpen ? "open" : ""}`}>
        <div className="card-front">
          <CardCover onOpen={handleOpen} />
        </div>
        <div className="card-inside">
          <LoveSlider audioRef={audioRef} />
        </div>
      </div>
      {/* Hidden audio element */}
      <audio ref={audioRef} loop src={bgMusic} />
    </div>
  );
}
