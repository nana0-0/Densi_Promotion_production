import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import woman_img from "./assets/img/woman-img.svg";
import male_img from "./assets/img/male-img.svg";
import {useContext} from "react";
import {GlobalContext} from "./index.js";

function Question2() {
    const { context, setContext } = useContext(GlobalContext);
    const [gender, setGender] = useState("male");

    context.gender = gender;

    let gender_img = gender === "woman" ? woman_img : male_img;
    let gender_alt = gender === "woman" ? "女性" : "男性";

    let sheets = document.styleSheets;
    let sheet = sheets[sheets.length - 1];

    if (gender === "woman") {
        sheet.insertRule("h6 em { color: #FF046E }", sheet.cssRules.length);
    } else {
        sheet.insertRule("h6 em { color: #00AEEF }", sheet.cssRules.length);
    }

    return (
        <>
                <main className="queation-wrapper">
                    <dl className="question-title">
                        <dt>
                            <h4>Q.02</h4>
                        </dt>
                        <dd>
                            <h5>性別を選択してください</h5>
                        </dd>
                    </dl>
                    <ul className="question-choice">
                        <li>
                            <button
                                className="male-btn"
                                onClick={() => setGender("male")}
                            >
                                男性
                            </button>
                        </li>
                        <li>
                            <button
                                className="woman-btn"
                                onClick={() => setGender("woman")}
                            >
                                女性
                            </button>
                        </li>
                    </ul>
                    <figure className="gender-img">
                        <img src={gender_img} alt={gender_alt} />
                    </figure>
                    <h6>
                        性別は<em>{gender_alt}</em>
                    </h6>
                </main>
            <div className="question-footer">
                <Link to="/question3" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p className="active-primary"></p></Link>
                <Link to="/question3"><p  className="active-normal"></p></Link>
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

export default Question2;
