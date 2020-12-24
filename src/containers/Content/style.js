import styled from 'styled-components';
import DateIcon from '../../assets/images/icons/calendar.png'

export const Wrapper = styled.div`
    padding-bottom:90px;
    h3 {
        color: #2A2E4C;
        font-family:'cerebri_sanslight', sans-serif;
        font-size: 29px;
        line-height: 36px;
    }
    .btn {
        height:40px;
    }
    .date-group {
        .form-control {
            background-image: url(${DateIcon});
            background-repeat: no-repeat;
            background-position: 95% center;
            background-size: 15px 15px;
        }
    }
`