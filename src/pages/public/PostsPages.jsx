import React from "react";
import Development1 from "../../../public/img/development1.png";
import Development2 from "../../../public/img/development2.png";
import Development3 from "../../../public/img/development3.png";

function PostsPages() {
  return (
    <main className="container">
      <section className="bg-[#F7F1FD] py-24">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-[60px] font-bold text-[#0F1729]">
            Explore Our Posts
          </h1>
          <p className="text-5 mb-8 text-[#6B7280]">
            Discover amazing content from talented writers across various topics
          </p>
          <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl bg-white p-3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text " placeholder="Search posts..." />
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="bg-[#F3F4F6 m-auto flex w-full  max-w-md justify-center rounded-[5px] bg-[#F3F4F6] p-2">
          <a
            className="w-full max-w-25 rounded-[5px] bg-white text-center text-[#000000]"
            href="#"
          >
            All
          </a>
          <a className="w-full max-w-25 text-center text-[#6B7280]" href="#">
            Technology
          </a>
          <a className="w-full max-w-25 text-center text-[#6B7280]" href="#">
            Productivity
          </a>
          <a className="w-full max-w-25 text-center text-[#6B7280]" href="#">
            Design
          </a>
        </div>
        <div className="dev-card mb-25 mt-8 flex justify-center gap-5">
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

export default PostsPages;
