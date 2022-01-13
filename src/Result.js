import React from "react";
import { Header, Footer, Topmain } from "./common.js";
import data from "./assets/data/result.json";
import { useEffect } from "react";
import result_now_img0 from "./assets/img/result-now-img.png";
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
import { useContext } from "react";
import { GlobalContext } from "./index.js";
import slider_btn_left from "./assets/img/result_slider_left.png";
import slider_btn_right from "./assets/img/result_slider_right.png";
import slider_img0 from "./assets/img/result_slider_img0.png";
import slider_img1 from "./assets/img/result_slider_img1.png";
import slider_img2 from "./assets/img/result_slider_img2.png";
import slider_img3 from "./assets/img/result_slider_img3.png";
import slider_img4 from "./assets/img/result_slider_img4.png";
import slider_img5 from "./assets/img/result_slider_img5.png";

import { useState } from "react";

function Result() {
    const { context, setContext } = useContext(GlobalContext);
    let pagetop = context.pagetop;
    useEffect(() => {
        if (pagetop === true) {
            window.scrollTo(0, 2200);
            setContext({ ...context, pagetop: false });
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
    let weak_img;
    if (confidence === false) {
        weak_array_number = 0;
        weak_img = result_weak_img0;
    } else if (confidence === true && (counter < 8 || height > 165)) {
        weak_array_number = 1;
        weak_img = result_weak_img1;
    } else {
        weak_array_number = 2;
        weak_img = result_weak_img2;
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

    let now_array = 0;
    let result_now_img;

    if (gender === "woman") {
        result_now_img = result_now_img0;
    } else if (potision === "mf") {
        if (confidence === true) {
            result_now_img = result_now_img2;
            now_array = 2;
        } else {
            result_now_img = result_now_img3;
            now_array = 3;
        }
    }else if (potision === "df") {
        result_now_img =result_now_img4;
        now_array = 4;
    }else if (potision === "fw"){
        result_now_img =result_now_img2;
        now_array = 2;
    }else{
        result_now_img =result_now_img2;
        now_array = 2;
    }

    const [slider, setSlider] = useState(0);
    return (
        <>
            <>
                <Header />
                <Topmain />
                <article className="result">
                    <h4 className="result_h4">診断結果</h4>
                    <section>
                        <dl className="result-title">
                            <dt>あなたの能力に近い</dt>
                            <dd>
                                <em className="result-dot space">
                                    {gender_text}選手
                                </em>
                                を<em>紹介します</em>
                            </dd>
                        </dl>
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
                            <img src={result_now_img} alt="" />
                        </figure>
                        <section className="result-now">
                            <dl>
                                <dt>{data.now.dt[0]}</dt>
                                <dd className="result-team">
                                    {data.now.dd[now_array]}
                                </dd>
                            </dl>
                            <p>{data.now.p[now_array]}</p>
                        </section>
                    </section>
                    <section>
                        <dl className="result-title">
                            <dt>苦手を克服しよう</dt>
                            <dd>
                                <em className="result-dot">おすすめ</em>の
                                <em>トレーニング</em>
                            </dd>
                        </dl>
                        <h5 className="result-sbtitle">
                            {data.weak.training[weak_array_number]}
                        </h5>
                        <ul>
                            <li className="result-nigate-point1">
                                {data.weak.point[weak_array_number]}
                            </li>
                        </ul>
                        <figure className="result-nigate-img">
                            <img src={weak_img} alt="" />
                        </figure>
                        <section className="result-now">
                            <dl>
                                <dt>{data.weak.dt[0]}</dt>
                                <dd className="result-team">
                                    {data.weak.dd[0]}
                                </dd>
                            </dl>
                            <p>{data.weak.p[weak_array_number]}</p>
                        </section>
                    </section>
                    <section>
                        <dl className="result-title">
                            <dt>得意を伸ばそう</dt>
                            <dd>
                                <em className="result-dot">おすすめ</em>の
                                <em>スタッフ紹介</em>
                            </dd>
                        </dl>
                        <h5 className="result-sbtitle">
                            {select === "chiba"
                                ? data.good.chiba.staff[good_array()]
                                : select === "oosaka"
                                ? data.good.oosaka.staff[good_array()]
                                : select === "tokyo"
                                ? data.good.tokyo.staff[good_array()]
                                : select === "seiryo" && gender === "male"
                                ? data.good.seiryo.boys.staff[good_array()]
                                : select === "seiryo" && gender === "woman"
                                ? data.good.seiryo.ladies.staff[good_array()]
                                : console.log("goodエラー")}
                        </h5>
                        <ul>
                            <li className="result-tokui-point1">
                                {select === "chiba"
                                    ? data.good.chiba.point[good_array()]
                                    : select === "oosaka"
                                    ? data.good.oosaka.point[good_array()]
                                    : select === "tokyo"
                                    ? data.good.tokyo.point[good_array()]
                                    : select === "seiryo" && gender === "male"
                                    ? data.good.seiryo.boys.point[good_array()]
                                    : select === "seiryo" && gender === "woman"
                                    ? data.good.seiryo.ladies.point[
                                          good_array()
                                      ]
                                    : console.log("err")}
                            </li>
                        </ul>
                        <figure className="result_tokui_img">
                            <img src={good_img()} alt="" />
                        </figure>
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
                                        ? data.good.seiryo.boys.dd[good_array()]
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
                                    : select === "seiryo" && gender === "male"
                                    ? data.good.seiryo.boys.p[good_array()]
                                    : select === "seiryo" && gender === "woman"
                                    ? data.good.seiryo.ladies.p[good_array()]
                                    : console.log("err")}
                            </p>
                        </section>
                    </section>
                    <section>
                        <dl className="result-title">
                            <dt>一緒に成長しよう</dt>
                            <dd>
                                <em className="result-dot">選手</em>を
                                <em>紹介します</em>
                            </dd>
                        </dl>
                        <ul className="slider_btn_flex">
                            <li>
                                <button
                                    className="btn-reset"
                                    onClick={() =>
                                        setSlider((slider - 1 + 6) % 6)
                                    }
                                >
                                    <img
                                        src={slider_btn_left}
                                        alt="leftボタン"
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn-reset"
                                    onClick={() => setSlider((slider + 1) % 6)}
                                >
                                    <img
                                        src={slider_btn_right}
                                        alt="rightボタン"
                                    />
                                </button>
                            </li>
                        </ul>
                        <div className="slider-img-flex">
                            <figure className="result_slider_img">
                                <img src={img_slider[slider]} alt="" />
                            </figure>
                            <p>SOLTILO CHIBA FC</p>
                        </div>
                        <h5 className="result-sbtitle">
                            {data.slider.player[slider]}
                        </h5>
                        <p className="slider-p">{data.slider.p[slider]}</p>
                        <div className="slider-active-flex">
                            <button onClick={() => setSlider(0)}>
                                <p
                                    className={
                                        slider === 0
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                            <button onClick={() => setSlider(1)}>
                                <p
                                    className={
                                        slider === 1
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                            <button onClick={() => setSlider(2)}>
                                <p
                                    className={
                                        slider === 2
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                            <button onClick={() => setSlider(3)}>
                                <p
                                    className={
                                        slider === 3
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                            <button onClick={() => setSlider(4)}>
                                <p
                                    className={
                                        slider === 4
                                            ? "slider-active-primary"
                                            : "slider-active-normal"
                                    }
                                ></p>
                            </button>
                            <button onClick={() => setSlider(5)}>
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
                </article>
                <Footer />
            </>
        </>
    );
}

export default Result;
