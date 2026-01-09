import React from "react";
import Overlay from "../../public/img/Overlay.png";
import Overlay2 from "../../public/img/Overlay2.png";
import Overlay3 from "../../public/img/Overlay3.png";
import Development1 from "../../public/img/development1.png";
import Development2 from "../../public/img/development2.png";
import Development3 from "../../public/img/development3.png";
import HeroImg from "../../public/img/HeroImg.png";

function Main() {
  return (
    <main>
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
              <button className="max-w-50 rounded-2xl bg-linear-65 from-[#4346EF] to-[#8524E5] pt-3 pr-7 pb-3 pl-7 text-white">
                Explore Posts <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="rounded-2xl bg-white pt-3 pr-7 pb-3 pl-7">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </section>
      <section className="container pt-20 pb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0F1729]">
            Why Choose Blogify?
          </h2>
          <p className="mt-4 text-[#6B7280]">
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
        </div>
        <div className="box-card mt-16 flex justify-center gap-8">
          <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
            <img src={Overlay} alt="" />
            <h2 className="mt-4 mb-2">Fast</h2>
            <p className="text-[#6B7280]">
              Lightning-fast performance with modern web technologies for the
              best reading experience.
            </p>
          </div>
          <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
            <img src={Overlay2} alt="" />
            <h2 className="mt-4 mb-2">Secure</h2>
            <p className="text-[#6B7280]">
              Your data is protected with industry- standard security practices
              and encryption.
            </p>
          </div>
          <div className="w-full max-w-[384px] rounded-2xl border-2 border-[#c4c4c5] p-9">
            <img src={Overlay3} alt="" />
            <h2 className="mt-4 mb-2">Easy to Manage</h2>
            <p className="text-[#6B7280]">
              Intuitive admin dashboard makes content management effortless and
              enjoyable.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="post mb-12 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <p>Check out our most recent articles</p>
          </div>
          <button>
            View All <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="dev-card mb-25 flex justify-center gap-5">
          <div className="w-full max-w-90 rounded-2xl border-2 border-[#c4c4c5]">
            <img className="dev-img" src={Development1} alt="" />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 18, 2025
              </h2>
              <h2 className="mb-2 text-[20px] font-bold text-[#0F1729]">
                Mastering Productivity
              </h2>
              <p className="mb-3.5 text-[14px] text-[#6B7280]">
                EProven strategies and tools to boost your productivity and
                achieve your goals faster.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full max-w-90 rounded-2xl border-2 border-[#c4c4c5]">
            <img className="dev-img" src={Development2} alt="" />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 15, 2025
              </h2>
              <h2 className="mb-2 text-[20px] font-bold text-[#0F1729]">
                Design Principles That Matter
              </h2>
              <p className="mb-3.5 text-[14px] text-[#6B7280]">
                Essential design principles every creator should know to build
                stunning user experiences.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full max-w-90 rounded-2xl border-2 border-[#c4c4c5]">
            <img className="dev-img" src={Development3} alt="" />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 20, 2025
              </h2>
              <h2 className="mb-2 text-[20px] font-bold text-[#0F1729]">
                The Future of Web Development
              </h2>
              <p className="mb-3.5 text-[14px] text-[#6B7280]">
                Exploring the latest trends and technologies shaping the future
                of web development in 2024.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
