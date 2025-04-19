"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const FIVE_MINUTES: number = 60 * 5;

export default function Home() {
  const [secondsLeft, setSecondsLeft] = useState<number>(FIVE_MINUTES);
  const [timer, setTimer] = useState<string>(formatTime(FIVE_MINUTES))

  function formatTime(value: number) {
    const s = value % 60 >= 10 ? value % 60 : `0${value % 60}`;
    const m = Math.floor(value / 60);

    return `${m}:${s}`;
  }

  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setInterval(() => setSecondsLeft(prev => prev - 1), 1000)
      setTimer(formatTime(secondsLeft - 1))

      return () => clearInterval(timerId)
    }
  })


  return (
    <div className={styles.page}>
      <h1>Mark Baptist Welcomes You</h1>
      <div className={styles.timerContainer}>
        <h1>{timer}</h1>
      </div>      
      <h1>The Service is about to Start</h1>
    </div>
  );
}
