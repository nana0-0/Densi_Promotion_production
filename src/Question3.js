import React from "react";
import { Link } from "react-router-dom";
import confidence_img from "./assets/img/confidence-img.svg";
import on_img from "./assets/img/on-img.svg";
import off_img from "./assets/img/off-img.svg";
import {atom, useRecoilState} from "recoil";

export const ConfidenceState = atom({
    key: "confidence",
    default: true,
})

function Question3() {
    const [confidence, setConfidence] = useRecoilState(ConfidenceState);

    let confidence_alt = confidence === true ? "あり" : "なし";
    let sheets = document.styleSheets;
    let sheet = sheets[sheets.length - 1];
    let toggle_img;

    if (confidence === true) {
        toggle_img = on_img;
        sheet.insertRule("h6 em { color: #FF046E }", sheet.cssRules.length);
        sheet.insertRule(
            ".confidence-img::after { backgroundImage: url('assets/img/on-img.svg'); }",
            sheet.cssRules.length
        );
    } else {
        toggle_img = off_img;
        sheet.insertRule("h6 em { color: #00AEEF }", sheet.cssRules.length);
        sheet.insertRule(
            ".confidence-img::after { backgroundImage: url('../img/off-img.svg'); }",
            sheet.cssRules.length
        );
    }

    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.03</h4>
                    </dt>
                    <dd>
                        <h5>体力に自信はありますか？</h5>
                    </dd>
                </dl>
                <ul className="question-choice">
                    <li>
                        <button
                            className="confidence-on-btn"
                            onClick={() => setConfidence(true)}
                        >
                            自信あり
                        </button>
                    </li>
                    <li>
                        <button
                            className="confidence-off-btn"
                            onClick={() => setConfidence(false)}
                        >
                            自信なし
                        </button>
                    </li>
                </ul>
                <figure className="confidence-img">
                    <img src={toggle_img} alt={confidence_alt} className="lamp-img"/>
                    <img src={confidence_img} alt={confidence_alt} />
                </figure>
                <h6>
                    自信<em>{confidence_alt}</em>
                </h6>
            </main>
            <div className="question-footer">
                <Link to="/question4" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p  className="active-normal"></p></Link>
                <Link to="/question3"><p className="active-primary"></p></Link>
                <Link to="/question4"><p  className="active-normal"></p></Link>
                <Link to="/question5"><p  className="active-normal"></p></Link>
                <Link to="/question6"><p  className="active-normal"></p></Link>
                <Link to="/question7"><p  className="active-normal"></p></Link>
                <Link to="/question8"><p  className="active-normal"></p></Link>
                </div>
            </div>
        </>
    );
}

export default Question3;
