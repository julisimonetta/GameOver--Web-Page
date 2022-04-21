import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import imagenes from "../assets/carouselImages/imagenes";
import "../styles/carousel.css";

export default function App() {
  return (
    <>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/trending.png"}
          className="trending-title"
        />
      </div>

      <div className="divcarousel">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            "@1.75": {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card-carousel sonic">
              <img
                src={imagenes.sonic}
                alt="img"
                className="image sonic-image"
              />
            </div>
            <img
              src={imagenes.sonicLogo}
              className="titulocarousel"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel kirby">
              <img
                src={imagenes.kirby}
                alt="img"
                className="image kirby-image"
              />
            </div>
            <img
              src={imagenes.kirbyLogo}
              className="titulocarousel"
              alt="img"
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-carousel pikachu">
              <img
                src={imagenes.pikachu}
                alt="img"
                className="image pikachu-image"
              />
            </div>
            <img
              src={imagenes.pokemonLogo}
              className="titulocarousel"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel yoshi">
              <img
                src={imagenes.yoshi}
                alt="img"
                className="image yoshi-image"
              />
            </div>
            <img
              src={imagenes.marioLogo}
              className="titulocarousel"
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel liukang">
              <img
                src={imagenes.liukang}
                alt="img"
                className="image liukang-image"
              />
            </div>
            <img src={imagenes.MKLogo} className="titulocarousel" alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel apex">
              <img src={imagenes.apex} alt="img" className="image apex-image" />
            </div>
            <img src={imagenes.apexLogo} className="titulocarousel" alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
