import React, {useState, useEffect} from 'react';
//import {isEmpty} from '../../Common/common'
import ListingContent from './listingcontent';
// import {CourseListing} from './constants';
import StartContent from './startcontent';
import {Wrapper} from './style';

const StartAdding = ({visibleScreen,
  setCourseId,
   setVisibleScreen}) => {
  const [nexScreen, setNextScreen] = useState('');
    if(visibleScreen !== "START"){
        return null;
    }
    
    return(
        <Wrapper>
            {
              nexScreen!=='ADD_NEW' ?   
              <ListingContent gotoEdit={setVisibleScreen} setCourseId={setCourseId} setVisibleScreen={setNextScreen} /> 
              :
              <StartContent 
                visibleScreen={visibleScreen} 
                setVisibleScreen={setVisibleScreen}
              />
            }
        </Wrapper>
    )
}

export default StartAdding;