import React, { Children } from "react";
import Slider from "react-slick";

function MySlider({ settings, children, ...props }) {
  const defaultSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...(settings ? settings : defaultSetting)} {...props}>
      {children}
    </Slider>
  );
}

export default MySlider;
