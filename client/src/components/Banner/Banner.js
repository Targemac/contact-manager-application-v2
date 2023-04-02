import React from "react";
import bannerStyle from "./Banner.module.css";
import bannerImg from "../../assets/char1.png";
import {
  FaLinkedinIn,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={bannerStyle.main_wrapper}>
      <div className={bannerStyle.headline_1}>
        Boost Your Profits By Engaging with our CMA From Anywhere Across The
        Globe
      </div>
      <div className={bannerStyle.headline_2}>
        Try the easy-to-use CMA platform for free
      </div>
      <div className={bannerStyle.banner_col_grp}>
        <div className={bannerStyle.banner_col_1}>
          <div className={bannerStyle.btn_grp}>
            <Link to="/get-started">Get Started</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className={bannerStyle.headline_3}>
            A comprehensive dictionary database
          </div>
          <div className={bannerStyle.statistics_grp}>
            <div className={bannerStyle.statistics_grp_sub}>
              <div className={bannerStyle.statistics_grp_sub_head}>8+</div>
              <div className={bannerStyle.statistics_grp_sub_body}>
                Years of experience
              </div>
            </div>
            <div className={bannerStyle.statistics_grp_sub}>
              <div className={bannerStyle.statistics_grp_sub_head}>100+</div>
              <div className={bannerStyle.statistics_grp_sub_body}>
                places in the world
              </div>
            </div>
            <div className={bannerStyle.statistics_grp_sub}>
              <div className={bannerStyle.statistics_grp_sub_head}>10k</div>
              <div className={bannerStyle.statistics_grp_sub_body}>
                investors
              </div>
            </div>
          </div>
        </div>
        <div className={bannerStyle.banner_col_2}>
          <div className={bannerStyle.banner_col_2_img}>
            <img src={bannerImg} alt="" />
          </div>
          <div className={bannerStyle.banner_col_2_socials}>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
