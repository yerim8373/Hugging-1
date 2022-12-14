import React, { useEffect, useState } from "react";
import axios from "axios";
import TopMusic from "../../components/media/TopMusic";

import Recommend from "../../components/media/Recommend";
import Topic from "../../components/media/Topic";

import Navbar from "../../components/ui/NavBar";
import Nav from "../../components/ui/Nav";
import styles from "../../components/media/Recommend.module.css";
import { API_HOST_URL } from "../../config/index";

function MediaView() {
  const [musics, setMusics] = useState([]);
  const member = JSON.parse(localStorage.getItem("userprofile"));
  const member_id = member.id;
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://j7b204.p.ssafy.io/recom/music/${member_id}`,
    })
      .then((res) => res.data)
      .then((result) => {
        setMusics(result);
      });
  }, []);

  console.log(musics);
  const [topicmusics, setTopicMusics] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST_URL}musics/category`)
      .then((res) => res.json())
      .then((result) => {
        setTopicMusics(result.data);
      });
  }, []);
  const [topmusics, setTopMusics] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST_URL}musics/getTophits`)
      .then((res) => res.json())
      .then((result) => {
        setTopMusics(result.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.margin_div}></div>
      <Recommend musicdatas={musics} />
      <TopMusic topmusicdatas={topmusics} />
      <Topic topicdatas={topicmusics} />
      <Nav />
    </div>
  );
}

export default MediaView;
