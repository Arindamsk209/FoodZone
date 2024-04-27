import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Special Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Special Sweet Dish" price="$16.99" />
        <DishesCard img={menu2} title="Special Thali" price="$18.99" />
        <DishesCard img={menu3} title="Thandori chicken" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
