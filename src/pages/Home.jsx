import React from "react";
import { Link } from "react-router-dom";
import "../assets/Home.scss";
import AppRouter from "../router/Routes";

const Home = () => {
  return (
    <>
      <div class="pre_video_wrap main">
        <div class="content">

          <video class="main_video" autoplay muted playsinline poster="assets/video/intro_thumbnail.jpg">
            <source src="assets/video/intro.mp4" type="video/mp4" />
          </video>

          <div class="main-title_box">
            <h1 class="main_title">
              <img src="img/main_logo.png" alt="2021 FOREIGN COMPANY DAY" />
            </h1>
            <h1 class="main_brand">
              <img src="img/brand-logo.png" alt="FORCIA" />
            </h1>
            <div class="afterPlay">
              <button type="button" class="btn"><Link to="/Main" className="skip">Skip</Link></button>
              <div class="footer" id="footer">
                <div class="chrome_download">
                  <span class="msg">This website is optimized for Google Chrome browser.</span>
                  <a class="btn_chrome" href="https://www.google.com/intl/ko/chrome/" title="Open in new window" target="_blank"><span>Download</span></a>
                </div>
              </div>
            </div>
          </div>

          <strong class="miceview_logo">
            <img src="img/logo_elypecs.png" alt="elypecs" />
          </strong>

        </div>
      </div>
      <AppRouter></AppRouter>
    </>


  )
}

export default Home;