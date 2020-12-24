import styled from 'styled-components';
import AddIcon from '../../../../assets/images/icons/add.svg';
import RemoveIcon from '../../../../assets/images/icons/close.svg';
import SearchIcon from '../../../../assets/images/icons/search.png';


export const Wrapper = styled.div`
.schedule-img-head{
    font-family: 'cerebri_sansregular';
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color:#2a2e4c;
}

.shadow-container {
    width: 100%;
    display: inline-block;
    padding: 15px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 0 5px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
.schedule-img-head-2{
    font-family: 'cerebri_sansregular';
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 22px;
  letter-spacing: normal;
  text-align: left;
  color:#2a2e4c;
  margin-top:13px;
  height:40px;
}
.schedule-img-desc{
  font-family: 'cerebri_sansregular';
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: normal;
  text-align: left;
  color: rgba(42, 46, 76, 0.8);
  margin-top:16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.img-head-left{
    float:left;
    width:50%;
}
.img-head-right{
    float:right;
    width:50%;
}
.boxed-radio{
    float: left;
    width: 100%;
    border: 1px solid red;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #cfdceb;
    height: 100%;

    .radio-label{
        font-family: 'cerebri_sanslight',sans-serif;
        font-size: 17px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        text-align: left;
        color: #333333;
    }
    .radio-desc {
        font-family: 'cerebri_sanslight',sans-serif;
        font-size: 14px;
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
.pre-head{
    font-family: 'cerebri_sanslight',sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.68;
  letter-spacing: normal;
  text-align: left;
  color:#2a2e4c;
}
     .upload-video{width: 855px;
        height: 563.5px;
        border-radius: 5px;
        box-shadow: 0px 3px 5.9px 0.7px #f2ecf7;
        background-color: #ffffff;
        /* height: 70%; */
        position: absolute;
        background: #fff;
        top: 15%;
        z-index: 9999;
        left: 15%;
        padding:24px 28px;
        .resource-name{
            font-family: 'cerebri_sansregular';
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.67;
            letter-spacing: normal;
            text-align: left;
            color: #226a4b;
        }
        .resource-title{
            font-family: 'cerebri_sansregular';
            font-size: 29px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.26;
            letter-spacing: normal;
            text-align: left;
            color: #000000;
        }
        .left-container{
            width: 207px !important;
            height: 398px;
            width: 1px;
            border-right: dotted 1px #cfdceb;
            float: left;
            left: 0px;
            position: relative;
            display: block;
            margin-top: 26px;
        }
        .right-container{
            text-align:center;
            img{
                width: 141px;
                height: 141px;
                cursor: pointer;
                margin-top:30px;
            }
            .upload-file-text{
                font-family: 'cerebri_sansregular';
                font-size: 16.5px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 3.52;
                letter-spacing: normal;
                text-align: center;
                color: #23252b;
                margin-top:30px;
            }
            .upload-file-note{
                opacity: 0.8;
                font-family: 'cerebri_sansregular';
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 4.83;
                letter-spacing: normal;
                text-align: center;
                color: rgba(35, 37, 43, 0.8);
                margin-top:10px;
            }
        }
        }
        .upload-file-overlay{
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background-color: #000;
            position: fixed;
            top: 0px;
            left: 0px;;
        }
    .add-new-section {
        background-color:#FAF4FF;
        padding:25px;
        margin-bottom:25px;
        border-radius:5px;
        .section-title {
            color:#60506D;
            font-size:14px;
            line-height:1;
            padding-right:160px;
            position: relative;
        }
        .add-more-icon{
            width: 18px;
            height: 18px;
            border-radius: 9px;
            border: 2px solid #3b38ff;
            text-align: center;
            line-height: 12px;
            color: #3b38ff;
            font-size: 15px;
            font-weight: bolder;
            margin-right: 20px;
            margin-top: 10px;
            float: left;
        }
        .add-more-content-button{
            opacity: 0.8;
            font-family: 'cerebri_sansregular';
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 40px;
            letter-spacing: normal;
            text-align: left;
            color: rgba(59, 56, 255, 0.8);
            cursor:pointer;
        }
        .more-content-options{
            width: 142px;
            height: 122px;
            box-shadow: 0px 3px 5.9px 0.7px #f2ecf7;
            background-color: #ffffff;
            position:absolute;
            z-index: 99999;
            .content-options{
                font-family: 'cerebri_sansregular';
                font-size: 13.5px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 40px;
                letter-spacing: normal;
                text-align: center;
                color: #269eff;
                cursor:pointer;
            }
            }
        .input-group {
            position: relative;
            font-family:'cerebri_sansmedium', sans-serif;
            .form-control {
                font-family:'cerebri_sansmedium', sans-serif;
                background-color: transparent;
                border:none;
                border-bottom: 1px solid #269EFF;
                border-radius:0;
                color: #60506D;
                font-size: 14px;
                height:24px;
                padding:0;
                line-height:1;
                :read-only {
                    border:none;
                }
            }
            span.save {
                position: absolute;
                right:0;
                bottom:0;
                color: #6260FF;
                font-size: 14px;
                padding-left:20px;
                line-height:24px;
                cursor: pointer;
                z-index:99;
                &:before {
                    content: '';
                    display: block;
                    width: 6px;
                    height: 10px;
                    border: solid #6260FF;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                    position: absolute;
                    left: 5px;
                    top: 9px;
                }
            }
        }
    }
    .drag-icon{
        width: 8.5px;
        height: 12px;
        border-radius: 0.8px;
        float: left;
        margin-top: 20px;
        margin-right: 10px;
        cursor: pointer;         
    }
    .content-type {
        border-radius: 5px;
        box-shadow: 0px 3px 5.9px 0.7px #f2ecf7;
        background-color: #fff;
        overflow:hidden;
        margin:13px 0;        
        .accordian-header {
            position: relative;
            height:50px;
            padding:0 160px 0 170px;
            > span {
                background-color: rgba(13, 202, 122,0.2);
                position: absolute;
                left:0;
                top:0;
                height:50px;
                width:130px;
                padding:16px 10px 0 19px;
                font-size:14px;
                font-family:'cerebri_sansregular', sans-serif;
                :after {
                    position: absolute;
                    top:0;
                    right:-20px;
                    width: 0;
                    height: 0;
                    content:"";
                    border-top: 50px solid rgba(13,202,122,0.2);
                    border-right: 20px solid transparent;
                }
            }
            .content-input{
                border-bottom:none !important;
            }
            .input-group {
                padding-top:16px;
            }
            .add-centent {
                font-family:'cerebri_sansregular', sans-serif;
                position: absolute;
                right:20px;
                top:20px;
                padding-left: 27px;
                background-image: url(${AddIcon});
                background-repeat: no-repeat;
                background-position: left center;
                background-size: 18px 18px;
                font-size: 15px;
                color: #3b38ff;
                line-height:18px;
                cursor:pointer;
                &.active {
                    background-image: url(${RemoveIcon});
                }
            }
        }
        .accordian-body {
            padding:20px;
            .description {
                label {
                    font-size:12px;
                    display:block;
                    margin-bottom:9px;
                    span {
                        color:#ee3167;
                    }
                }
                .text-area {
                    border-right:1px dashed #cfdceb;
                    flex:0 0 42%;
                    padding:21px 27px 15px 0; 
                position: relative;
                    label {
                        position: absolute;
                        left:0;
                        top:0;
                    }
                    textarea {
                        width:100%;
                        height: 100%;
                        padding:10px;
                        border-radius: 5px;
                        border: solid 1px #cfdceb;
                        background-color: #fff;
                    }
                }
                .uploads {
                    padding-left:20px;
                    .progress-container{
                        float:right;
                        height:86px;
                        margin-left:30px;
                        .file-preview{
                            background-color: #0DCA7A;
                            color: #fff;
                            width: 100px;
                            text-align: center;
                            height: 32px;
                            line-height: 32px;
                            cursor: pointer;
                        }
                        .upload-file-name{
                            font-family: 'cerebri_sansregular';
                            font-size: 12px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 4.83;
                            letter-spacing: normal;
                            text-align: left;
                            color: #000000;
                        }
                        .progress-base{
                            width: 163px;
                            height: 4px;
                            background-color: #cfdceb;
                            position:relative;
                            .progress-seek{                                                                
                                height: 4px;
                                background-color: #0dca7a;
                                position:absolute;
                            }
                        }

                    }
                    ul {
                        li {
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                            width: 95px;
                            height: 86px;
                            border-radius: 5.5px;
                            background-color: #fdf2f2;
                            margin:0 8px 16px 8px;
                            text-align:center;
                            cursor:pointer;
                            &.box-1 {
                                color:#ed7478;
                                img {
                                    width:34px;
                                }
                            }
                            &.box-2 {
                                background-color: #f3f3fd;
                                color:#747aed;
                                img {
                                    width:25px;
                                }
                            }
                            &.box-3 {
                                background-color: #f5faef;
                                color:#31ad3d;
                                img {
                                    width:28px;
                                }
                            }
                            &.box-4 {
                                background-color: #fcfcd2;
                                color:#f59a2e;
                                img {
                                    width:27px;
                                }
                            }
                            span {
                                margin-top:12px;
                                font-size:12px;
                                font-family:'cerebri_sansmedium', sans-serif;
                                display:block;
                            }
                        }
                    }
                }
            }
        }
    }
    .action-items {
        position:absolute;
        right:0;
        top:15px;
        z-index:99;
        button {
            background:none;
            border:none;
            padding:0;
            margin-left:20px;
            img {
                width:16px;
            }
        }
    }
    .add-video {
        .video-upload {
            padding:28px 0;
            text-align:center;
            .imgb {
                max-width:141px;
                margin:0 auto 28px;
            }
            h3 {
                color:#23252b;
                font-size:16.5px;
                line-height:1;
                margin-bottom:15px;
            }
            p {
                font-size:12px;
                color:#23252bcc;
                margin-bottom:30px;
            }
            .upload-file {
                position:relative;
                text-align:center;
                input[type="file"], span {
                    position:absolute;
                    left:0;
                    right:0;
                    top:0;
                    margin: 0 auto;
                    width: 129.5px;
                    height: 40px;
                    border-radius: 5px;
                    cursor:pointer;
                }
                input[type="file"] {
                    opacity:0;
                    z-index:2;
                }
                span {
                    background-color: #0dca7a;
                    z-index:1;
                    color:#fff;
                    font-size:13.6px;
                    line-height:40px;
                    font-family:'cerebri_sansmedium', sans-serif;
                    text-transform:uppercase;
                }
            }
        } 
        .video-library {
            padding-left:20px;
            .d-flex {
                margin-bottom:10px;
                span {
                    font-size:21px;
                }
                .search-content {
                    background-image: url(${SearchIcon});
                    background-position: right center;
                    background-repeat:no-repeat;
                    background-size:18px 18px;
                    border:none;
                    border-bottom:1px solid #000;
                    width:50%;
                    padding-right:30px;
                    &:focus {
                        border-bottom:1px solid #000;
                    }
                }
            }
        }
    }
    .add-article {
        .mb-25 {
            margin-bottom:25px;
        }
    }
    .add-quiz {
        .mb-25 {
            margin-bottom:25px;
        }
    }
    .question {
        border:1px solid #d1e3fd;
        padding:20px 83px 30px 39px;  
        border-radius:5px;
        margin-bottom:15px;
        position: relative;
        .action-items {
            right:15px;
            top:6px;
        }
        .ques-header {
            margin-bottom:13px;
            span {
                display:block;
                margin-bottom:5px;
                font-size:17px;
                line-height:23px;
                font-family:'cerebri_sanslight', sans-serif;
            }
            p {
                font-size:23px;
                margin-bottom:0;
            }
        }
        .ques-options {
            margin-bottom:10px;
            min-height:30px;
        }  
        &.question-edit {
            background-color:#faf4ff;
            border:1px solid #faf4ff;
            margin-bottom:42px;
            .form-control {
                height:36px;
                padding:6px 12px;
            }
            .ques-body {
                margin-bottom:42px;
            }
            .ques-options {
                position: relative;
                padding-right:38px;
                margin-bottom:15px;
                .form-control {
                    position: absolute;
                    left:40px;
                    top:-2px;
                    width:90%;
                }
                .delete-option {
                    position: absolute;
                    right:10px;
                    top:6px;
                    width:17px;
                    height:17px;
                }
            }
            .best-answer {
                textarea {
                    width:90%;
                    height: 71px;
                    margin-left:40px;
                    border-radius: 5px;
                    border: solid 1px #96ADC8;
                    background-color: #fff;
                    padding:6px 12px;
                    margin-bottom:13px;
                }
            }
        }
    }
`