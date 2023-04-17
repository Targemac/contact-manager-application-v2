import React from "react";
import style from "./Article.module.css";
import img1 from "../../assets/12.jpg";
import img2 from "../../assets/7.jpg";
import { Link } from "react-router-dom";

const Article = (props) => {
  return (
    <section
      className={
        props.direction === "reverse" ? style.reverse_wrapper : style.wrapper
      }
    >
      <div className={style.image_box}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className={style.description_box}>
        <div className={style.headline_1}>We help your business online</div>
        <div className={style.headline_2}>
          We provide digital insights to help you take control of your business
        </div>
        <ul className={style.bullet_grp}>
          <li>strategy tailored to your business</li>
          <li>result for achivingthe goals</li>
          <li>survive with a strategy</li>
        </ul>
        <div className={style.action_box}>
          <Link to="/learn-more">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Article;
