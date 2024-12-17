import animation from "../assets/cooking.json";

import Lottie from "lottie-react";
const Banner = () => {
  return (
    <section
      className="bg-contain bg-fixed"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-95 flex-col-reverse md:flex-row items-center justify-around "
      >
        <div className="text space-y-4  text-center md:text-start ">
          <h1 className="text-5xl font-bold">
            Basic <span className="text-orange-400"> Authentication </span>{" "}
            Template,
          </h1>
          <div className=" max-w-[520px] md:rounded-full p-2 bg-orange-400 text-white">
            <marquee direction="right">
              For a limited time, enjoy 20% off on all items storewide! Yes, you
              heard that right! From trendy apparel and stylish accessories to
              the latest gadgets and home essentials, everything is included in
              this fantastic offer. Now is the perfect time to refresh your
              wardrobe, upgrade your tech, or spruce up your living space
              without breaking the bank.
            </marquee>
          </div>

          <h2 className="text-3xl">Build in a best way</h2>
          <div className="buttons flex gap-3 justify-center md:justify-start">
            <button className=" ">Join Now</button>
            <button className=" ">See More</button>
          </div>
        </div>
        <div className="max-w-[400px] ">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;