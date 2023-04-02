import React from "react";
import style from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.heading}>Subscribe to our newsletter</div>
      <form action="" method="post">
        <div className={style.body}>
          <input type="email" name="" id="" placeholder="example@mail.com" />
          <input type="submit" value="Subscribe" />
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
