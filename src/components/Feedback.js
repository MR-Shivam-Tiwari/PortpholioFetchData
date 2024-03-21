import axios from "axios";
import { useEffect, useState } from "react";

const Feedback = ({ dark }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then(response => {
        setUserData(response.data.user);
      })
      .catch(error => {
        console.log("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          {userData && userData.testimonials && userData.testimonials.length > 0 ? (
            <div className="testimonials_in">
              <img src={userData.testimonials[0].image.url} alt="" />
              <div className="info">
                <div className="text">
                  <p>{userData.testimonials[0].review}</p>
                </div>
                <div className="details">
                  <h3 className="name">
                    <span>{userData.testimonials[0].name}</span>
                  </h3>
                  <span className="job">{userData.testimonials[0].position}</span>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
