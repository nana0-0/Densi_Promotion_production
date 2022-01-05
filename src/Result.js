import React from "react";
import { Header, Footer, Topmain } from "./common.js";
import data from "./assets/data/result.json";
import { useEffect } from "react";
import result_now_img from "./assets/img/result-now-img.png";
import result_nigate_img from "./assets/img/result-nigate-img.png";
import result_tokui_img from "./assets/img/result-tokui-img.png";
import { useContext } from "react";
import { GlobalContext } from "./index.js";
import slider_btn_left from "./assets/img/result_slider_left.png";
import slider_btn_right from "./assets/img/result_slider_right.png";
import slider_img from "./assets/img/result_slider_img.png";
import { useState } from "react";

function Result() {
    const { context, setContext } = useContext(GlobalContext);
    let pagetop = context.pagetop;
    useEffect(() => {
        if(pagetop===true) {
        window.scrollTo(0, 2100);
        setContext({...context, pagetop:false});
        }
    });

    let gender = context.gender;
    let select = context.select;
    let confidence = context.confidence;
    let counter = context.counter;
    let height = context.height;
    let position = context.position;
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

    console.log(gender);
    console.log(select);
    console.log(confidence);
    console.log(counter);
    console.log(height);
    console.log(position);
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
                        <h5 className="result-sbtitle">{data.seiryo.og[0]}</h5>
                        <ul className="result-now-flex">
                            <li className="result-now-point1">
                                {data.seiryo.point1[0]}
                            </li>
                            <li className="result-now-point2">
                                {data.seiryo.point2[0]}
                            </li>
                        </ul>
                        <figure className="result-now-img">
                            <img src={result_now_img} alt="" />
                        </figure>
                        <section className="result-now">
                            <dl>
                                <dt>{data.seiryo.dt[0]}</dt>
                                <dd className="result-team">
                                    {data.seiryo.dd[0]}
                                </dd>
                            </dl>
                            <p>{data.seiryo.p[0]}</p>
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
                            {data.nigate.nigate[0]}
                        </h5>
                        <ul>
                            <li className="result-nigate-point1">
                                {data.nigate.point[0]}
                            </li>
                        </ul>
                        <figure className="result-nigate-img">
                            <img src={result_nigate_img} alt="" />
                        </figure>
                        <section className="result-now">
                            <dl>
                                <dt>{data.nigate.dt[0]}</dt>
                                <dd className="result-team">
                                    {data.nigate.dd[0]}
                                </dd>
                            </dl>
                            <p>{data.nigate.p[0]}</p>
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
                            {data.tokui.nigate[0]}
                        </h5>
                        <ul>
                            <li className="result-tokui-point1">
                                {data.tokui.point[0]}
                            </li>
                        </ul>
                        <figure className="result_tokui_img">
                            <img src={result_tokui_img} alt="" />
                        </figure>
                        <section className="result-now">
                            <dl>
                                <dt>{data.tokui.dt[0]}</dt>
                                <dd className="result-team">
                                    {data.tokui.dd[0]}
                                </dd>
                            </dl>
                            <p>{data.tokui.p[0]}</p>
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
                                <button className="btn-reset" onClick={()=> setSlider((slider-1+6)%6)}>
                                <img src={slider_btn_left} alt="leftボタン" />
                                </button>
                            </li>
                            <li>
                            <button className="btn-reset" onClick={()=> setSlider((slider+1)%6)}>
                                <img src={slider_btn_right} alt="rightボタン" />
                                </button>
                            </li>
                        </ul>
                        <div className="slider-img-flex">
                            <figure className="result_slider_img">
                                <img src={slider_img} alt="" />
                            </figure>
                            <p>SOLTILO CHIBA FC</p>
                        </div>
                        <h5 className="result-sbtitle">
                            {data.slider.player[slider]}
                        </h5>
                        <p className="slider-p">{data.slider.p[slider]}</p>
                        <div className="slider-active-flex">
                        <button onClick={() => setSlider(0)}><p className={slider===0?"slider-active-primary":"slider-active-normal"}></p></button>
                        <button onClick={() => setSlider(1)}><p className={slider===1?"slider-active-primary":"slider-active-normal"}></p></button>
                        <button onClick={() => setSlider(2)}><p className={slider===2?"slider-active-primary":"slider-active-normal"}></p></button>
                        <button onClick={() => setSlider(3)}><p className={slider===3?"slider-active-primary":"slider-active-normal"}></p></button>
                        <button onClick={() => setSlider(4)}><p className={slider===4?"slider-active-primary":"slider-active-normal"}></p></button>
                        <button onClick={() => setSlider(5)}><p className={slider===5?"slider-active-primary":"slider-active-normal"}></p></button>
                        </div>
                    </section>
                </article>
                <Footer />
            </>
        </>
    );
}

export default Result;
