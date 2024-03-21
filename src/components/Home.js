import { useEffect, useState } from "react";
import axios from 'axios'
import cheerio from 'cheerio';
const Home = ({ dark }) => {
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

  const thumbnailUrl = "https://img.youtube.com/vi/7e90gBu4pas/maxresdefault.jpg"; // YouTube video ke thumbnail ka URL



  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          {userData && userData.about && (
            <div className="details">
              <div className="short">
                <h3>
                  {userData.about.name} <img className="svg" src="img/svg/hi.svg" alt="" />
                </h3>
                <span className="job">{userData.about.title}</span>
              </div>
              <div className="text">
                <p>
                  {userData.about.subTitle}
                </p>
              </div>
              <div className="buttons">
                <div className="orido_tm_boxed_button">
                  <a className="anchor " href="#contact">
                    Say Hello{" "}
                    <img className="svg" src="img/svg/send.svg" alt="" />
                  </a>
                </div>
                <div className="orido_tm_simple_button">
                  <a className="line_effect anchor" href="#portfolio">
                    My Works{" "}
                    <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className="orido_tm_follow ">
          <span className="mt-2">Follow me:</span>
          <ul>
            {userData && userData.social_handles.map(handle => (
              <li key={handle._id}>
                <a href={handle.url}>
                  <img className="p-2" src={handle.image.url} alt={handle.platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
            style={{ width: "30px", height: "45px" }}
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
        {userData && userData.about && (
          <img
            src={`${userData.about.avatar.url}`}
            alt=""
          />
        )}
          <div className="video_button">
            <a className="popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">
              <img className="anim_circle" style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit:"cover" }} src={thumbnailUrl} alt="YouTube Video Thumbnail" />
              <img className="svg" src="img/svg/play.svg" alt="Play Button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
