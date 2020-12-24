import React, {useState, useEffect} from 'react';
import {Wrapper} from './style';

const Steps = ({
        activeTab,
        setActiveTab
    }) => {
    return (
        <Wrapper>
            <ul>
                <li className={activeTab === 1 ? 'active step-li' : 'step-li'} onClick={()=>setActiveTab(1)}>
                    <div>
                        <span>Step 1</span>
                        <strong>Course Details</strong>
                    </div>
                </li>
                <li className={activeTab === 2 ? 'active' : 'step-li'} onClick={()=>setActiveTab(2)}>
                    <div>
                        <span>Step 2</span>
                        <strong>Curriculum</strong>
                    </div>
                </li>
                <li className={activeTab === 3 ? 'active' : 'step-li'} onClick={()=>setActiveTab(3)}>
                    <div>
                        <span>Step 3</span>
                        <strong>Pricing</strong>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Steps;