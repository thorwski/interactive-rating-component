import React from "react";

type RatingButtonProps = {
  number: number;
  isSelected: boolean;
  onClick: (number: number) => void;
};

const RatingButton: React.FC<RatingButtonProps> = ({
  number,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`${
        isSelected ? "bg-white text-custom-veryDarkBlue" : "bg-custom-darkBlue"
      } flex justify-center items-center text-custom-lightGrey rounded-full hover:bg-custom-orange hover:text-custom-veryDarkBlue sm:w-14 w-11 sm:h-14 h-11 font-bold`}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default RatingButton;
