import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";
import PreLoader from "./PreLoader";
const Layout = ({ children }) => {
  useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Orido | Home</title>
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
