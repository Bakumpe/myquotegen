import React, { useState } from "react";


function QuoteGenerator({ quotes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < quotes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="myQuotes">
        <div className="quotes">
          <h2>{quotes[currentIndex].quote}</h2>
          <p>
            <em>---  {quotes[currentIndex].author}  --</em>
          </p>
        </div>

        <div className="buttons">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="button"
          >
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === quotes.length - 1}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default QuoteGenerator;
