import React from 'react';
import Button from '../../../../components/common/Button';
import {Wrapper} from './style';

const TopBar = ({backToCalander,changeScreen}) => {
    return (
        <Wrapper className="d-flex justify-content-between">
            <h3 onClick={()=>{
                backToCalander?backToCalander('START'):changeScreen('START')
            }}><i className="left-arrow"></i>Live Classes</h3>
            {/* <Button 
                bType="button"
                bValue="Publish"
                cName="btn btn-primary"
           /> */}
        </Wrapper>
       
    )
}

export default TopBar;