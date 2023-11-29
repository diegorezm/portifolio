"use client"
import { useState, useEffect } from "react"

interface props {
  text: string,
  delay: number,
  className?: string
}

export default function TypeAnimation({ text, delay, className = "type__animation" }: props) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])
  return (
    <span className={className}>{currentText}</span>
  )
}
