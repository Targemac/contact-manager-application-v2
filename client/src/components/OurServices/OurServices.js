import React from "react";
import style from "./OurServices.module.css";

const OurServices = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.services_title}>Our Services</div>
      <div className={style.services_grp}>
        <div className={style.services_item}>
          <div className={style.item_number}>01</div>
          <div className={style.item_head}>Contetnt Production</div>
          <div className={style.item_body}>we deliver high ROI</div>
        </div>
        <div className={style.services_item}>
          <div className={style.item_number}>02</div>
          <div className={style.item_head}>Business Development</div>
          <div className={style.item_body}>we deliver high ROI</div>
        </div>
        <div className={style.services_item}>
          <div className={style.item_number}>03</div>
          <div className={style.item_head}>Development</div>
          <div className={style.item_body}>we deliver high ROI</div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
