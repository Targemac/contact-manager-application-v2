import React from "react";
import style from "./Testimonial.module.css";
import volunteerPhoto from "../../assets/charles targema (2).jpg";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.testimonial_heading}>What people say about us</div>
      <div className={style.testimonial_grp}>
        <div className={style.photo_box}>
          <img src={volunteerPhoto} alt="" />
        </div>
        <div className={style.description}>
          <div className={style.row_1}>
            <FaQuoteRight />
          </div>
          <div className={style.row_2}>
            I honestly can not explain the way i feel, the satifcation your
            products brig to me and my household. keep up the good work.
          </div>
          <div className={style.row_3}>
            <div className={style.name}>Kelvin Ujanah</div>
            <div className={style.occupation}>Business Man</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
