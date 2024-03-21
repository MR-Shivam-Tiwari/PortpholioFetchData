import { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import axios from "axios";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);

  const [detailsPopup, setDetailsPopup] = useState(false);
  const swiperRef = useRef(null); // Create a ref to hold the Swiper instance
  const [userData, setuserData] = useState(null)
  useEffect(() => {
    axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then(response => {
        setuserData(response.data.user)
      })
      .catch(error => {
        console.log("Error fetching user data :", error)

      })
  }, []);
  const handlePrevButtonClick = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev(); // Navigate to the previous slide
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext(); // Navigate to the next slide
    }
  };


  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                ref={swiperRef} // Attach the ref to the Swiper instance
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
                navigation={{ // Enable navigation buttons
                  prevEl: '.prev_button',
                  nextEl: '.next_button',
                }}
              >
                {userData && userData.projects && userData.projects.map((project, i) => (
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="">
                        <img src={project.image.url} alt="" />
                        <div
                          className=""
                          data-img-url={project.image.url}
                        />
                      </div>
                      <div className="details">
                        <span className="category">Youtube</span>
                        <h3 className="title">
                          <span>{project.title}</span>
                        </h3>
                      </div>
                      <a
                        className="orido_tm_full_link popup-youtube"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      />
                    </div>
                  </SwiperSlide>
                ))}



              </Swiper>
              <button className="prev_button" onClick={handlePrevButtonClick}>
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </button>
              <button className="next_button" onClick={handleNextButtonClick}>
                <img className="svg" src="img/svg/next.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
