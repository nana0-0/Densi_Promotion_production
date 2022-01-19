import React from "react";
import { Link } from "react-router-dom";
import height_img from "./assets/img/height-img.svg";
import height_img_memori from "./assets/img/height-omg-memori.png";
import { atom, useRecoilState } from "recoil";

export const HeightState = atom({
    key: "height",
    default: 160,
});


function Question5() {
    const [height, setHeight] = useRecoilState(HeightState)

    let ratio_style;
    let raito_init = "50%";
    
    raito_init = ((190-height)*1.7) + "%";

    ratio_style = {
        width: "6px",
        background:
            "linear-gradient(to bottom, #707070 " +
            raito_init +
            ", #00AEEF " +
            raito_init +
            " 80%)",
        height: "255px",
        "borderRadius": "20px",
        "marginRight": "10px",
    };
    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.05</h4>
                    </dt>
                    <dd>
                        <h5>身長は何cｍですか？</h5>
                    </dd>
                </dl>
                <div className="height-form">
                <p>ここに数字を入力してください</p>
                    <input
                        type="number"
                        className="input_height"
                        value={height}
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }}
                    />
                </div>
                <figure className="height-img-flex">
                    <img
                        src={height_img}
                        alt="身長を図っている男性"
                        className="height-img"
                    />
                    <img
                        src={height_img_memori}
                        alt="メモリ"
                        height="260px"
                        className="memori"
                    />
                    <div style={ratio_style}></div>
                </figure>
                <h6 className="height-render">{height}cm</h6>
            </main>
            <div className="question-footer">
                <Link to="/question6" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p  className="active-normal"></p></Link>
                <Link to="/question3"><p  className="active-normal"></p></Link>
                <Link to="/question4"><p  className="active-normal"></p></Link>
                <Link to="/question5"><p className="active-primary"></p></Link>
                <Link to="/question6"><p  className="active-normal"></p></Link>
                <Link to="/question7"><p  className="active-normal"></p></Link>
                <Link to="/question8"><p  className="active-normal"></p></Link>
                </div>
            </div>
        </>
    );
}

export default Question5;
