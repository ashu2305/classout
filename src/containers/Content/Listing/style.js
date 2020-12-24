import styled from 'styled-components';
import SesrchIcon from '../../../assets/images/icons/search.png';

export const Wrapper = styled.div`
    padding:40px 0;
    .start-content {
        box-shadow: 0 10px 24px 10px rgba(167,183,209,0.18);
        background-color: #fff;
        border-radius:10px;
        max-width:700px;
        min-height:132px;
        position: relative;
        padding:20px 33px;
        margin:15px 0;
        .txtb {
            > span {
                font-family:'cerebri_sanslight', sans-serif;
                color: #2A2E4C;
                font-size: 24px;
                font-weight: 300;
                letter-spacing: 0;
                line-height: 36px;
                display:block;
                margin-bottom:18px;
            }
            .btn {
                height:40px;
            }
        }
        .imgb {
            position: absolute;
            bottom:0;
            right:0;
            max-width:250px;
        }
    }
    .video-box {
        background-color: #fff;
        box-shadow: 0 10px 24px 10px rgba(167,183,209,0.18);
        width:100%;
        border-radius:10px;
        overflow:hidden;
        .imgb {
            position: relative;
            .play {
                background-color:#0DCA7A;
                border-radius:50%;
                width: 50px;
                height:50px;
                position: absolute;
                bottom:15px;
                left:15px;
                text-indent:-9999px;
                display:flex;
                justify-content:center;
                align-items:center;
                cursor: pointer;
                img {
                    width:10px;
                }
            }
        }
        .txtb {
            padding:15px 24px;
            span {
                background-color: rgba(237,116,120,0.1);
                padding:0 10px;
                color: #ED7478;
                font-size:12px;
                line-height:21px;
                border-radius:5px;
                text-transform:uppercase;
            }
            p {
                color: #2A2E4C;
                font-family:'cerebri_sanslight', sans-serif;
                font-size: 20px;
                line-height: 36px;
            }
        }
    } 
    .listing-container {
        .col-md-3 {
            margin-bottom:20px;
        }
        .course-item {
            background-color: #fff;
            min-height: 275px;
            padding:15px;
            border-radius:15px;
            cursor:pointer;
            box-shadow: 0 10px 24px 10px rgba(167,183,209,0.18);
            .image {
                margin-bottom:20px;
                img {
                    border-radius:10px;
                    width:251px;
                    height:150px;
                }
            }
            h4 {
                font-family:'cerebri_sanslight', sans-serif;
                color: #2A2E4C;
                font-size: 20px;
                line-height: 24px;
                margin-bottom:13px;
            }
            p {
                font-size:14px;
            }
        }
    }
    .search-bar {
        display:flex;
        position: relative;
        padding:0 350px 0 180px;
        margin-bottom:16px;
        .total-items {
            position: absolute;
            left:0;
            top:0;
            width:180px;
            color: #2A2E4C;
            font-size: 29px;
            line-height: 36px;
            font-family:'cerebri_sanslight', sans-serif;
        }
        .search-box {
            flex:1;
            padding:0 25px;
            position: relative;
            :before {
                position: absolute; 
                left:0;
                top:13px;
                width:1px;
                height:20px;
                content:'';
                border-left:1px dotted #2A2E4C;
            }
            input{
                background-image: url(${SesrchIcon});
                background-repeat: no-repeat;
                background-position: left center;
                background-size: 22px 22px;
                width:100%;
                height:40px;
                border-radius:0;
                padding-left: 30px;
                border:none;
                &:focus {
                    border-bottom:1px solid #2A2E4C;
                    transform:0.5s all;
                }
            }
        }
        .filter {
            position: absolute;
            right:0;
            top:0;
            width:150px;
            display:flex;
            justify-content:space-between;
            .select-menu {
                width:200px;
                box-shadow: 0 2px 5px 4px rgba(167,183,209,0.18);
                .select-menu__placeholder {
                    color: #2A2E4C;
                }
                .select-menu__control {
                    border-color: transparent;
                    min-height: 40px;
                }
            }
            .btn {
                width:130px;
                min-width:inherit;
            }
        }
    }
    .card-container {
        h3 {
            margin-bottom:18px;
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
        .card-outer {
            padding:0 12px;
            padding-top:20px;
            width:30%;
            .card-inner {
                width:100%;
                max-width: 342px;
                min-height: 372px;
                border-radius: 5.5px;
                box-shadow: 0px 5px 10.8px 1.2px rgba(167, 183, 209, 0.18);
                background-color: #fff;
                cursor:pointer;
                .imgb {
                    max-width:280px;
                    width:100%;
                    height:211px;
                    padding-top:20px;
                    margin:0 auto 40px;
                    img {
                        max-height: 100%;
                    }
                }
                p {
                    margin-bottom:0;
                    font-size:17px;
                    color: #66676a;
                }
            }
        }
    }
`