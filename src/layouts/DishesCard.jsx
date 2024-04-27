import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-md rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500">
      <img className="rounded-xl w-full h-48 object-cover" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl text-white pt-4">{props.title}</h3>
        <div className="flex justify-center items-center space-x-1">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarHalf className="text-yellow-400" />
        </div>
        <div className="flex justify-center items-center space-x-2">
          <h3 className="font-semibold text-lg text-white">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
