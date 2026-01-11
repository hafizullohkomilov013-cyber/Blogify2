import React from 'react'
import BlogfyImg from "../../public/img/SVG.svg"
import BarLinks from './BarLinks';
import Button  from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const[open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 bg-white ...">
      <div className="container flex justify-between">
        <div className="flex cursor-pointer items-center gap-2">
          <img src={BlogfyImg} alt="" />
          <h2 className="text-[#4346EF]">Blogify</h2>
        </div>
        <div className="hidden items-center justify-center gap-3 md:flex">
          <Link to="/">Home</Link>
          <Link to="/PostsPages">Posts</Link>
          <Button variant="primary" > Login </Button>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden"
        >
          {open ? (
            <i class="fa-solid fa-x cursor-pointer text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars cursor-pointer text-2xl"></i>
          )}
        </div>
      </div>
      {open && <BarLinks />}
    </nav>
  );
}

export default Navbar
