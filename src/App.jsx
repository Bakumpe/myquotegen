import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css"

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
];

function App() {
  return (
    <>
    <div className="head">
      <h1>Quote Generator</h1>
    </div>
      <QuoteGenerator quotes={quotes} />
    </>
  );
}

export default App;
