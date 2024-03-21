import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {

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

  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
      {userData && userData.about && (
        <div className="about_in">
          <div className="left">
            <div className="box px-5 pt-3 " >
              <h3 className="year ">{userData.about.exp_year}</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name ">{userData.about.name}</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
              {userData.about.description}
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
export default About;
