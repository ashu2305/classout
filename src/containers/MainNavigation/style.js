import styled from 'styled-components';
import Shape from '../../assets/images/icons/shape.svg';

const Navigation = styled.nav `
    flex:0 0 100px;
    position:relative;
    z-index:9999; 
    background: rgb(59,56,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(59,56,255,1) 0%, rgba(38,158,255,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(59,56,255,1) 0%,rgba(38,158,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(59,56,255,1) 0%,rgba(38,158,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b38ff', endColorstr='#269eff',GradientType=0 ); /* IE6-9 */

    transition:0.5s all;
    &.active {
        flex:0 0 240px;
        li {
            span {
                visibility:visible;
                width: auto;
            }
        }
    }
    li {
        a {
            color:#fff;
            padding:25px 10px 25px 35px;
            display:flex;
            align-items:center;
            white-space:nowrap;
            line-height:20px;
            outline:none !important;
            text-decoration:none;
            cursor: pointer;
            i {
                width:20px;
                margin-right:22px;
            }
        }
        span {
            padding-top:3px;
            visibility:hidden;
            width: 0;
        }
    }
    .nav-toggle {
    width:30px;
    margin: 20px 0 20px 30px;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    display:block;
    height: 2px;
    background-color: #fff;
    margin: 8px 0;
    transition: 0.4s;
  }

  &.side-nav.active .bar1 {
    -webkit-transform: rotate(-45deg) translate(-7px, 6px);
    transform: rotate(-45deg) translate(-7px, 6px);
  }
  
  &.side-nav.active .bar2 {opacity: 0;}
  
  &.side-nav.active .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`

export {
    Navigation
}