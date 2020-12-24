import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom:16px;
    h3 {
        font-family: 'cerebri_sanslight',sans-serif;
        font-size: 29px;
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
`