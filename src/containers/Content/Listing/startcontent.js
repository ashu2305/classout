import React, { useState } from 'react';
import Button from '../../../components/common/Button';
import Illustration from '../../../assets/images/icons/illustration.png';
import VideoImg from '../../../assets/images/icons/video-img.png';
import Play from '../../../assets/images/icons/play.png';
import Educational from '../../../assets/images/icons/educational@2x.png';
import NonEducational from '../../../assets/images/icons/non-educational@2x.png';
import LiveClasses from '../../../assets/images/icons/live-classes@2x.png';
import {Wrapper} from './style';


const StartContent = ({ gotoAdd,changeScreen }) => {
    const [status, setStatus] = useState(false);
    return (
        <Wrapper>
        <div>
            {/* {
                status ? */}
                <div className="card-container text-center">
                    <h3 onClick={()=>changeScreen('START')}><i className="left-arrow"></i>Please select what type of content are you trying to create?</h3>
                    <div className="d-flex justify-content-center">
                        <div className="card-outer" onClick={() => gotoAdd('','EDUCATIONAL')}>
                            <div className="card-inner">
                                <div className="imgb">
                                    <img src={Educational} alt="Educational" />
                                </div>
                                <h3>Educational</h3>
                                <p>Academic, Skills, Schools, etc</p>
                            </div>
                        </div>
                        <div className="card-outer" onClick={() => gotoAdd('','NON_EDUCATIONAL') }>
                            <div className="card-inner">
                                <div className="imgb">
                                    <img src={NonEducational} alt="NonEducational" />
                                </div>
                                <h3>Non-Educational</h3>
                                <p>Fitness, Recreation, etc</p>
                            </div>
                        </div>
                        <div className="card-outer" 
                        onClick={() => gotoAdd('','LIVE_CLASS')}>
                            <div className="card-inner">
                                <div className="imgb">
                                    <img src={LiveClasses} alt="Live Classes" />
                                </div>
                                <h3>Live Classes</h3>
                                <p>Schedule Live Classes</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* :
            <div className="row">
                <div className="col-md-8">
                    <div className="d-flex justify-content-between start-content">
                        <div className="txtb">
                            <span>Start Adding Content</span>
                            <Button
                                bType="button"
                                bValue="Add Content"
                                cName="btn btn-primary"
                                clickHandler={() => setStatus(true)}
                            />
                        </div>
                        <div className="imgb">
                            <img src={Illustration} alt="Illustration" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-end">
                    <div className="video-box">
                        <div className="imgb">
                            <img src={VideoImg} alt="Video" />
                            <span className="play">
                                <img src={Play} alt="Play" />
                            </span>
                        </div>
                        <div className="txtb">
                            <span>Guide</span>
                            <p>How to Add Content</p>
                        </div>
                    </div>
                </div>
            </div>
            } */}
        </div>
        </Wrapper>
    );
}

export default StartContent;