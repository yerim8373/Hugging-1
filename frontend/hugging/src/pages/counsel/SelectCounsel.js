import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./SelectCounsel.module.css";

const SelectCounsel = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div>
          <img src="./hat.png" alt="hat" className={classes.titleImage}></img>
          <span>메타버스로 즐기는 심리상담</span>
        </div>
      </div>
      <div className={classes.buttons}>
        <Link to="/counselreserve" style={{ textDecoration: "none" }}>
          <div className={classes.blue}>
            <div className={classes.title}>1:1 상담</div>
            <div className={classes.explain}>
              전문 상담사와 1:1로 마음 속 고민 거리를 메타버스에서 편하게 얘기를
              주고받아요!
            </div>
            <img
              src="./mainImage2.png"
              alt="mainImage2"
              className={classes.blueImage}
            ></img>
          </div>
        </Link>

        <Link to="/counselcommunity" style={{ textDecoration: "none" }}>
          <div className={classes.purple}>
            <div className={classes.title}>커뮤니티</div>
            <div className={classes.explain}>
              말못할 고민거리 메타버스에서 익명으로 친구들과 얘기를 주고
              받아봐요
            </div>
            <img
              src="./mainImage3.png"
              alt="mainImage3"
              className={classes.purpleImage}
            ></img>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default SelectCounsel;