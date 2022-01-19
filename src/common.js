import { Link } from "react-router-dom";
import React from "react";
import kvimg from "./assets/img/headerimg.png";
import footer_logo from "./assets/img/footer_logo.png";
import sponser_1 from "./assets/img/sp_1.jpg";
import sponser_2 from "./assets/img/sp_2.jpg";
import sponser_3 from "./assets/img/sp_3.jpg";
import ol_img1 from "./assets/img/ol_1.png";
import ol_img2 from "./assets/img/ol_2.png";
import ol_img3 from "./assets/img/ol_3.png";
import about_img from "./assets/img/about_img.png";
import about_solid from "./assets/img/about_solid_bg.png";
import about_soltilo from "./assets/img/about_soltio_bg.png";
import pro_section_arrow from "./assets/img/pro_section_arrow.png";
import pro_img from "./assets/img/vision_img.png";
import { Fade } from "react-awesome-reveal";

export function Header() {
    return (
        <header>
            <h1>WAHS</h1>
            <img src={kvimg} alt="本田圭佑の画像" className="kv" />
            <h2 className="kv-text kv-t">本田圭佑プロデュース</h2>
            <h2 className="kv-text kv-d">
                サッカーを通じ
                <br />
                夢と希望を支え感動を与える
            </h2>
            <p className="kv-scroll">scroll</p>
        </header>
    );
}

export function Topmain() {
    return (
        <article>
            <section className="about_section_css">
                <div>
                    <img src={about_soltilo} alt="" className="soltilo_svg" />
                    <img src={about_solid} alt="" className="about_solid" />
                    <Fade direction="up" duration="800">
                        <figure className="about_img">
                            <img src={about_img} alt="" />
                        </figure>
                    </Fade>
                    <Fade direction="up" duration="800">
                        <div className="about_wrapper">
                            <h3>
                                <em>ABOUT US</em>WHASについて
                            </h3>
                            <p className="pro_p_1">
                                世界一強い育成アカデミーになり、
                                <br />
                                日本のサッカーの未来を創造していく中で、
                                <br />
                                圧倒的な努力を続け、
                                <br />
                                選手・指導者とともに成長し、
                                <br />
                                『世界』に羽ばたき、
                                <br />
                                世界で認められる『エース』のような存在を
                                <br />
                                創出していくことが
                                <br />
                                WAHS（ワズ）の使命です。
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>
            <Fade direction="up" duration="800">
                <figure className="pro_img">
                    <img src={pro_img} alt="" />
                </figure>
            </Fade>
            <section>
                <Fade direction="up" duration="800">
                    <section className="pro_section1">
                        <h3>
                            <em>VISION</em>プロになるためには
                        </h3>
                        <p className="pro_p1">
                            プロになるために何をすればいいのか。
                            <br />
                            言われたことを黙ってやるだけじゃだめ。
                            <br />
                            自分で考えなきゃいけない
                            <br />
                            努力の大小や才能の有無ではなく、
                            <br />
                            日々の練習に対する正しい「意識」の持ち方が大切。
                            <br />
                        </p>
                        <p className="pro_p2">だからこそ</p>
                        <p className="pro_p3">
                            自分を知り「<em className="dot">意識</em>
                            」を変えていこう
                        </p>
                    </section>
                </Fade>
                <Fade direction="up" duration="800">
                    <section className="pro_section2">
                        <img
                            src={pro_section_arrow}
                            alt=""
                            className="pro_section_arrow"
                        />
                        <p className="pro_p4">WAHSの自己診断機能では</p>
                        <p className="pro_p5">
                            <em>３つ</em>の診断結果を用意しています
                        </p>
                    </section>
                </Fade>
            </section>
            <Fade direction="up" duration="800">
                <ol>
                    <li>
                        <ul>
                            <li className="ol-flex">
                                <p>01</p>
                                <dl>
                                    <dt>
                                        <em className="dot">自分</em>を知る
                                    </dt>
                                    <dd>
                                        自分の能力に近い
                                        <br />
                                        SOLTILOのOG・OBを紹介
                                    </dd>
                                    <dd className="dd-primary">
                                        目指していく未来が見える
                                    </dd>
                                </dl>
                            </li>
                            <li className="ol-img-before1">
                                <figure>
                                <img
                                    alt="未来を見ている少年の写真"
                                    src={ol_img1}
                                    className="ol-img"
                                />
                                </figure>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="ol-flex">
                                <dl>
                                    <dt>
                                        <em className="dot">苦手</em>を知る
                                    </dt>
                                    <dd>
                                        苦手を克服するための
                                        <br />
                                        おすすめトレーニングを紹介
                                    </dd>
                                    <dd className="dd-primary">
                                        苦手の対策方法を知る
                                    </dd>
                                </dl>
                                <p>02</p>
                            </li>
                            <li className="ol-img-before2">
                                <figure>
                                <img
                                    alt="未来を見ている少年の写真"
                                    src={ol_img2}
                                    className="ol-img"
                                />
                                </figure>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="ol-flex">
                                <p>03</p>
                                <dl>
                                    <dt>
                                        <em className="dot">得意</em>を知る
                                    </dt>
                                    <dd>
                                        得意を一緒に伸ばしていく
                                        <br />
                                        優秀なスタッフを紹介
                                    </dd>
                                    <dd className="dd-primary">
                                        得意な面を伸ばしていこう
                                    </dd>
                                </dl>
                            </li>
                            <li className="ol-img-before3">
                                <figure>
                                <img
                                    alt="未来を見ている少年の写真"
                                    src={ol_img3}
                                    className="ol-img"
                                />
                                </figure>
                            </li>
                        </ul>
                    </li>
                </ol>
            </Fade>
            <Link to="/question1" className="main-button">
                診断を始める
            </Link>
        </article>
    );
}

export function Footer() {
    return (
        <footer>
            <img src={footer_logo} alt="WAHS" className="footer-logo" />
            <ul>
                <li>
                    <a href="https://wahs.jp/">チームサイト</a>
                </li>
                <li>
                    <a href="https://wahs.jp/">コーポレートサイト</a>
                </li>
            </ul>
            <div className="sponser-flex">
                <img src={sponser_1} alt="スポンサー" />
                <img src={sponser_2} alt="スポンサー" />
                <img src={sponser_3} alt="スポンサー" />
            </div>
            <p>
                <small>COPYRIGHT &copy; WAHS ALL RIGHTS RESERVED.</small>
            </p>
        </footer>
    );
}
