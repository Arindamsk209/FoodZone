import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h3 className=" text-backgroundColor font-semibold text-5xl text-black">
        Welcome to a our restuarant where food is not just a meal, but an experience to cherish."
        </h3>
        <p className="  text-black">
        Welcome to our culinary haven, where passion meets palate in a symphony of flavors. At FoodyZone, 
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
