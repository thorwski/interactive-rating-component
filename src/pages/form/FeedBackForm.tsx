import React, { useState } from "react";
import star_icon from "/src/assets/images/icon-star.svg";
import RatingButton from "../../components/button/RatingButton";
import SubmitButton from "../../components/button/SubmitButton";
import Submitted from "./Submitted";

const FeedbackForm: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  const handleSubmit = () => {
    if (selectedNumber !== null) {
      setSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  if (submitted) {
    return (
      <Submitted selectedNumber={selectedNumber}/>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-custom-gradient rounded-3xl text-base font-overpass max-w-md p-4 w-[400px] min-h-[365px] max-h-[365px]">
        <div>
          <button className="border-none bg-custom-darkBlue p-4 rounded-full cursor-default">
            <img className="w-4 h-4" src={star_icon} alt="rating star image" />
          </button>
          <h1 className="text-white text-3xl mt-6 mb-4">How did we do?</h1>
          <p className="text-custom-lightGrey mb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between items-center space-x-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <RatingButton
                key={num}
                number={num}
                isSelected={selectedNumber === num}
                onClick={handleNumberClick}
              />
            ))}
          </div>
          <div className="mt-4">
            <SubmitButton onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
