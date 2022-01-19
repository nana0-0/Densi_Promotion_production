import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/nomaraize.css";
import "./assets/css/style.scss";
import Top from "./Top";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Result from "./Result.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { RecoilRoot, useRecoilSnapshot } from "recoil";

gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin);

function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.debug("The following atoms were modified:");
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}

function Index() {

    return (
        <React.StrictMode>
            <RecoilRoot>
                <DebugObserver />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Top />} />
                            <Route path="/question1" element={<Question1 />} />
                            <Route path="/question2" element={<Question2 />} />
                            <Route path="/question3" element={<Question3 />} />
                            <Route path="/question4" element={<Question4 />} />
                            <Route path="/question5" element={<Question5 />} />
                            <Route path="/question6" element={<Question6 />} />
                            <Route path="/question7" element={<Question7 />} />
                            <Route path="/question8" element={<Question8 />} />
                            <Route path="/result" element={<Result />} />
                        </Routes>
                    </BrowserRouter>
            </RecoilRoot>
        </React.StrictMode>
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
