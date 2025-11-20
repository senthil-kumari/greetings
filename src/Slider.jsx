import { useState } from "react";
import Confetti from "react-confetti";
import husbandPhoto from "./assets/husband.jpeg";

const quotes = [
  "Hi Boba, here is my way of wishing you. This was my plan all along. Sorry I didn't wish you in the morning",
  "You are so tough,strict and a sakht launda for the world but you are a total 🎀Pookie🎀 for me",
  "I love that you become a cutie softie in front of me (love to see that version of you which no one else sees).",
  "You take  responsiblity for your family, mom, dad , sister and now you have a ownership of one cow too. I love how you have balanced everything nicely 👏🏾",
  "I can be silly, goofy and anything I want to be. Thank you for letting me be without any judgement",
  "Thank you for being an amazing listener. I dont know what I would do if you weren't one",
  "Thank you for existing and choosing me. You make my world better",
  "I know Men's day is not celebrated as much as Women's day but I want to tell you that you are celebrated and appreciated Boba! And not just on Men's day but everyday",
  "To the man who makes me feel safe, love, cherished and FLUFFED — Happy Men's Day ❤️",
];

export default function LoveSlider({ audioRef }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isLastQuote = index === quotes.length - 1;

  const nextQuote = () => {
    setIndex((prev) => (prev + 1 < quotes.length ? prev + 1 : prev));
  };

  const prevQuote = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="main-container">
      {isLastQuote && <Confetti />}

      <div className="slider-container">
        <h2 className="title">💙 Happy Men's Day 💙</h2>
        <img src={husbandPhoto} alt="husband" className="photo" />
        <h3 className="name">To My Husband — Srinivasan 💖</h3>

        <div className="quote-box fade">
          <p>{quotes[index]}</p>
        </div>
        <div className="quote-buttons">
          <button onClick={prevQuote} disabled={index === 0}>
            ◀
          </button>
          <button onClick={nextQuote} disabled={index === quotes.length - 1}>
            ▶
          </button>
        </div>

        <p className="footer">
          — Your wife, Senthil ❤️ (Cow 🐄) ✅, Not Gloria❌
        </p>

        {audioRef && (
          <button className="music-btn" onClick={toggleMusic}>
            🔊 {isPlaying ? "Pause 🎵" : "Play🎵"}
          </button>
        )}
      </div>
    </div>
  );
}
