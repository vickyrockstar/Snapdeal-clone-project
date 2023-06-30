import React from "react";
import c1 from "../images/card1.png";
import c2 from "../images/card2.png";
import c3 from "../images/card3.png";
import c4 from "../images/card4.png";
import s1 from "../images/social/facebook.png";
import s2 from "../images/social/twitter.png";
import s3 from "../images/social/instagram.png";
import s4 from "../images/social/linkedin.png";
import s5 from "../images/social/youtube.png";
import s6 from "../images/social/telegram.png";
import s7 from "../images/social/whatsapp.png";
// import "./footer.css"
import style from "../Navbar.module.css";

export const Footer = () => {
  return (
    <>
      <div className={style.footwrap}>
        <div className={style.row}>
          <div className={style.col}>
            <h6>POLICY INFO</h6>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Sale</a>
            <a href="">Terms of Use</a>
            <a href="">Report Abuse & Takedown Policy</a>
            <a href="">FAQ</a>
          </div>
          <div className={style.col}>
            <h6>COMPANY</h6>
            <a href="">Impact@SnapDeal</a>
            <a href="">Careers</a>
            <a href="">Blog</a>
            <a href="">Sitemap</a>
            <a href="">Contact Us</a>
          </div>
          <div className={style.col}>
            <h6>SNAPDEAL BUSINESS</h6>
            <a href="">Shopping App</a>
            <a href="">Sell on Snapdeal</a>
            <a href="">Media Enquirys</a>
          </div>
          <div className={style.col}>
            <h6>POPULAR LINKS</h6>
            <a href="">Lehenga</a>
            <a href="">Kid's Clothing</a>
            <a href="">Sarees</a>
            <a href="">Winter Wear</a>
          </div>
          <div className={style.col}>
            <h6>SUBSCRIBE</h6>
            <div className={style.emailinput}>
              <input type="text" placeholder="Your email address" />
              <button>SUBSCRIBE</button>
            </div>
            <p>
              Register now to get updates on promotions and <br />
              coupons. <a href="">Or Download App</a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={style.foot}>
        <div className={style.cards}>
          <p>PAYMENT</p>
          <a href="" target="_blank">
            <img src={c1} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={c2} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={c3} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={c4} alt="" />
          </a>
        </div>
        <div className={style.socialMedia}>
          <p>CONNECT</p>
          <div>
            <a href="https://www.facebook.com" target="_blank">
              <img src={s1} alt="" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src={s2} alt="" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src={s3} alt="" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={s4} alt="" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img src={s5} alt="" />
            </a>
            <a href="https://www.pinterest.com" target="_blank">
              <img src={s6} alt="" />
            </a>
            <a href="https://www.snapchat.com" target="_blank">
              <img src={s7} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
