import React from "react";
import { Header, Footer, Topmain } from "./common.js";
import data from "./assets/data/result.json";
import { useEffect } from "react";
import result_now_img0 from "./assets/img/result_now_hikaru.png";
import result_now_img1 from "./assets/img/result_now_abe.png";
import result_now_img2 from "./assets/img/result_now_fujii.png";
import result_now_img3 from "./assets/img/result_now_kuramoti.png";
import result_now_img4 from "./assets/img/result_now_matumoto.png";
import result_weak_img0 from "./assets/img/result_weak_img0.png";
import result_weak_img1 from "./assets/img/result_weak_img1.png";
import result_weak_img2 from "./assets/img/result_weak_img2.png";
import result_good_chiba_kantoku from "./assets/img/result_chiba_kantoku.png";
import result_good_chiba_athletic from "./assets/img/result_chiba_athletic.png";
import result_good_chiba_gk from "./assets/img/result_chiba_gk.png";
import result_good_chiba_pysical from "./assets/img/result_chiba_pysical.png";
import result_good_oosaka_head from "./assets/img/result_oosaka_head.png";
import result_good_seiryo_head_l from "./assets/img/result_seiryo_head_l.png";
import result_good_seiryo_head from "./assets/img/result_seiryo_head.png";
import result_good_tokyo_head from "./assets/img/result_tokyo_head.png";
import result_good_tokyo_athletic from "./assets/img/result_tokyo_athletic.png";
import { useContext, useRef } from "react";
import { GlobalContext } from "./index.js";
import slider_btn_left from "./assets/img/result_slider_left.png";
import slider_btn_right from "./assets/img/result_slider_right.png";
import slider_img0 from "./assets/img/result_slider_img0.png";
import slider_img1 from "./assets/img/result_slider_img1.png";
import slider_img2 from "./assets/img/result_slider_img2.png";
import slider_img3 from "./assets/img/result_slider_img3.png";
import slider_img4 from "./assets/img/result_slider_img4.png";
import slider_img5 from "./assets/img/result_slider_img5.png";
import check_tracking_img from "./assets/img/check_tracking_img.png";
import check_dormitory_img from "./assets/img/check_dormitory_img.png";
import check_expedition_img from "./assets/img/check_expedition_img.png";
import check_gkcoach_img from "./assets/img/check_gkcoach_img.png";
import check_institution_img from "./assets/img/check_institution_img.png";
import check_lawn_img from "./assets/img/check_lawn_img.png";
import check_physicalcoach_img from "./assets/img/check_physicalcoach_img.png";
import check_trainer_img from "./assets/img/check_trainer_img.png";
import check_foreigner_img from "./assets/img/check_foreigner_img.png";
import check_sponser_img from "./assets/img/check_sponser_img.png";
import check_personalgym_img from "./assets/img/check_personalgym_img.png";
import check_left_btn from "./assets/img/check_left_btn.png"; 
import check_right_btn from "./assets/img/check_right_btn.png"; 

import { useState } from "react";
import { gsap } from "gsap";
import { Fade } from "react-awesome-reveal";

