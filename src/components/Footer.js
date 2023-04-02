import React from "react";
import style from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-8 ${style.footerItems} `}>
            <p className={style.contactTitle}>Contact info</p>
            <p className={style.phone}>📞 09917410906</p>
            <p className={style.gmail}>📧 webdegan@gmail.com</p>
            <span>
              <a href="https://www.webdegan.com" className={style.website}>
                🌐 webdegan.com
              </a>
            </span>
          </div>
          <div className={`col-4 ${style.footerItems2}`}>
            <a href="https://www.webdegan.com" className={style.projects}>
              More Projects
            </a>
            <span>
              <a href="/signin" className={style.projects}>
                Sign In
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
