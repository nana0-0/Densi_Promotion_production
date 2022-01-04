import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import time_render_img from "./assets/img/time_render.svg";
import {useContext} from "react";
import {GlobalContext} from "./index.js";

function Question4() {
    const { context, setContext } = useContext(GlobalContext);
    const [counter, setCounter] = useState("7.53");

    context.counter = counter;

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
                <form className="time-form">
                    <input
                        type="number"
                        className="input_time"
                        value={counter}
                        onChange={(e) => {
                            setCounter(e.target.value);
                        }}
                    />
                </form>
                <figure className="time-render-img">
                    <img src={time_render_img} alt="タイムメータ" />
                </figure>
                <h6 className="time-render">{counter}秒</h6>
            </main>
            <div className="question-footer">
                <Link to="/question5" className="question-enter-btn">
                    決定
                </Link>
                <ul className="questions-active-flex">
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-primary"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                </ul>
            </div>
        </>
    );
}

export default Question4;
