"use client";

import { useEffect, useRef, useState } from "react";

export function Bhajan() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const track = audio.current;
    if (!track) return;
    track.volume = 0.55;
    let started = false;

    const start = () => {
      if (started) return;
      track
        .play()
        .then(() => {
          started = true;
          setPlaying(true);
          window.removeEventListener("pointerdown", start);
          window.removeEventListener("keydown", start);
        })
        .catch(() => setPlaying(false));
    };

    start();
    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", start);
    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, []);

  function toggle() {
    const track = audio.current;
    if (!track) return;
    if (track.paused) {
      track.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      track.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audio} src="/audio/krishna-flute.mp3" loop preload="auto" />
      <button type="button" className="dk-bhajan" onClick={toggle} aria-pressed={playing}>
        {playing ? "Pause flute" : "Play flute"}
      </button>
    </>
  );
}
