import dynamic from "next/dynamic";
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

const Index = () => {
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Feedback />
      <Blog />
      <Partners />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </Layout>
  );
};
export default Index;
