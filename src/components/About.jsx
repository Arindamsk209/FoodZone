import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <div className="w-1/2">
        <h1 className="font-semibold text-4xl text-center md:text-start mb-4">
          About Us
        </h1>
        <div className="space-y-4">
          <p className="text-center md:text-left">
            Welcome to our culinary haven, where passion meets palate in a symphony of flavors. At [FoodyZone], we strive to redefine the dining experience, marrying tradition with innovation to create unforgettable moments around the table. Our journey began with a simple desire: to celebrate the richness of gastronomy and share it with the world.
          </p>
          <p className="text-center md:text-left">
            With a commitment to quality ingredients, expert craftsmanship, and unparalleled hospitality, we invite you to embark on a gastronomic adventure that tantalizes the senses and nourishes the soul. Whether you're a seasoned food enthusiast or a curious newcomer, join us as we explore the boundless possibilities of taste and texture, one dish at a time.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start mt-4">
          <Button title="Learn More" />
        </div>
      </div>
      <div className="w-1/2">
        <img src={img} alt="img" className="w-full" />
      </div>
    </div>
  );
};

export default About;
