import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  {
    src: "https://images.playground.com/0253ecaf73a14485be8cc8c252ecf07a.jpeg",
    prompt: "Prompts 1",
  },
  {
    src: "https://images.playground.com/c05a45b5f6334827818f988e4c2ea63f.jpeg",
    prompt: "Prompts 2",
  },
  {
    src: "https://images.playground.com/8e2747b467a24adaad8df1ab4e4fe7c3.jpeg",
    prompt: "Prompts 3",
  },
  {
    src: "https://images.playground.com/6870458c7eab468b97568925d4855301.jpeg",
    prompt: "Prompts 4",
  },
];


const sliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};

const Bg = () => {
  return (
      <div className='bg-fixed bg-cover bg-center bg-[url("https://assets.playgroundai.com/87d75239-2fe6-4dca-848e-67a7a79fe56c.jpg")]'>
        <div className="bg-black text-center bg-opacity-80 h-full space-y-14">
          <h1 className='py-5'>Explore Our Generated Images</h1>
          <div className="mx-16 my-18 pb-14">

            <Slider {...sliderSettings}>
              {imageData.map((item, index) => (
                <div
                  key={index}
                  className="h-96  group overflow-hidden relative"
                >
                  <img
                    src={item.src}
                    className="object-cover rounded-lg px-3 object-top w-full h-full"
                  />
                  <h3 className="absolute bottom-0 right-0 left-0 text-center bg-black text-sm bg-opacity-75 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {item.prompt}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      );
}

export default Bg
