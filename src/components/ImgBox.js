import React from "react";

function ImgBox({ src, alt, ...props }) {
  return <img className="w-full h-full object-cover" src={src} alt={alt} {...props} />;
}

export default ImgBox;
