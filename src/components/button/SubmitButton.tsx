import React from "react";

type SubmitButtonProps = {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({onClick}) => {
  return (
    <button className="bg-custom-orange uppercase font-bold text-custom-veryDarkBlue w-full py-3 rounded-full hover:bg-white tracking-widest" onClick={onClick}>
      Submit
    </button>
  )
}

export default SubmitButton;

