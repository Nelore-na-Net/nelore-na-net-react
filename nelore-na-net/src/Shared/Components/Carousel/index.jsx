import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .overlay h3 {
    margin: 0;
    font-size: 1.5em;
  }
  @media (min-width: 768px) {
    .swiper-slide img {
      border-radius: 10px;
      max-height: 400px;
      width: 1200px;
    }
    .overlay {
      height: 400px;
      .text {
        margin: 0 auto;
        width: 600px;
        h3 {
          font-size: 2em;
          line-height: 30px;
        }
        h4 {
          font-size: 1.5em;
          line-height: 25px;
          margin-top: 10px;
        }
      }
    }
  }
`;

const Carousel = ({ news }) => {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`/post/${item.slug}`}>
              <img src={item.imagem} alt={item.titulo} />
              <div className="overlay">
                <div className="text">
                  <h3>{item.titulo}</h3>
                  <h4>{item.descricao}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
};

export default Carousel;
