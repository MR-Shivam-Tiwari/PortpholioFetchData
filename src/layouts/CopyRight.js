import axios from "axios";
import { useEffect, useState } from "react";

const CopyRight = () => {
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
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              <a href="#">
                {userData && userData.about && (
                  <p className="fs-2 mb-2">

                    {userData.about.name}
                  </p>
                )}
              </a>
            </div>
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by{" "}
                <a href="https://themeforest.net/user/codeefly" target="_blank">
                  Codeefly.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
