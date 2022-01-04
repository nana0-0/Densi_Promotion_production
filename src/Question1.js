import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import japan_img from "./assets/img/question1_japanimg.svg";
import oosaka_img from "./assets/img/question1_oosaka.png";
import tokyo_img from "./assets/img/question1_tokyo.png";
import chiba_img from "./assets/img/question1_chiba.png";
import seiryo_img from "./assets/img/question1_seiryo.png";
import selected_img_bg from "./assets/img/question-img-circle-bg.svg";
import {useContext} from "react";
import {GlobalContext} from "./index.js";

function Question1() {
    const { context, setContext } = useContext(GlobalContext);
    const toggle = [oosaka_img, seiryo_img, tokyo_img, chiba_img];
    const [select, setSelect] = useState("oosaka");
    context.select = select;
    let selected_img;
    let o_state;
    let s_state;
    let t_state;
    let c_state;
    let o_selected_style = ["question_select_primary", "question_select_nomal"];
    let s_selected_style = ["question_select_primary", "question_select_nomal"];
    let t_selected_style = ["question_select_primary", "question_select_nomal"];
    let c_selected_style = ["question_select_primary", "question_select_nomal"];

    let sheets = document.styleSheets;
    let sheet = sheets[sheets.length - 1];

    switch (select) {
        case "oosaka":
            selected_img = toggle[0];
            o_state = o_selected_style[0];
            s_state = s_selected_style[1];
            t_state = t_selected_style[1];
            c_state = c_selected_style[1];
            sheet.insertRule(
                ".question1-japan-img::after { top: 155px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question1-japan-img::after { left: 88px }",
                sheet.cssRules.length
            );

            break;
        case "seiryo":
            selected_img = toggle[1];
            o_state = o_selected_style[1];
            s_state = s_selected_style[0];
            t_state = t_selected_style[1];
            c_state = c_selected_style[1];
            sheet.insertRule(
                ".question1-japan-img::after { top: 130px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question1-japan-img::after { left: 105px }",
                sheet.cssRules.length
            );

            break;
        case "tokyo":
            selected_img = toggle[2];
            o_state = o_selected_style[1];
            s_state = s_selected_style[1];
            t_state = t_selected_style[0];
            c_state = c_selected_style[1];
            sheet.insertRule(
                ".question1-japan-img::after { top: 145px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question1-japan-img::after { left: 130px }",
                sheet.cssRules.length
            );

            break;
        case "chiba":
            selected_img = toggle[3];
            o_state = o_selected_style[1];
            s_state = s_selected_style[1];
            t_state = t_selected_style[1];
            c_state = c_selected_style[0];
            sheet.insertRule(
                ".question1-japan-img::after { top: 148px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question1-japan-img::after { left: 142px }",
                sheet.cssRules.length
            );

            break;
        default:
            console.log("エラー");
    }

    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.01</h4>
                    </dt>
                    <dd>
                        <h5>どこのスクールを希望しますか？</h5>
                    </dd>
                </dl>
                <ul className="question-select">
                    <li>
                        <button
                            onClick={() => setSelect("oosaka")}
                            className={o_state}
                            id="oosaka-btn"
                        >
                            大阪
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setSelect("seiryo")}
                            className={s_state}
                            id="seiryo-btn"
                        >
                            石川
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setSelect("tokyo")}
                            className={t_state}
                            id="tokyo-btn"
                        >
                            東京
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setSelect("chiba")}
                            className={c_state}
                            id="chiba-btn"
                        >
                            千葉
                        </button>
                    </li>
                </ul>
                <figure className="question1-japan-img">
                    <img src={japan_img} alt="日本地図" />
                </figure>
                <figure className="question-img-circle">
                    <img src={selected_img} alt="大阪の画像" />
                </figure>
                <div className="select-btn-flex">
                    <button
                        onClick={() => select==="oosaka" ? setSelect("chiba") : select==="chiba" ? setSelect("tokyo") : select === "tokyo" ? setSelect("seiryo"): select==="seiryo" ? setSelect("oosaka"):''}
                        className="btn-left"
                    >
                    </button>
                    <button  onClick={() => select==="oosaka" ? setSelect("seiryo") : select==="seiryo" ? setSelect("tokyo") : select === "tokyo" ? setSelect("chiba"): select==="chiba" ? setSelect("oosaka"):''} className="btn-right"></button>
                </div>
            </main>
            <img
                src={selected_img_bg}
                alt="土台"
                className="question-img-circle-bg"
            />
            <div className="question-footer">
                <Link to="/question2" className="question-enter-btn">
                    決定
                </Link>
                <ul className="questions-active-flex">
                <li className="active-primary"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
                <li className="active-normal"></li>
            </ul>
            </div>
       </>
    );
}

export default Question1;
