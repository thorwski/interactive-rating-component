import React from "react";
import thankYouImage from "/src/assets/images/illustration-thank-you.svg";

type SubmittedProps = {
  selectedNumber: number | null;
};

const Submitted: React.FC<SubmittedProps> = ({ selectedNumber }) => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="flex flex-col items-center text-center bg-custom-gradient rounded-3xl max-w-md p-4 w-[400px] min-h-[365px] max-h-[365px]">
        <div>
          <img src={thankYouImage} alt="Thank you" />
        </div>
        <div className=" bg-custom-darkBlue text-custom-orange px-5 py-1 rounded-full  mt-6 mb-6">
          <p>You selected {selectedNumber} out of 5</p>
        </div>
        <h1 className="text-3xl text-white mb-4">Thank you!</h1>
        <p className="text-custom-lightGrey p-1">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Submitted;
