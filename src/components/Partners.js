import { Swiper, SwiperSlide } from "swiper/react";
import { partnersSliderProps } from "../sliderProps";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const partnersLogo = {
  light: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
    "img/partners/5.png",
    "img/partners/6.png",
    "img/partners/7.png",
    "img/partners/8.png",
  ],
  dark: [
    "img/partners/light/1.png",
    "img/partners/light/2.png",
    "img/partners/light/3.png",
    "img/partners/light/4.png",
    "img/partners/light/5.png",
    "img/partners/light/6.png",
    "img/partners/light/7.png",
    "img/partners/light/8.png",
  ],
};
const Partners = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_partners">
        <div className="container">
          <div className="partners_list">
            <Swiper {...partnersSliderProps} className="owl-carousel">
              {partnersLogo[dark ? "dark" : "light"].map((partnersLogo, i) => (
                <SwiperSlide className="item" key={i}>
                  <a href="#">
                    <img src={partnersLogo} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
