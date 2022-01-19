import React from "react";
import { Link } from "react-router-dom";
import foot_img from "./assets/img/foot-img.svg";
import { atom, useRecoilState } from "recoil";

export const FootState = atom({
    key: "foot",
    default: "right",
});


function Question6() {
    const [foot, setFoot] = useRecoilState(FootState)

    let foot_alt = foot === 'right' ? "右足" : "左足";
    let sheets = document.styleSheets;
    let sheet = sheets[sheets.length - 1];

    if (foot === 'right') {
        sheet.insertRule("h6 em { color: #00AEEF }", sheet.cssRules.length);
    } else {
        sheet.insertRule("h6 em { color: #FF046E }", sheet.cssRules.length);
    }

    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.06</h4>
                    </dt>
                    <dd>
                        <h5>利き足はどっちですか？</h5>
                    </dd>
                </dl>
                <ul className="question-choice">
                    <li>
                        <button
                            className="confidence-on-btn"
                            onClick={() => setFoot('left')}
                        >
                             左足
                        </button>
                    </li>
                    <li>
                        <button
                            className="confidence-off-btn"
                            onClick={() => setFoot('right')}
                        >
                            右足
                        </button>
                    </li>
                </ul>
                <figure className="foot-img">
                    <img src={foot_img} alt={foot_alt}/>
                </figure>
                <h6>
                    利き足は<em>{foot_alt}</em>
                </h6>
            </main>
            <div className="question-footer">
                <Link to="/question7" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p  className="active-normal"></p></Link>
                <Link to="/question3"><p  className="active-normal"></p></Link>
                <Link to="/question4"><p  className="active-normal"></p></Link>
                <Link to="/question5"><p  className="active-normal"></p></Link>
                <Link to="/question6"><p className="active-primary"></p></Link>
                <Link to="/question7"><p  className="active-normal"></p></Link>
                <Link to="/question8"><p  className="active-normal"></p></Link>
                </div>
            </div>
        </>
    );
}

export default Question6;
