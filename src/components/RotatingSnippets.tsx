"use client";

import { useState, useEffect } from "react";

const snippets = [
  "> building: mandel-cli",
  "> tinkering: langgraph agents",
  "> breaking: openai evals",
  "> exploring: recursive thought chains",
  "> debugging: why does my ai think it's a tree?",
  "> refactoring: replaced recursion with recursion lol",
];

export default function RotatingSnippets() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSnippet = snippets[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentSnippet.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentSnippet.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % snippets.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <div className="font-mono text-terminal-green">
      {displayText}
      <span className="animate-pulse">_</span>
    </div>
  );
}

