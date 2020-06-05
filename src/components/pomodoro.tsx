import React, { useRef, useState } from "react"

export const Pomodoro = () => {
  const padTime = (time: number) => {
    return time.toString().padStart(2, "0")
  }
  const [title, setTitle] = useState(`Countdown!`)
  const [timeLeft, setTimeLeft] = useState(3)
  const intervalRef = useRef(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const minutes = padTime(Math.floor(timeLeft / 60))
  const seconds = padTime(timeLeft - Number(minutes) * 60)

  const startTimer = () => {
    if (timerRunning) return

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1
        resetTimer()
        return 0
      })
    }, 1000)
    setTimerRunning(true)
  }

  const stopTimer = () => {
    if (!timerRunning) return
    clearInterval(intervalRef.current)
    setTimerRunning(false)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    setTimeLeft(25 * 60)
    setTimerRunning(false)
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}