function Result() {
    const { context, setContext } = useContext(GlobalContext);
    let pagetop = context.pagetop;
    useEffect(() => {
        if (pagetop === true) {
            window.scrollTo(0, 2260);
            setContext({ ...context, pagetop: false });
        }
    });

   
    gsap.from(".fead_img", { x: 0 });
    gsap.from(".fead_text", { x: 0 });
    gsap.from(".check_section", { x: 0 });

    const [btn_toggle, setBtn_toggle] = useState("");
    const [check_btn_toggle, setCheckbtn_toggle] = useState("");

    useEffect(() => {
        console.log(check_btn_toggle)
        console.log(btn_toggle)
        if (check_btn_toggle === "check_right") {
            gsap.from(".check_section", { x: -350 });
        }
        if (check_btn_toggle === "check_left") {
            gsap.from(".check_section", { x: 150 });
        }
        if (btn_toggle === "right") {
            gsap.from(".fead_img", { x: -350 });
            gsap.from(".fead_text", { x: -350 });
        }
        if (btn_toggle === "left") {
            gsap.from(".fead_img", { x: 150 });
            gsap.from(".fead_text", { x: 150 });
        }
    });

    let img_slider = [
        slider_img0,
        slider_img1,
        slider_img2,
        slider_img3,
        slider_img4,
        slider_img5,
    ];

    let gender = context.gender;
    let select = context.select;

    console.log(`${select}iiiiiiiiiiiiiiiii`)
    let confidence = context.confidence;
    let counter = context.counter;
    let height = context.height;
    let potision = context.potision;
    let tracking = context.tracking;
    let gkcoach = context.gkcoach;
    let lawn = context.lawn;
    let dormitory = context.dormitory;
    let expedition = context.expedition;
    let trainer = context.trainer;
    let knows = context.knows;
    let institution = context.institution;
    let physicalcoach = context.physicalcoach;
    let foreigner = context.foreigner;
    let sponser = context.sponser;
    let personalgym = context.personalgym;

    let weak_array_number;
    if (confidence === false) {
        weak_array_number = 0;
    } else if (confidence === true && (counter < 8 || height > 165)) {
        weak_array_number = 1;
    } else {
        weak_array_number = 2;
    }

    let result_good_img = result_good_chiba_kantoku;
    let result_good_array = 0;

    function good_img() {
        if (select === "chiba") {
            if (potision === "gk") {
                result_good_img = result_good_chiba_gk;
            } else if (confidence === true && (counter < 8 || height > 165)) {
                result_good_img = result_good_chiba_pysical;
            } else if (confidence === false && (counter < 8 || height > 165)) {
                result_good_img = result_good_chiba_kantoku;
            } else {
                result_good_img = result_good_chiba_athletic;
            }
        } else if (select === "oosaka") {
            if (potision === "gk") {
                result_good_img = result_good_seiryo_head_l;
            } else {
                result_good_img = result_good_oosaka_head;
            }
        } else if (select === "seiryo") {
            if (gender === "woman") {
                result_good_img = result_good_seiryo_head_l;
            } else {
                result_good_img = result_good_seiryo_head;
            }
        } else {
            if (potision === "gk") {
                result_good_img = result_good_seiryo_head_l;
            } else if (confidence === true && (counter < 8 || height > 165)) {
                result_good_img = result_good_tokyo_head;
            } else {
                result_good_img = result_good_tokyo_athletic;
            }
        }
        return result_good_img;
    }

    function good_array() {
        if (select === "chiba") {
            if (potision === "gk") {
                result_good_array = 1;
            } else if (confidence === true && (counter < 8 || height > 165)) {
                result_good_array = 2;
            } else if (confidence === false && (counter < 8 || height > 165)) {
                result_good_array = 0;
            } else {
                result_good_array = 3;
            }
        } else if (select === "oosaka") {
            if (potision === "gk") {
                result_good_array = 1;
            } else {
                result_good_array = 0;
            }
        } else if (select === "seiryo") {
            result_good_array = 0;
        } else {
            if (potision === "gk") {
                result_good_array = 2;
            } else if (confidence === true && (counter < 8 || height > 165)) {
                result_good_array = 0;
            } else {
                result_good_array = 1;
            }
        }
        return result_good_array;
    }

    console.log(gender);
    console.log(select);
    console.log(confidence);
    console.log(counter);
    console.log(height);
    console.log(potision);
    console.log(tracking);
    console.log(gkcoach);
    console.log(lawn);
    console.log(dormitory);
    console.log(expedition);
    console.log(trainer);
    console.log(knows);
    console.log(institution);
    console.log(physicalcoach);
    console.log(foreigner);
    console.log(sponser);
    console.log(personalgym);

    let gender_text;
    if (gender === "woman") {
        gender_text = "OG";
    } else {
        gender_text = "OB";
    }

    function good_returnimg(){
        return(select === "chiba" ? data.good.chiba.img[good_array()] : select ==="oosaka" ? data.good.oosaka.img[good_array()] : select ==="tokyo" ? data.good.tokyo.img[good_array()] : (select === "seiryo")&&(
             gender === "male") ? data.good.seiryo.boys.img[good_array()] : (select === "seiryo")&&
             (gender === "woman") ? data.good.seiryo.ladies[good_array()] : console.log(""))
        }
        

    let now_array = 0;

    if (gender === "woman") {
        now_array = 0;
    } else if (potision === "mf") {
        if (confidence === true) {
            now_array = 2;
        } else {
            now_array = 3;
        }
    } else if (potision === "df") {
        now_array = 4;
    } else if (potision === "fw") {
        now_array = 1;
    } else {
        now_array = 2;
    }
    const [slider, setSlider] = useState(0);
    const [check_slider, setCheckslider] = useState(0);

    let check_slider_p = [];
    let check_slider_dt = [];
    let check_slider_dd = [];
    let check_img = [];
    if (tracking === true) {
        check_slider_p.push(data.check.tracking.point);
        check_slider_dt.push(data.check.tracking.title);
        check_slider_dd.push(data.check.tracking.p);
        check_img.push(check_tracking_img);
    }
    console.log(check_img);
    if (gkcoach === true) {
        check_slider_p.push(data.check.gkcoach.point);
        check_slider_dt.push(data.check.gkcoach.title);
        check_slider_dd.push(data.check.gkcoach.p);
        check_img.push(check_gkcoach_img);
    }
    if (lawn === true) {
        check_slider_p.push(data.check.lawn.point);
        check_slider_dt.push(data.check.lawn.title);
        check_slider_dd.push(data.check.lawn.p);
        check_img.push(check_lawn_img);
    }
    if (dormitory === true) {
        check_slider_p.push(data.check.dormitory.point);
        check_slider_dt.push(data.check.dormitory.title);
        check_slider_dd.push(data.check.dormitory.p);
        check_img.push(check_dormitory_img);
    }
    if (expedition === true) {
        check_slider_p.push(data.check.expedition.point);
        check_slider_dt.push(data.check.expedition.title);
        check_slider_dd.push(data.check.expedition.p);
        check_img.push(check_expedition_img);
    }
    if (trainer === true) {
        check_slider_p.push(data.check.trainer.point);
        check_slider_dt.push(data.check.trainer.title);
        check_slider_dd.push(data.check.trainer.p);
        check_img.push(check_trainer_img);
    }
    if (knows === true) {
        check_slider_p.push(data.check.knows.point);
        check_slider_dt.push(data.check.knows.title);
        check_slider_dd.push(data.check.knows.p);
        check_img.push(check_tracking_img);
    }
    if (institution === true) {
        check_slider_p.push(data.check.institution.point);
        check_slider_dt.push(data.check.institution.title);
        check_slider_dd.push(data.check.institution.p);
        check_img.push(check_institution_img);
    }
    if (physicalcoach === true) {
        check_slider_p.push(data.check.physicalcoach.point);
        check_slider_dt.push(data.check.physicalcoach.title);
        check_slider_dd.push(data.check.physicalcoach.p);
        check_img.push(check_physicalcoach_img);
    }
    if (foreigner === true) {
        check_slider_p.push(data.check.foreigner.point);
        check_slider_dt.push(data.check.foreigner.title);
        check_slider_dd.push(data.check.foreigner.p);
        check_img.push(check_foreigner_img);
    }
    if (sponser === true) {
        check_slider_p.push(data.check.sponser.point);
        check_slider_dt.push(data.check.sponser.title);
        check_slider_dd.push(data.check.sponser.p);
        check_img.push(check_sponser_img);
    }
    if (personalgym === true) {
        check_slider_p.push(data.check.personalgym.point);
        check_slider_dt.push(data.check.personalgym.title);
        check_slider_dd.push(data.check.personalgym.p);
        check_img.push(check_personalgym_img);
    }

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
                                    <img src={data.weak.img[weak_array_number]} alt="" />
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
                                        : console.log("goodエラー")}
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
                                            : console.log("err")}
                                    </li>
                                </ul>
                                <figure className="result_tokui_img">
                                    <img src={good_returnimg()} alt=""/>
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
                            <em>活動</em>を
                            <em>紹介します</em>
                        </dd>
                    </dl>
                        <ul className={check_slider_p.length === 1 ? "none" : "check_btn_flex"}>
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
                                        setBtn_toggle("")
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
                                        setBtn_toggle("")
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
                        {check_slider_p.map((key, i) => (
                            <button
                                onClick={() => {setCheckslider(i); setBtn_toggle(""); i>check_slider?setCheckbtn_toggle("check_right"):setCheckbtn_toggle("check_left")}}
                                className={check_slider_p.length === 1 ? "none" : "btn-reset check_slider_padding"}
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
                            <em>選手</em>を
                            <em>紹介します</em>
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
                            <img src={img_slider[slider]} alt="" />
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
                        <button onClick={() => {setSlider(0); setCheckbtn_toggle(""); 0>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 0
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                        <button onClick={() =>{ setSlider(1); setCheckbtn_toggle(""); 1>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 1
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                        <button onClick={() => {setSlider(2); setCheckbtn_toggle(""); 2>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 2
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                        <button onClick={() => {setSlider(3);setCheckbtn_toggle(""); 3>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 3
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                        <button onClick={() => {setSlider(4); setCheckbtn_toggle(""); 4>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 4
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                        <button onClick={() => {setSlider(5); setCheckbtn_toggle(""); 5>slider?setBtn_toggle("right"):setBtn_toggle("left")}}>
                            <p
                                className={
                                    slider === 5
                                        ? "slider-active-primary"
                                        : "slider-active-normal"
                                }
                            ></p>
                        </button>
                    </div>
                </section>
                <Footer />
            </>
        </>
    );
}

export default Result;
