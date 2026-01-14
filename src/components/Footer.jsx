import React from "react";
import BlogfyImg from "../../public/img/SVG.svg";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mb-8 border-2 border-[#c7c7c74d] pt-12 pb-8">
      <section className="footer-box container flex justify-between gap-5">
        <div className="w-full max-w-95">
          <div className="flex cursor-pointer items-center gap-2">
            <img src={BlogfyImg} alt="" />
            <h2 className="text-[#4346EF]">Blogify</h2>
          </div>
          <p className="mt-4 text-[#6B7280]">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[24px] font-bold">Quick Links</h2>
          <div className="flex flex-col gap-2.5 text-[#6B7280]">
            <Link to="/">Home</Link>
            <Link to="/PostsPages">Posts</Link>
            <Link> Login </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-[24px] font-bold">Connect</h2>
          <div className="flex gap-3 text-2xl">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
