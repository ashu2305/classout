import styled from 'styled-components';

const MainContainer = styled.div `
    display:flex;
    min-height:100%;
    .content-container {
        flex:1;
        max-width:calc(100%-80px);
        padding:15px 50px;
    }
`
export {
    MainContainer
}