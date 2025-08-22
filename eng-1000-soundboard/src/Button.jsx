import React, { useRef, useEffect } from 'react';
import './Button.css';
import Sound from './Sound';
import useSound from 'use-sound';

export default function Button({ sound }) {
  const [play] = useSound(import.meta.env.BASE_URL + 'audio/' + sound.soundFile);
  const vidRef = useRef(null);
  const btnRef = useRef(null);
  const timeoutRef = useRef(false);

  function start() {
    if (timeoutRef.current) return;

    timeoutRef.current = true;
    btnRef.current?.classList.add('pressed');
    play();

    if (sound.videoFile) {
      vidRef.current?.play();
      vidRef.current?.classList.add('playing');
    }

    setTimeout(() => {
      btnRef.current?.classList.remove('pressed');
      timeoutRef.current = false;
    }, 200);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === sound.keybinding) {
        start();
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [sound.keybinding]);

  const handleVideoEnd = () => {
    vidRef.current?.classList.remove('playing');
  };

  return (
    <div className="Button-container">
      {sound.videoFile && (
        <video onEnded={handleVideoEnd} className="Button-video" ref={vidRef}>
          <source src={import.meta.env.BASE_URL + 'video/' + sound.videoFile} type="video/mp4" />
        </video>
      )}
      <button onClick={start} className="Button-button-button">
        <div className="Button-button" ref={btnRef}>
          <span className="Button-text">
            {sound.text} ({sound.keybinding})
          </span>
        </div>
      </button>
    </div>
  );
}