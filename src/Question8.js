import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useContext} from "react";
import {GlobalContext} from "./index.js";

function Question8() {
    const { context, setContext } = useContext(GlobalContext);
    const [tracking, setTracking] = useState(false);
    const [tracking_style,setTracking_style] = useState('off_style');
    context.tracking = tracking;

    const [gkcoach, setGkcoach] = useState(false);
    const [gkcoach_style,setGkcoach_style] = useState('off_style');
    context.gkcoach = gkcoach;

    const [lawn, setLawn] = useState(false);
    const [lawn_style,setLawn_style] = useState('off_style');
    context.lawn = lawn;

    const [dormitory, setDormitory] = useState(false);
    const [dormitory_style,setDormitory_style] = useState('off_style');
    context.dormitory= dormitory;
    
    const [expedition, setExpedition] = useState(false);
    const [expedition_style,setExpedition_style] = useState('off_style');
    context.expedition = expedition;

    const [trainer, setTrainer] = useState(false);
    const [trainer_style,setTrainer_style] = useState('off_style');
    context.trainer = trainer;

    const [knows, setKnows] = useState(false);
    const [knows_style,setKnows_style] = useState('off_style');
    context.knows = knows;

    const [institution, setInstitution] = useState(false);
    const [institution_style,setInstitution_style] = useState('off_style');
    context.institution = institution;

    const [physicalcoach, setPhysicalcoach] = useState(false);
    const [physicalcoach_style,setPhysicalcoach_style] = useState('off_style');
    context.physicalcoach= physicalcoach;

    const [foreigner, setForeigner] = useState(false);
    const [foreigner_style,setForeigner_style] = useState('off_style');
    context.foreigner = foreigner;

    const [sponser, setSponser] = useState(false);
    const [sponser_style,setSponser_style] = useState('off_style');
    context.sponser= sponser;

    const [personalgym, setPersonalgym] = useState(false);
    const [personalgym_style,setPersonalgym_style] = useState('off_style');
    context.personalgym = personalgym;

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
                            onClick={() =>{ if(tracking === false){setTracking(true); setTracking_style('on_style'); array.push('tracking')}else{ setTracking(false);setTracking_style('off_style'); array.pop('tracking')}}}  
                        >
                            トラッキングシステム
                        </button>
                    </li>
                    <li>
                        <button
                          className={gkcoach_style}
                           onClick={() =>{ if(gkcoach=== false){ setGkcoach(true); setGkcoach_style('on_style'); array.push('gkcoach')}else{  setGkcoach(false);setGkcoach_style('off_style'); array.pop('gkcoach')}}}  
                           
                        >
                            GKコーチ
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                    <button
                          className={lawn_style}
                           onClick={() =>{ if(lawn=== false){ setLawn(true); setLawn_style('on_style'); array.push('lawn')}else{  setLawn(false);setLawn_style('off_style');array.pop('lawn')}}}  
                           
                        >
                            人工芝生
                        </button>
                    </li>
                    <li>
                    <button
                          className={dormitory_style}
                           onClick={() =>{ if(dormitory=== false){ setDormitory(true); setDormitory_style('on_style');array.push('dormitory')}else{  setDormitory(false);setDormitory_style('off_style');array.pop('dormitory')}}}  
                           
                        >
                            選手寮
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                    <button
                          className={expedition_style}
                           onClick={() =>{ if(expedition=== false){ setExpedition(true); setExpedition_style('on_style');array.push('expedition')}else{  setExpedition(false);setExpedition_style('off_style');array.pop('expedition')}}}  
                           
                        >
                            海外遠征
                        </button>
                    </li>
                    <li>
                    <button
                          className={trainer_style}
                           onClick={() =>{ if(trainer=== false){ setTrainer(true); setTrainer_style('on_style');array.push('trainer')}else{  setTrainer(false);setTrainer_style('off_style');array.pop('trainer')}}}  
                           
                        >
                            リハビリトレーナー
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                    <button
                          className={knows_style}
                           onClick={() =>{ if(knows=== false){ setKnows(true); setKnows_style('on_style');array.push('knows')}else{  setKnows(false);setKnows_style('off_style');array.pop('knows')}}}  
                           
                        >
                            knows
                        </button>
                    </li>
                    <li>
                    <button
                          className={institution_style}
                           onClick={() =>{ if(institution=== false){ setInstitution(true); setInstitution_style('on_style');array.push('institution')}else{  setInstitution(false);setInstitution_style('off_style');array.pop('institution')}}}  
                           
                        >
                            広い施設
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                      <button
                          className={physicalcoach_style}
                           onClick={() =>{ if(physicalcoach=== false){ setPhysicalcoach(true); setPhysicalcoach_style('on_style');array.push('physicalcoach')}else{  setPhysicalcoach(false);setPhysicalcoach_style('off_style');array.pop('physicalcoach')}}}  
                           
                        >
                            フィジカルコーチ
                        </button>
                    </li>
                    <li>
                    <button
                          className={foreigner_style}
                           onClick={() =>{ if(foreigner=== false){ setForeigner(true); setForeigner_style('on_style');array.push('foreigner')}else{  setForeigner(false);setForeigner_style('off_style');array.pop('foreigner')}}}  
                           
                        >
                            外国人選手
                        </button>
                    </li>
                </ul>
                <ul className="btn-flex">
                    <li>
                    <button
                          className={sponser_style}
                           onClick={() =>{ if(sponser=== false){ setSponser(true); setSponser_style('on_style');array.push('sponser')}else{  setSponser(false);setSponser_style('off_style');array.pop('sponser')}}}  
                           
                        >
                            スポンサー
                        </button>
                    </li>
                    <li>
                    <button
                          className={personalgym_style}
                           onClick={() =>{ if(personalgym=== false){ setPersonalgym(true); setPersonalgym_style('on_style');array.push('personalgym')}else{  setPersonalgym(false);setPersonalgym_style('off_style');array.pop('personalgym')}}}  
                           
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
                <ul className="questions-active-flex">
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-normal"></li>
                    <li className="active-primary"></li>
                </ul>
            </div>
        </>
    );
}

export default Question8;
