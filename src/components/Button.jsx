import React, { Children } from 'react'

function Button({children, variant}) {
    
  let variants = {
    primary:
      "flex h-9 w-16 items-center justify-center rounded-xl bg-[#4346EF] text-white",
    secendery:
      "max-w-50 rounded-2xl border-[2px]  border-2 border-gray-500 bg-linear-65 from-[#4346EF] to-[#8524E5] pt-3 pr-7 pb-3 pl-7 text-white",
    button3: 
      "rounded-2xl bg-white pt-3 pr-7 pb-3 pl-7",
  };
  return <button className={variants[variant]}>{children}</button>
}

export default Button
