
import { useEffect, useState } from "react";
import axios from 'axios'

const Header = ({ dark }) => {
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
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
          {userData && userData.about && (
            <p className="fs-2 mb-2">

            {userData.about.name}
            </p>
          )}
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
