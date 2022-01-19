import React from "react";
import { Link } from "react-router-dom";
import time_render_img from "./assets/img/time_render.svg";

import { atom, useRecoilState } from "recoil";

export const CounterState = atom({
    key: "counter",
    default: "7.53",
});


function Question4() {
    const [counter, setCounter] = useRecoilState(CounterState)
    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.04</h4>
                    </dt>
                    <dd>
                        <h5>50mのタイムは何秒ですか？</h5>
                    </dd>
                </dl>
                <div className="time-form">
                    <p>ここに数字を入力してください</p>
                    <input
                        type="number"
                        className="input_time"
                        value={counter}
                        onChange={(e) => {
                            setCounter(e.target.value);
                        }}
                    />
                </div>
                <figure className="time-render-img">
                    <img src={time_render_img} alt="タイムメータ" />
                </figure>
                <h6 className="time-render">{counter}秒</h6>
            </main>
            <div className="question-footer">
                <Link to="/question5" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                <Link to="/question1"><p  className="active-normal"></p></Link>
                <Link to="/question2"><p  className="active-normal"></p></Link>
                <Link to="/question3"><p  className="active-normal"></p></Link>
                <Link to="/question4"><p className="active-primary"></p></Link>
                <Link to="/question5"><p  className="active-normal"></p></Link>
                <Link to="/question6"><p  className="active-normal"></p></Link>
                <Link to="/question7"><p  className="active-normal"></p></Link>
                <Link to="/question8"><p  className="active-normal"></p></Link>
                </div>
            </div>
        </>
    );
}

export default Question4;
