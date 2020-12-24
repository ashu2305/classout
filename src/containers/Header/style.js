import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color:#fff;
    margin-bottom: 30px;
    h1 {
        font-family: 'cerebri_sansregular', sans-serif;
        font-size:33px;
        line-height:36px;
    }
    .header-right {
        .profile {
            border:5px solid #fff;
            width:50px;
            height:50px;
            border-radius:50%;
            text-align:center;
            margin-left:50px;
            cursor: pointer;
            position: relative;
            display: inline-block;
            box-shadow:0 0 10px rgba(0,0,0,0.1);
            .dropbtn {
                padding: 4px;
                font-size: 16px;
                border: none;
                cursor: pointer;
            }
            .dropdownx{
                position: absolute;
                left: -50px;
                
                width: 108px;
                overflow: auto;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                a{
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }
            }
            img {
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
        .notification {
            width:19px;
            position: relative;
            cursor: pointer;
            .status {
                background-color: #F51684;
                border-radius:50%;
                right:-1px;
                top:-1px;
                position: absolute;
                width: 9px;
                height:9px;
                content:"";
            }
        }
    }
`
export {
    HeaderWrapper
}