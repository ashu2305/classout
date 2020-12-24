import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
`
export const RightContainer = styled.div`
    flex:1;
    background-color: #fff;
    box-shadow: 0 10px 24px 10px rgba(167,183,209,0.18);
    min-height:100px;
    padding:24px 35px 65px;
    font-family:'cerebri_sanslight', sans-serif;
    h3 {
        margin-bottom:30px;
    }
    .button-group {
        border-top: solid 1px #cfdceb;
        margin-top:30px;
        padding:30px 0;
        .btn.btn-blue {
        margin-left:20px;
    }
    }
    
    .field-group {
        margin-bottom:24px;
        > label {
            display:block;
            margin-bottom:6px;
            font-size: 17px;
            span {
                color:#DC4A38;
            }
        }
    }
`