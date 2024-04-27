import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  const text =["A culinary masterpiece! From the moment we walked in, we were greeted with warmth and hospitality. The dishes were not only delicious but also beautifully presented. It's evident that the chef puts their heart and soul into every creation. Highly recommend for anyone looking for a memorable dining experience!","Exceptional in every way! The menu offered a delightful variety, and each dish was a revelation of flavors. The restaurant's ambiance was elegant yet cozy, perfect for a romantic dinner or a gathering with friends. The staff was knowledgeable and provided excellent recommendations. Can't wait to return","An absolute gem of a restaurant! The fusion of flavors in every dish was extraordinary, leaving me craving more. The ambiance was charming, and the staff was incredibly friendly and attentive. Can't wait to explore their menu further!"]
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" text ={text[0]} />
        <ReviewCard img={img2} name="John Deo"text ={text[1]} />
        <ReviewCard img={img3} name="Victoria Zoe"text ={text[2]} />
      </div>
    </div>
  );
};

export default Review;
