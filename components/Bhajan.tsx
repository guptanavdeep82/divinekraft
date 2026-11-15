"use client";

import { useEffect, useRef, useState } from "react";

export function Bhajan() {
  const audio = useRef<HTMLAudioElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const track = audio.current;
    if (!track) return;
    track.loop = true;
    track.volume = 0.55;
    track.currentTime = 0;

    const begin = () => {
      if (userPaused.current) return;
      if (!track.paused) {
        setPlaying(true);
        return;
      }
      const attempt = track.play();
      attempt
        ?.then(() => setPlaying(true))
        .catch(() => {
          if (track.paused) setPlaying(false);
        });
    };

    const onGesture = () => begin();
    const events = ["pointerdown", "touchstart", "touchend", "click", "keydown", "scroll"] as const;
    for (const event of events) {
      window.addEventListener(event, onGesture, { capture: true, passive: true });
    }

    const onVisible = () => {
      if (document.visibilityState === "visible") begin();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", begin);
    track.addEventListener("canplay", begin);

    begin();

    return () => {
      for (const event of events) {
        window.removeEventListener(event, onGesture, { capture: true });
      }
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", begin);
      track.removeEventListener("canplay", begin);
    };
  }, []);

  function toggle() {
    const track = audio.current;
    if (!track) return;
    if (track.paused) {
      userPaused.current = false;
      track.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      return;
    }
    userPaused.current = true;
    track.pause();
    setPlaying(false);
  }

  return (
    <>
      <audio ref={audio} src="/audio/krishna-flute.mp3" loop autoPlay preload="auto" />
      <button type="button" className="dk-bhajan" onClick={toggle} aria-pressed={playing}>
        {playing ? "Pause flute" : "Play flute"}
      </button>
    </>
  );
}
