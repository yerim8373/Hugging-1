import styled from "styled-components";
import styles from "./UserLogin.module.css";
import axios from "axios";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import KaKaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router";
import { clear } from "@testing-library/user-event/dist/clear";
// import { KAKAO_AUTH_URL } from "./OAuth";

// let KakaoBtn = styled.button`

//     display: flex;
//     margin : auto;
//     background: #FFE812;
//     color : black;
//     padding : 10px;
//     border-radius: 20px;
//     border: none;
//     font-size: 10px;
// `
// let MainImg = styled.img`
//     height: 300px;
//     background-image: url('../mainimg.png');
// `

function UserLogin() {
  const navigate = useNavigate();
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  useEffect(() => {
    localStorage.setItem("emotion", JSON.stringify([]));
  }, []);
  // localStorage.setItem(
  //   "userprofile",
  //   JSON.stringify({
  //     id: 284,
  //     email: "hjay1029@gmail.com",
  //     age: 11,
  //     nickname: "da",
  //     gender: "FEMALE",
  //     profileImage: 1,
  //     counselList: [],
  //     favoriteCounselorList: [],
  //     favoriteMusicList: [],
  //     memberMentalCategoryList: ["Loss"],
  //   })
  // );
  // localStorage.setItem("token", 1);
  return (
    <>
      <div className={styles.main_bg}></div>
      <div className={styles.header__title}>
        <h1 className={styles.header__title2}>Hug</h1>
        <h1 className={styles.header__title3}>ging</h1>
      </div>
      <p className={styles.header__text}>언택트 마음챙김 서비스</p>
      <a className={styles.a_kakao} href={KAKAO_AUTH_URL}>
        <button className={styles.KakaoBtn}>
          <p className={styles.kakaoBtn_title}> 카카오 로그인 / 회원가입</p>
          <div className={styles.kakao_logo}></div>
        </button>
      </a>

      <button
        className={styles.counselorBtn}
        onClick={() => {
          if (localStorage.getItem("token") === null) {
            navigate("/counselor/login");
          } else {
            navigate("/counselor/mypage");
          }
        }}
      >
        상담사 로그인
      </button>
    </>
  );
}

export default UserLogin;
