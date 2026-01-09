import React from 'react'
import { Link } from "react-router-dom";

function BarLinks() {
  return (
    <div className="container flex flex-col gap-3 md:hidden">
      <Link to="/">Home</Link>
      <Link to="/PostsPages">Posts</Link>
      <div className="flex h-9 w-full items-center justify-center rounded-xl bg-[#4346EF] text-white">
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default BarLinks
