import Head from "next/head";
import Layout from "../src/layouts/Layout";
import Mouse from "../src/layouts/Mouse";
const Intro = () => {
  return (
    <Layout>
      <Head>
        <title>Orido | Intro</title>
      </Head>
      <div className="orido_tm_intro">
        <div className="orido_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
            rel="noreferrer"
            className="pricing-info anim"
          >
            -70%
          </a>
        </div>
        <div className="short_info">
          <img src="img/logo/logo.png" alt="" />
          <h3>Personal React Nextjs Portfolio Template</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <img src="img/intro/1.png" alt="" />
              <h3 className="title">Light Demo</h3>
            </div>
            <a
              className="intro_link"
              href="/"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <div className="right">
            <div className="desc">
              <img src="img/intro/2.png" alt="" />
              <h3 className="title">Dark Demo</h3>
            </div>
            <a
              className="intro_link"
              href="/index-dark"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
      <Mouse />
    </Layout>
  );
};
export default Intro;
