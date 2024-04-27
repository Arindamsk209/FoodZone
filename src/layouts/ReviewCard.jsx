import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-gradient-to-br from-yellow-300 to-pink-300 border-2 border-purple-600 md:border-none p-5 rounded-lg shadow-lg">
      <div>
        <p className="text-purple-900">
        {props.text}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4 border-4 border-white" src={props.img} alt="img" />
        <h3 className="font-semibold text-purple-900">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;

