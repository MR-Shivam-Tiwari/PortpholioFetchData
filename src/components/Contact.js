import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
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
  const thumbnailUrl = "https://img.youtube.com/vi/7e90gBu4pas/maxresdefault.jpg";

  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a className="popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                <img className="anim_circle" style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit: "cover" }} src={thumbnailUrl} alt="YouTube Video Thumbnail" />
                <img className="svg" src="img/svg/play.svg" alt="Play Button" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    {userData && userData.about && (
                      <a className="line_effect" href="#">
                        {userData.about.phoneNumber}
                      </a>
                    )}
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    {userData && userData.email && (
                      <a className="line_effect" href="#">
                        {userData.email}
                      </a>
                    )}
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
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
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
