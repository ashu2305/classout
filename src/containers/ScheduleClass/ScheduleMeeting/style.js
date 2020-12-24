import styled from 'styled-components';
import DeleteIcon from '../../../assets/images/icons/delete.png';

export const Wrapper = styled.div`
margin-bottom:16px;
    h3 {
        font-family: 'cerebri_sansregular';
        font-size: 24px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.52;
        letter-spacing: normal;
        text-align: left;
        color:#2a2e4c;
        .left-arrow {
            border: solid #2A2E4C;
            border-width: 0 1px 1px 0;
            display: inline-block;
            padding: 8px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            margin-right:8;
            cursor: pointer;
        }
    }
    .boxed-radio{
        float: left;
        width: 45%;
        border: 1px solid red;
        padding: 5px;
        border-radius: 5px;
        border: solid 1px #cfdceb;
        .radio-label{
            font-family: 'cerebri_sansregular';
            font-size: 17px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: left;
            color: rgba(42, 46, 76, 0.5);
        }
        .radio-desc{
            font-family: 'cerebri_sansregular';
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: left;
            color: rgba(35, 37, 43, 0.5);
        }
    }
    .boxed-radio.right{
        float:right;
    }
    .add-more {
        color: #3B38FF;
        font-size:15px;
        line-height:18px;
        cursor: pointer;
        img {
            width:18px;
            margin-right:7px;
        }
    }
    .added-input {
        position: relative;
        input {
            margin:12px 0;
            padding-right:50px;
        }
        .remove-field {
            background-image: url(${DeleteIcon});
            background-repeat:no-repeat;
            background-position:center center;
            background-size:contain;
            position:absolute;
            right:13px;
            top:13px;
            width:16px;
            height:16px;
            content:'';
            cursor: pointer;
        }
    }
    .upload-container {
        background-color: rgba(244,230,255,0.45);
        padding:0 40px 60px;
        margin-top:20px;
        text-align: center;
        .file-upload {
            position: relative;
            padding-top:20px;
            span {
                position: absolute;
                left:0;
                right:0;
                text-align:center;
                height: 40px;
                line-height:38px;
                width: 150px;
                margin:0 auto;
                border-radius:4px;
                color: rgba(123,60,175, 0.8);
                border: 1px solid #DFC6F3;
                background-color: rgba(255,255,255,0.94);
                z-index:1;
            }
            input {
                position: absolute;
                left:0;
                right:0;
                width: 150px;
                height: 40px;
                width: 150px;
                margin:0 auto;
                opacity:0;
                cursor: pointer;
                z-index:2;
            }
        }
    }
`