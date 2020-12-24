import styled from 'styled-components';
import DeleteIcon from '../../../../assets/images/icons/delete.png';

export const Wrapper = styled.div`
   
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