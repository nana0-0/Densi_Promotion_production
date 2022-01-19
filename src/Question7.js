import React from "react";
import { Link } from "react-router-dom";
import field_img from "./assets/img/field-img.svg";
import gk_img from "./assets/img/question7_gk.png";
import df_img from "./assets/img/question7_df.png";
import mf_img from "./assets/img/question7_mf.png";
import fw_img from "./assets/img/question7_fw.png";

import { atom, useRecoilState } from "recoil";

export const PotisionState = atom({
    key: "potision",
    default: "gk",
});


function Question7() {
    const [potision, setSelect] = useRecoilState(PotisionState)
    const toggle = [gk_img, df_img, mf_img, fw_img];
    let selected_img;
    let gk_state;
    let df_state;
    let mf_state;
    let fw_state;
    let gk_selected_style = [
        "question_select_primary",
        "question_select_nomal",
    ];
    let df_selected_style = [
        "question_select_primary",
        "question_select_nomal",
    ];
    let mf_selected_style = [
        "question_select_primary",
        "question_select_nomal",
    ];
    let fw_selected_style = [
        "question_select_primary",
        "question_select_nomal",
    ];

    let sheets = document.styleSheets;
    let sheet = sheets[sheets.length - 1];
    switch (potision) {
        case "gk":
            selected_img = toggle[0];
            gk_state = gk_selected_style[0];
            df_state = df_selected_style[1];
            mf_state = mf_selected_style[1];
            fw_state = fw_selected_style[1];
            sheet.insertRule(
                ".question7-japan-img::after { top: 135px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question7-japan-img::after { left: 143px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {  top: 323px; }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {   left: 148px; }",
                sheet.cssRules.length
            );
            break;
        case "df":
            selected_img = toggle[1];
            gk_state = gk_selected_style[1];
            df_state = df_selected_style[0];
            mf_state = mf_selected_style[1];
            fw_state = fw_selected_style[1];
            sheet.insertRule(
                ".question7-japan-img::after { top: 90px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question7-japan-img::after { left: 105px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {  top: 279px; }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {   left: 111px; }",
                sheet.cssRules.length
            );
            break;
        case "mf":
            selected_img = toggle[2];
            gk_state = gk_selected_style[1];
            df_state = df_selected_style[1];
            mf_state = mf_selected_style[0];
            fw_state = fw_selected_style[1];
            sheet.insertRule(
                ".question7-japan-img::after { top: 45px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question7-japan-img::after { left: 185px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {  top: 234px; }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {   left: 190px; }",
                sheet.cssRules.length
            );
            break;
        case "fw":
            selected_img = toggle[3];
            gk_state = gk_selected_style[1];
            df_state = df_selected_style[1];
            mf_state = mf_selected_style[1];
            fw_state = fw_selected_style[0];
            sheet.insertRule(
                ".question7-japan-img::after { top: 15px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".question7-japan-img::after { left: 142px }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {  top: 203px; }",
                sheet.cssRules.length
            );
            sheet.insertRule(
                ".pin_text {   left: 147px; }",
                sheet.cssRules.length
            );
            break;
        default:
            console.log("エラー");
    }

    return (
        <>
            <div className="q1bg">
                <main className="queation-wrapper">
                    <dl className="question-title">
                        <dt>
                            <h4>Q.07</h4>
                        </dt>
                        <dd>
                            <h5>どこのポジションですか？</h5>
                        </dd>
                    </dl>
                    <ul className="question-select">
                        <li>
                            <button
                                onClick={() => setSelect("gk")}
                                className={gk_state}
                                id="gk-btn"
                            >
                                GK
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelect("df")}
                                className={df_state}
                                id="df-btn"
                            >
                                DF
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelect("mf")}
                                className={mf_state}
                                id="mf-btn"
                            >
                                MF
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setSelect("fw")}
                                className={fw_state}
                                id="fw-btn"
                            >
                                FW
                            </button>
                        </li>
                    </ul>
                    <p className="pin_text">{potision.toUpperCase()}</p>
                    <figure className="question7-japan-img">
                        <img src={field_img} alt="サッカーのフィールド" />
                    </figure>
                    <figure className="question-img-circle">
                        <img src={selected_img} alt="GKの画像" />
                    </figure>
                    <div className="select-btn-flex-potision">
                        <button
                            onClick={() =>
                                potision === "gk"
                                    ? setSelect("fw")
                                    : potision === "fw"
                                    ? setSelect("mf")
                                    : potision === "mf"
                                    ? setSelect("df")
                                    : potision === "df"
                                    ? setSelect("gk")
                                    : ""
                            }
                            className="btn-left"
                        ></button>
                        <button
                            onClick={() =>
                                potision === "gk"
                                    ? setSelect("df")
                                    : potision === "df"
                                    ? setSelect("mf")
                                    : potision === "mf"
                                    ? setSelect("fw")
                                    : potision === "fw"
                                    ? setSelect("gk")
                                    : ""
                            }
                            className="btn-right"
                        ></button>
                    </div>
                </main>
            </div>
            <div className="question-footer">
                <Link to="/question8" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p  className="active-normal"></p></Link>
                <Link to="/question3"><p  className="active-normal"></p></Link>
                <Link to="/question4"><p  className="active-normal"></p></Link>
                <Link to="/question5"><p  className="active-normal"></p></Link>
                <Link to="/question6"><p  className="active-normal"></p></Link>
                <Link to="/question7"><p className="active-primary"></p></Link>
                <Link to="/question8"><p  className="active-normal"></p></Link>
                </div>
            </div>
        </>
    );
}

export default Question7;
