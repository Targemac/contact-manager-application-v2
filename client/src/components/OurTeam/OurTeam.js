import React from "react";
import style from "./OurTeam.module.css";
import memeberPhoto from "../../assets/char2.jpg";

const OurTeam = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.headline}>meet our team</div>
      <div className={style.team_grp}>
        <div className={style.team_member}>
          <img src={memeberPhoto} alt="" />
          <div className={style.memeber_name}>Charles Targema</div>
          <div className={style.memeber_role}>Chief executive officer</div>
        </div>
        <div className={style.team_member}>
          <img src={memeberPhoto} alt="" />
          <div className={style.memeber_name}>Charles Targema</div>
          <div className={style.memeber_role}>Chief executive officer</div>
        </div>
        <div className={style.team_member}>
          <img src={memeberPhoto} alt="" />
          <div className={style.memeber_name}>Charles Targema</div>
          <div className={style.memeber_role}>Chief executive officer</div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
