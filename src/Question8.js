import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export const TrackingState = atom({
    key: "tracking",
    default: false,
});

export const GkcoachState = atom({
    key: "gkcoach",
    default: false,
});

export const LawnState = atom({
    key: "lawn",
    default: false,
});

export const DormitoryState = atom({
    key: "dormitory",
    default: false,
});
export const ExpeditionState = atom({
    key: "expedition",
    default: false,
});

export const TrainerState = atom({
    key: "trainer",
    default: false,
});

export const KnowsState = atom({
    key: "knows",
    default: false,
});

export const InstitutionState = atom({
    key: "institution",
    default: false,
});

export const PhysicalcoachState = atom({
    key: "physicalcoach",
    default: false,
});

export const ForeignerState = atom({
    key: "foreigner",
    default: false,
});

export const SponserState = atom({
    key: "sponser",
    default: false,
});

export const PersonalgymState = atom({
    key: "personalgym",
    default: false,
});

export const PagetopState = atom({
    key: "pagetop",
    default: false,
});

function Question8() {
    const setPagetop = useSetRecoilState(PagetopState);

    useEffect(() => {
        setPagetop(true);
    }, []);

    const [tracking, setTracking] = useRecoilState(TrackingState);
    const [tracking_style, setTracking_style] = useState("off_style");

    const [gkcoach, setGkcoach] = useRecoilState(GkcoachState);
    const [gkcoach_style, setGkcoach_style] = useState("off_style");

    const [lawn, setLawn] = useRecoilState(LawnState);
    const [lawn_style, setLawn_style] = useState("off_style");

    const [dormitory, setDormitory] = useRecoilState(DormitoryState);
    const [dormitory_style, setDormitory_style] = useState("off_style");

    const [expedition, setExpedition] = useRecoilState(ExpeditionState);
    const [expedition_style, setExpedition_style] = useState("off_style");

    const [trainer, setTrainer] = useRecoilState(TrainerState);
    const [trainer_style, setTrainer_style] = useState("off_style");

    const [knows, setKnows] = useRecoilState(KnowsState);
    const [knows_style, setKnows_style] = useState("off_style");

    const [institution, setInstitution] = useRecoilState(InstitutionState);
    const [institution_style, setInstitution_style] = useState("off_style");

    const [physicalcoach, setPhysicalcoach] =
        useRecoilState(PhysicalcoachState);
    const [physicalcoach_style, setPhysicalcoach_style] = useState("off_style");

    const [foreigner, setForeigner] = useRecoilState(ForeignerState);
    const [foreigner_style, setForeigner_style] = useState("off_style");

    const [sponser, setSponser] = useRecoilState(SponserState);
    const [sponser_style, setSponser_style] = useState("off_style");

    const [personalgym, setPersonalgym] = useRecoilState(PersonalgymState);
    const [personalgym_style, setPersonalgym_style] = useState("off_style");

    const [array, setArray] = useState([]);

    return (
        <>
            <main className="queation-wrapper">
                <dl className="question-title">
                    <dt>
                        <h4>Q.08</h4>
                    </dt>
                    <dd>
                        <h5>興味のあるものを選択してください</h5>
                    </dd>
                </dl>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={tracking_style}
                            onClick={() => {
                                if (tracking === false) {
                                    setTracking(true);
                                    setTracking_style("on_style");
                                    setArray(["tracking", ...array]);
                                } else {
                                    setTracking(false);
                                    setTracking_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "tracking")
                                    );
                                }
                            }}
                        >
                            トラッキングシステム
                        </button>
                    </li>
                    <li>
                        <button
                            className={gkcoach_style}
                            onClick={() => {
                                if (gkcoach === false) {
                                    setGkcoach(true);
                                    setGkcoach_style("on_style");
                                    setArray(["gkcoach", ...array]);
                                } else {
                                    setGkcoach(false);
                                    setGkcoach_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "gkcoach")
                                    );
                                }
                            }}
                        >
                            GKコーチ
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={lawn_style}
                            onClick={() => {
                                if (lawn === false) {
                                    setLawn(true);
                                    setLawn_style("on_style");
                                    setArray(["lawn", ...array]);
                                } else {
                                    setLawn(false);
                                    setLawn_style("off_style");
                                    setArray(array.filter((a) => a !== "lawn"));
                                }
                            }}
                        >
                            人工芝生
                        </button>
                    </li>
                    <li>
                        <button
                            className={dormitory_style}
                            onClick={() => {
                                if (dormitory === false) {
                                    setDormitory(true);
                                    setDormitory_style("on_style");
                                    setArray(["dormitory", ...array]);
                                } else {
                                    setDormitory(false);
                                    setDormitory_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "dormitory")
                                    );
                                }
                            }}
                        >
                            選手寮
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={expedition_style}
                            onClick={() => {
                                if (expedition === false) {
                                    setExpedition(true);
                                    setExpedition_style("on_style");
                                    setArray(["expedition", ...array]);
                                } else {
                                    setExpedition(false);
                                    setExpedition_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "expedition")
                                    );
                                }
                            }}
                        >
                            海外遠征
                        </button>
                    </li>
                    <li>
                        <button
                            className={trainer_style}
                            onClick={() => {
                                if (trainer === false) {
                                    setTrainer(true);
                                    setTrainer_style("on_style");
                                    setArray(["trainer", ...array]);
                                } else {
                                    setTrainer(false);
                                    setTrainer_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "trainer")
                                    );
                                }
                            }}
                        >
                            リハビリトレーナー
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={knows_style}
                            onClick={() => {
                                if (knows === false) {
                                    setKnows(true);
                                    setKnows_style("on_style");
                                    setArray(["knows", ...array]);
                                } else {
                                    setKnows(false);
                                    setKnows_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "knows")
                                    );
                                }
                            }}
                        >
                            knows
                        </button>
                    </li>
                    <li>
                        <button
                            className={institution_style}
                            onClick={() => {
                                if (institution === false) {
                                    setInstitution(true);
                                    setInstitution_style("on_style");
                                    setArray(["institution", ...array]);
                                } else {
                                    setInstitution(false);
                                    setInstitution_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "institution")
                                    );
                                }
                            }}
                        >
                            広い施設
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={physicalcoach_style}
                            onClick={() => {
                                if (physicalcoach === false) {
                                    setPhysicalcoach(true);
                                    setPhysicalcoach_style("on_style");
                                    setArray(["physicalcoach", ...array]);
                                } else {
                                    setPhysicalcoach(false);
                                    setPhysicalcoach_style("off_style");
                                    setArray(
                                        array.filter(
                                            (a) => a !== "physicalcoach"
                                        )
                                    );
                                }
                            }}
                        >
                            フィジカルコーチ
                        </button>
                    </li>
                    <li>
                        <button
                            className={foreigner_style}
                            onClick={() => {
                                if (foreigner === false) {
                                    setForeigner(true);
                                    setForeigner_style("on_style");
                                    setArray(["foreigner", ...array]);
                                } else {
                                    setForeigner(false);
                                    setForeigner_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "foreigner")
                                    );
                                }
                            }}
                        >
                            外国人選手
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                        <button
                            className={sponser_style}
                            onClick={() => {
                                if (sponser === false) {
                                    setSponser(true);
                                    setSponser_style("on_style");
                                    setArray(["sponser", ...array]);
                                } else {
                                    setSponser(false);
                                    setSponser_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "sponser")
                                    );
                                }
                            }}
                        >
                            スポンサー
                        </button>
                    </li>
                    <li>
                        <button
                            className={personalgym_style}
                            onClick={() => {
                                if (personalgym === false) {
                                    setPersonalgym(true);
                                    setPersonalgym_style("on_style");
                                    setArray(["personalgym", ...array]);
                                } else {
                                    setPersonalgym(false);
                                    setPersonalgym_style("off_style");
                                    setArray(
                                        array.filter((a) => a !== "personalgym")
                                    );
                                }
                            }}
                        >
                            パーソナルジム
                        </button>
                    </li>
                </ul>
                <h6 className="queation8">
                    <em>{array.length}つ</em>選択中
                </h6>
            </main>
            <div className="question-footer">
                <Link to="/result" className="question-enter-btn">
                    決定
                </Link>
                <div className="questions-active-flex">
                    <Link to="/question1">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question2">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question3">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question4">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question5">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question6">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question7">
                        <p className="active-normal"></p>
                    </Link>
                    <Link to="/question8">
                        <p className="active-primary"></p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Question8;
