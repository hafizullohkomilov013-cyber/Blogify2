import React from "react";
import Development1 from "../../public/img/development1.png";
import Development2 from "../../public/img/development2.png";
import Development3 from "../../public/img/development3.png";
import HeroImg from "../../public/img/HeroImg.png";
import Button from "./Button";

function Hero() {
  return (
    <section>
      <section className="bg-[#F7F1FD] pt-25 pb-25">
        <div className="heroContainer container flex justify-center">
          <div className="w-full max-w-125">
            <div className="hero-box">
              <h2 className="text-[60px] font-bold text-[#0F1729]">
                Create, Read,
              </h2>
              <h2 className="-mt-7 bg-linear-to-r from-[#6365f1] to-[#330265] bg-clip-text text-4xl text-[60px] font-bold text-transparent">
                Inspire.
              </h2>
            </div>
            <p className="discover mt-5 mb-5 pr-30 text-[#6B7280]">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="btns-hero flex gap-4">
              <Button variant={"secendery"}>
                Explore Posts <i className="fa-solid fa-arrow-right"></i>
              </Button>
              <Button variant={"button3"}>
                Get Started
              </Button>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
