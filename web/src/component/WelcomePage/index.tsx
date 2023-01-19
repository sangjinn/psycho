import React from "react";

// import "./Common/MainButton";
import MainButton from "../MainButton/MainButton";
import "../../css/common.css";
import MediumTitle from "../MediumTitle/MediumTitle";
import welcomeImage from "../../img/WelcomeImg.png";
import shepherd from "../../service/shepherd";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";

interface Props extends Properties {
  setNavVisible: Function;
}

function WelcomePage(properties: Props) {
  properties.setNavVisible(false);
  const id = [`_${idiotproof.trace(WelcomePage)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const largeTitle = "반가워요!";
  const context = `Psycho는 당시의 MBTI
  변동을 추적해드려요 !`;

  return (
    <div id={id} className={cl}>
      <div className="top_container">
        <div className="large_title">{largeTitle}</div>
        <img className="welcome_icon" src={welcomeImage} />
        {/* <WelcomeIcon className={styles.welcomeIcon_svg} /> */}
      </div>
      <div className="bottom_container">
        <div className="context">{context}</div>
        <div className="main_button">
          <MainButton
            text="시작해볼까요?"
            onClick={() => shepherd.whip("test", "RegisterPage1")}
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
