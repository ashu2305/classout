import styled from 'styled-components';
import Shape from '../../../../assets/images/icons/shape.svg';

export const Wrapper = styled.div`
    flex: 0 0 235px;
    // height: 532px;
    background: linear-gradient(146deg, #F9E7FF 0%, #A2D4FC 100%);
    box-shadow: 0 10px 24px 10px rgba(167,183,209,0.18);
    ul {
        background-image: url(${Shape});
        background-repeat:no-repeat;
        background-position: bottom -56px right -38px;
        background-size: 245px 210px;
        height:100%;
        padding:30px 0;
    }
    li {
        color: rgba(35,71,131,0.5);
        padding:0 17px;
        margin-bottom:38px;
        cursor: pointer;
        position: relative;
        font-family:'cerebri_sansmedium', sans-serif;
        div {
            position: relative;
            padding-left:38px;
            &:before {
                position: absolute;
                left:0;
                top:3px;
                height: 24px;
                width: 24px;
                border-radius:50%;
                border:2px solid #DFC9E6;
                background-color: #fff;
                content:'';
                opacity: 0.5;
            }
        }
        span, strong {
            display:block;
            font-weight:normal;
        }
        span {
            font-size:14px;
        }
        strong {
            font-size:17px;
        }
        &.active {
            & div:before{
                background-color:green;
            }
            color: rgba(35,71,131,1);
            &:after {
                position: absolute;
                right:0;
                top:50%;
                margin-top:-5px;
                width: 0; 
                height: 0; 
                content:'';
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent; 
                border-right:10px solid #fff; 
            }
        }
    }
`