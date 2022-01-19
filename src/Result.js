import React from "react";
import { Header, Footer, Topmain } from "./common.js";
import data from "./assets/data/result.json";
import { useEffect } from "react";
import slider_btn_left from "./assets/img/result_slider_left.png";
import slider_btn_right from "./assets/img/result_slider_right.png";
import check_left_btn from "./assets/img/check_left_btn.png";
import check_right_btn from "./assets/img/check_right_btn.png";
import { useRecoilValue } from "recoil";
import { PrefectureState } from "./Question1.js";
import { GenderState } from "./Question2.js";
import { ConfidenceState } from "./Question3.js";
import { CounterState } from "./Question4.js";
import { HeightState } from "./Question5.js";
import { PotisionState } from "./Question7.js";
import {
    TrackingState,
    GkcoachState,
    LawnState,
    DormitoryState,
    ExpeditionState,
    TrainerState,
    KnowsState,
    InstitutionState,
    PhysicalcoachState,
    ForeignerState,
    SponserState,
    PersonalgymState,
    PagetopState
} from "./Question8.js";
import { useState } from "react";
import { gsap } from "gsap";
import { Fade } from "react-awesome-reveal";
import { useRecoilState } from "recoil";

function Result() {

    // 質問で答えた値を受け渡す
    const gender = useRecoilValue(GenderState);
    const select = useRecoilValue(PrefectureState);
    const confidence = useRecoilValue(ConfidenceState);
    const counter = useRecoilValue(CounterState);
    const height = useRecoilValue(HeightState);
    const potision = useRecoilValue(PotisionState);
    let tracking = useRecoilValue(TrackingState);
    let gkcoach = useRecoilValue(GkcoachState);
    let lawn = useRecoilValue(LawnState);
    let dormitory = useRecoilValue(DormitoryState);
    let expedition = useRecoilValue(ExpeditionState);
    let trainer = useRecoilValue(TrainerState);
    let knows = useRecoilValue(KnowsState);
    let institution = useRecoilValue(InstitutionState);
    let physicalcoach = useRecoilValue(PhysicalcoachState);
    let foreigner = useRecoilValue(ForeignerState);
    let sponser = useRecoilValue(SponserState);
    let personalgym = useRecoilValue(PersonalgymState);
    const [pagetop, setPagetop] = useRecoilState(PagetopState)

    // 診断結果の位置に飛ばす
    useEffect(() => {
        if (pagetop === true) {
            window.scrollTo(0, 2260);
            setPagetop(false);
        }
    });

    // スライダーのボタンのオン・オフ
    const [btn_toggle, setBtn_toggle] = useState("");
    const [check_btn_toggle, setCheckbtn_toggle] = useState("");

    // スライダーの初期値
    gsap.from(".fead_img", { x: 0 });
    gsap.from(".fead_text", { x: 0 });
    gsap.from(".check_section", { x: 0 });

    // スライダーのエフェクト
    useEffect(() => {
        check_btn_toggle === "check_right"
            ? gsap.from(".check_section", { x: -350 })
            : console.log("");
        check_btn_toggle === "check_left"
            ? gsap.from(".check_section", { x: 150 })
            : console.log("");
        if (btn_toggle === "right") {
            gsap.from(".fead_img", { x: -350 });
            gsap.from(".fead_text", { x: -350 });
        }
        if (btn_toggle === "left") {
            gsap.from(".fead_img", { x: 150 });
            gsap.from(".fead_text", { x: 150 });
        }
    });

    // 苦手を克服しようの分岐
    let weak_array_number = 0;
    confidence === false
        ? (weak_array_number = 0)
        : confidence === true && (counter < 8 || height > 165)
        ? (weak_array_number = 1)
        : (weak_array_number = 2);

    // 得意を伸ばそうの分岐
    let result_good_array = 0;
    function good_array() {
        if (select === "chiba") {
            potision === "gk"
                ? (result_good_array = 1)
                : confidence === true && (counter < 8 || height > 165)
                ? (result_good_array = 2)
                : confidence === false && (counter < 8 || height > 165)
                ? (result_good_array = 0)
                : (result_good_array = 3);
        } else if (select === "oosaka") {
            potision === "gk"
                ? (result_good_array = 1)
                : (result_good_array = 0);
        } else if (select === "seiryo") {
            result_good_array = 0;
        } else {
            potision === "gk"
                ? (result_good_array = 2)
                : confidence === true && (counter < 8 || height > 165)
                ? (result_good_array = 0)
                : (result_good_array = 1);
        }
        return result_good_array;
    }

    let gender_text = gender === "woman" ? "OG" : "OB";

    let now_array = 0;
    gender === "woman"
        ? (now_array = 0)
        : potision === "mf"
        ? confidence === true
            ? (now_array = 2)
            : (now_array = 3)
        : potision === "df"
        ? (now_array = 4)
        : potision === "fw"
        ? (now_array = 1)
        : (now_array = 2);

    const [slider, setSlider] = useState(0);
    const [check_slider, setCheckslider] = useState(0);

    let check_slider_p = [];
    let check_slider_dt = [];
    let check_slider_dd = [];
    let check_img = [];

    const checkFor = [
        tracking,
        gkcoach,
        lawn,
        dormitory,
        expedition,
        trainer,
        knows,
        institution,
        physicalcoach,
        foreigner,
        sponser,
        personalgym,
    ];

    checkFor.map((o, i) => {
        if (o === true) {
            check_slider_dt.push(data.check.title[i]);
            check_slider_p.push(data.check.point[i]);
            check_slider_dd.push(data.check.p[i]);
            check_img.push(data.check.img[i]);
        }
    });

    console.log(check_slider_p);
    return (
        <>
            <>
                <Header />
                <Topmain />
                <article className="result">
                    <h4 className="result_h4">診断結果</h4>
                    <section>
                        <dl className="result-title">
                            <dt>自分を知ろう</dt>
                            <dd>
                                <em>能力</em>が<em>近い</em>
                                <em className="result-dot space">
                                    {gender_text}選手
                                </em>
                            </dd>
                        </dl>
                        <Fade direction="up" duration="800">
                            <section>
                                <h5 className="result-sbtitle">
                                    {data.now.og[now_array]}
                                </h5>
                                <ul className="result-now-flex">
                                    <li className="result-now-point1">
                                        {data.now.point1[now_array]}
                                    </li>
                                    <li className="result-now-point2">
                                        {data.now.point2[now_array]}
                                    </li>
                                </ul>
                                <figure className="result-now-img">
                                    <img src={data.now.img[now_array]} alt="" />
                                </figure>
                            </section>
                            <section className="result-now">
                                <dl>
                                    <dt>{data.now.dt[0]}</dt>
                                    <dd className="result-team">
                                        {data.now.dd[now_array]}
                                    </dd>
                                </dl>
                                <p>{data.now.p[now_array]}</p>
                            </section>
                        </Fade>
                    </section>
                    <section>
                        <dl className="result-title">
                            <dt>苦手を克服しよう</dt>
                            <dd>
                                <em className="result-dot">おすすめ</em>の
                                <em>トレーニング</em>
                            </dd>
                        </dl>
                        <Fade direction="up" duration="800">
                            <section>
                                <h5 className="result-sbtitle">
                                    {data.weak.training[weak_array_number]}
                                </h5>
                                <ul>
                                    <li className="result-nigate-point1">
                                        {data.weak.point[weak_array_number]}
                                    </li>
                                </ul>
                                <figure className="result-nigate-img">
                                    <img
                                        src={data.weak.img[weak_array_number]}
                                        alt=""
                                    />
                                </figure>
                            </section>
                            <section className="result-now">
                                <dl>
                                    <dt>{data.weak.dt[0]}</dt>
                                    <dd className="result-team">
                                        {data.weak.dd[0]}
                                    </dd>
                                </dl>
                                <p>{data.weak.p[weak_array_number]}</p>
                            </section>
                        </Fade>
                    </section>
                    <section>
                        <dl className="result-title">
                            <dt>得意を伸ばそう</dt>
                            <dd>
                                <em className="result-dot">おすすめ</em>の
                                <em>スタッフ紹介</em>
                            </dd>
                        </dl>
                        <Fade direction="up" duration="800">
                            <section>
                                <h5 className="result-sbtitle">
                                    {select === "chiba"
                                        ? data.good.chiba.staff[good_array()]
                                        : select === "oosaka"
                                        ? data.good.oosaka.staff[good_array()]
                                        : select === "tokyo"
                                        ? data.good.tokyo.staff[good_array()]
                                        : select === "seiryo" &&
                                          gender === "male"
                                        ? data.good.seiryo.boys.staff[
                                              good_array()
                                          ]
                                        : select === "seiryo" &&
                                          gender === "woman"
                                        ? data.good.seiryo.ladies.staff[
                                              good_array()
                                          ]
                                        : data.good.chiba.staff[good_array()]}
                                </h5>
                                <ul>
                                    <li className="result-tokui-point1">
                                        {select === "chiba"
                                            ? data.good.chiba.point[
                                                  good_array()
                                              ]
                                            : select === "oosaka"
                                            ? data.good.oosaka.point[
                                                  good_array()
                                              ]
                                            : select === "tokyo"
                                            ? data.good.tokyo.point[
                                                  good_array()
                                              ]
                                            : select === "seiryo" &&
                                              gender === "male"
                                            ? data.good.seiryo.boys.point[
                                                  good_array()
                                              ]
                                            : select === "seiryo" &&
                                              gender === "woman"
                                            ? data.good.seiryo.ladies.point[
                                                  good_array()
                                              ]
                                            : data.good.chiba.point[
                                                  good_array()
                                              ]}
                                    </li>
                                </ul>
                                <figure className="result_tokui_img">
                                    <img
                                        src={
                                            select === "chiba"
                                                ? data.good.chiba.img[
                                                      good_array()
                                                  ]
                                                : select === "oosaka"
                                                ? data.good.oosaka.img[
                                                      good_array()
                                                  ]
                                                : select === "tokyo"
                                                ? data.good.tokyo.img[
                                                      good_array()
                                                  ]
                                                : select === "seiryo" &&
                                                  gender === "male"
                                                ? data.good.seiryo.boys.img[
                                                      good_array()
                                                  ]
                                                : select === "seiryo" &&
                                                  gender === "woman"
                                                ? data.good.seiryo.ladies.img[
                                                      good_array()
                                                  ]
                                                : data.good.chiba.img[0]
                                        }
                                        alt=""
                                    />
                                </figure>
                            </section>
                            <section className="result-now">
                                <dl>
                                    <dt>{data.good.chiba.dt[0]}</dt>
                                    <dd className="result-team">
                                        {select === "chiba"
                                            ? data.good.chiba.dd[good_array()]
                                            : select === "oosaka"
                                            ? data.good.oosaka.dd[good_array()]
                                            : select === "tokyo"
                                            ? data.good.tokyo.dd[good_array()]
                                            : select === "seiryo" &&
                                              gender === "male"
                                            ? data.good.seiryo.boys.dd[
                                                  good_array()
                                              ]
                                            : select === "seiryo" &&
                                              gender === "woman"
                                            ? data.good.seiryo.ladies.dd[
                                                  good_array()
                                              ]
                                            : console.log("err")}
                                    </dd>
                                </dl>
                                <p>
                                    {select === "chiba"
                                        ? data.good.chiba.p[good_array()]
                                        : select === "oosaka"
                                        ? data.good.oosaka.p[good_array()]
                                        : select === "tokyo"
                                        ? data.good.tokyo.p[good_array()]
                                        : select === "seiryo" &&
                                          gender === "male"
                                        ? data.good.seiryo.boys.p[good_array()]
                                        : select === "seiryo" &&
                                          gender === "woman"
                                        ? data.good.seiryo.ladies.p[
                                              good_array()
                                          ]
                                        : console.log("err")}
                                </p>
                            </section>
                        </Fade>
                    </section>
                </article>
                <article
                    className={
                        check_slider_p.length === 0 ? "none" : "checkarticle"
                    }
                >
                    <section className="check_wrap">
                        <dl className="recommend-title">
                            <dt>SOLTILOを知ろう！</dt>
                            <dd>
                                <em>活動</em>を<em>紹介します</em>
                            </dd>
                        </dl>
                        <ul
                            className={
                                check_slider_p.length === 1
                                    ? "none"
                                    : "check_btn_flex"
                            }
                        >
                            <li>
                                <button
                                    className="btn-reset"
                                    onClick={() => {
                                        setCheckslider(
                                            (check_slider -
                                                1 +
                                                check_slider_p.length) %
                                                check_slider_p.length
                                        );
                                        setCheckbtn_toggle("check_left");
                                        setBtn_toggle("");
                                    }}
                                >
                                    <img
                                        src={check_left_btn}
                                        alt="leftボタン"
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn-reset"
                                    onClick={() => {
                                        setCheckslider(
                                            (check_slider + 1) %
                                                check_slider_p.length
                                        );
                                        setCheckbtn_toggle("check_right");
                                        setBtn_toggle("");
                                    }}
                                >
                                    <img
                                        src={check_right_btn}
                                        alt="rightボタン"
                                    />
                                </button>
                            </li>
                        </ul>
                        <Fade direction="up" duration="800">
                            <section className="check_section">
                                <figure>
                                    <img
                                        src={check_img[check_slider]}
                                        alt="tracking"
                                    />
                                </figure>
                                <p className="check_point">
                                    {check_slider_p[check_slider]}
                                </p>
                                <dl>
                                    <dt>{check_slider_dt[check_slider]}</dt>
                                    <dd>{check_slider_dd[check_slider]}</dd>
                                </dl>
                            </section>
                        </Fade>
                    </section>
                    <div className="check_slider_active_flex">
                        {check_slider_dt.map((o, i) => (
                            <button
                                key={o.toString()}
                                onClick={() => {
                                    setCheckslider(i);
                                    setBtn_toggle("");
                                    i > check_slider
                                        ? setCheckbtn_toggle("check_right")
                                        : setCheckbtn_toggle("check_left");
                                }}
                                className={
                                    check_slider_dt.length === 1
                                        ? "none"
                                        : "btn-reset check_slider_padding"
                                }
                            >
                                <p
                                    className={
                                        i === check_slider
                                            ? "check_slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                        ))}
                    </div>
                </article>
                <section>
                    <dl className="recommend-title">
                        <dt>一緒に成長しよう！</dt>
                        <dd>
                            <em>選手</em>を<em>紹介します</em>
                        </dd>
                    </dl>
                    <ul className="slider_btn_flex">
                        <li>
                            <button
                                className="btn-reset"
                                onClick={() => {
                                    setSlider((slider - 1 + 6) % 6);
                                    setBtn_toggle("left");
                                    setCheckbtn_toggle("");
                                }}
                            >
                                <img src={slider_btn_left} alt="leftボタン" />
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn-reset"
                                onClick={() => {
                                    setSlider((slider + 1) % 6);
                                    setBtn_toggle("right");
                                    setCheckbtn_toggle("");
                                }}
                            >
                                <img src={slider_btn_right} alt="rightボタン" />
                            </button>
                        </li>
                    </ul>
                    <div className="slider-img-flex fead_img">
                        <figure className="result_slider_img">
                            <img src={data.slider.img[slider]} alt="" />
                        </figure>
                        <p>SOLTILO CHIBA FC</p>
                    </div>
                    <Fade direction="up" duration="800">
                        <div className="fead_text">
                            <h5 className="result-sbtitle">
                                {data.slider.player[slider]}
                            </h5>
                            <p className="slider-p">{data.slider.p[slider]}</p>
                        </div>
                    </Fade>
                    <div className="slider-active-flex">
                        {data.slider.img.map((o, i) => (
                            <button
                                key={o.toString()}
                                onClick={() => {
                                    setSlider(i);
                                    setCheckbtn_toggle("");
                                    i > slider
                                        ? setBtn_toggle("right")
                                        : setBtn_toggle("left");
                                }}
                                className="btn-reset"
                            >
                                <p
                                    className={
                                        i === slider
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                        ))}
                    </div>
                </section>
                <Footer />
            </>
        </>
    );
}

export default Result;
