import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import height_img from "./assets/img/height-img.svg";
import height_img_memori from "./assets/img/height-omg-memori.svg";
import {useContext} from "react";
import {GlobalContext} from "./index.js";

function Question5() {
    const { context, setContext } = useContext(GlobalContext);
    const [height, setHeight] = useState(160);

    context.height = height;

    let ratio_style;
    let raito_init = "50%";
    let a;

    console.log(30 + 3 * (height - 130))
    if (height < 130) {
        raito_init = "100%";
    } else if (height <= 135) {
        a = height - (30 + 3 * (height - 130));
        raito_init = a + "%";
    } else if (height <= 140) {
        a = height - (30 + 3 * (height - 130));
        raito_init = a + "%";
    } else if(height <=145){
        raito_init = "73%";
    }else if (height <= 150) {
        a = height -80-( (height-150+1)*4)
        raito_init = a + "%";
    }else if(height <=155){
        raito_init = "58%";
    }else if (height <= 160) {
        raito_init = "50%";
    } else if(height <=165){
        raito_init = "42%";
    }else if (height <= 170) {
        raito_init = "34%";
    }else if(height <=175){
        raito_init = "26%";
    }else if (height <= 180) {
        raito_init = "18%";
    }else if(height <= 185){
        raito_init = "11%";
    } else if (height <= 190) {
        raito_init = "0%";
    }

    ratio_style = {
        width: "6px",
        background:
            "linear-gradient(to bottom, #707070 " +
            raito_init +
            ", #00AEEF " +
            raito_init +
            " 80%)",
        height: "300px",
        "borderRadius": "20px",
        "marginRight": "10px",
    };

    console.log(height);
    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.05</h4>
                    </dt>
                    <dd>
                        <h5>身長は何cｍですか？</h5>
                    </dd>
                </dl>
                <form className="height-form">
                    <input
                        type="number"
                        className="input_height"
                        value={height}
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }}
                    />
                </form>
                <figure className="height-img-flex">
                    <img
                        src={height_img}
                        alt="身長を図っている男性"
                        className="height-img"
                    />
                    <img
                        src={height_img_memori}
                        alt="メモリ"
                        height="300px"
                        className="memori"
                    />
                    <div style={ratio_style}></div>
                </figure>
                <h6 className="height-render">{height}cm</h6>
            </main>
            <div className="question-footer">
                <Link to="/question6" className="question-enter-btn">
                    決定
                </Link>
                <ul className="questions-active-flex">
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-primary"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                </ul>
            </div>
        </>
    );
}

export default Question5;
