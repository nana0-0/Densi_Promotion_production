import React from "react";
import { Header, Footer, Topmain } from "./common.js";
import data from "./assets/data/result.json";
import { useEffect } from "react";
import result_now_img from "./assets/img/result-now-img.png";
import result_nigate_img from "./assets/img/result-nigate-img.png";
import result_tokui_img from "./assets/img/result-tokui-img.png";
import {useContext} from "react";
import {GlobalContext} from "./index.js";
function Result() {
    useEffect(() => {
        window.scrollTo(0, 2100);
    });
    const { context, setContext } = useContext(GlobalContext);
    let gender = context.gender;
    let select = context.select;
    let counter = context.counter;

    console.log(select);

    console.log(counter);

    let gender_text;
    if(gender === "woman"){
        gender_text = "OG";
    }else{
        gender_text = "OB";
    }
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
                                <em className="result-dot space">{gender_text}選手</em>を
                                <em>紹介します</em>
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
                            <img
                                src={result_nigate_img}
                                alt=""
                            />
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
                            <img
                                src={result_tokui_img}
                                alt=""
                            />
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
                        <figure className="result_tokui_img">
                            <img
                                src={result_tokui_img}
                                alt=""
                            />
                        </figure>
                        <h5 className="result-sbtitle">
                            {data.tokui.nigate[0]}
                        </h5>
                       <p>{data.slider.p}</p>
                       <ul>
                           <li></li>
                       </ul>
                    </section>
                </article>
                <Footer />
            </>
        </>
    );
}

export default Result;
