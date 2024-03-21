import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ExpertAreas from "../src/components/ExpertAreas";
import Feedback from "../src/components/Feedback";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import CopyRight from "../src/layouts/CopyRight";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
import ProgressBar from "../src/layouts/ProgressBar";
const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});

const IndexDark = () => {
  useEffect(() => {
    return () => {
      document.querySelector("body").classList.add("dark");
    };
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header dark />
      <Home dark />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Feedback dark />
      <Blog />
      <Partners dark />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </Layout>
  );
};
export default IndexDark;
