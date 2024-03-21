import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";
import axios from "axios";

const counts = [
  { name: "Trainings", value: 219 },
  { name: "Written Book", value: 48 },
  { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "Figma", value: 90, icon: "img/svg/figma.svg" },
  { name: "After Effect", value: "80", icon: "img/svg/Ae.svg" },
  { name: "Photoshop", value: "85", icon: "img/svg/photoshop.svg" },
  { name: "XD", value: "95", icon: "img/svg/Xd.svg" },
  { name: "Illustrator", value: "90", icon: "img/svg/illustrator.svg" },
  { name: "Indesign", value: "75", icon: "img/svg/Id.svg" },
];

const experiences = [
  {
    company: "Bauen Software Inc.",
    designation: "Product Designer",
    time: "2021 - Present",
  },
  {
    company: "Bauen Software Inc.",
    designation: "UX Designer",
    time: "2020 - 2021",
  },
  {
    company: "Bauen Software Inc.",
    designation: "UI Designer",
    time: "2018 - 2020",
  },
  {
    company: "Bauen Software Inc.",
    designation: "Web Designer",
    time: "2016 - 2018",
  },
];

const educations = [
  {
    institution: "Stanford Univercity",
    certificate: "Web Design Course",
    time: "2021 - Present",
  },
  {
    institution: "Art Univercity of New York",
    certificate: "Art Director Course",
    time: "2020 - 2021",
  },
  {
    institution: "Amazon College",
    certificate: "IOS Development",
    time: "2018 - 2020",
  },
  {
    institution: "Univercity of Texas",
    certificate: "UX Expert",
    time: "2017 - 2018",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab === value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);
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
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    You can express yourself however you want and whenever you
                    want, for free. You can customize a template or make your
                    own from scratch, with an immersive library at your
                    disposal. You can express yourself however you want and
                    whenever you free.
                  </p>
                  <p>
                    You can customize a template or make your own from scratch,
                    with an immersive library at your disposal.
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {userData && userData.skills && userData.skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.image.url}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.percentage}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {userData && userData.timeline && userData.timeline.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                {/* Assuming 'experience' object contains 'startDate' and 'endDate' */}
                                <span className="year">{experience.startDate.split('-')[0]} - {experience.endDate.split('-')[0]}</span>

                                <span className="company">
                                  {experience.company_name}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.jobTitle}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
