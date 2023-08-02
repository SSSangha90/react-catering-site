import styled from "styled-components";
import background from "./images/varied-dishes.jpg";

export const Header = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;

  .main-nav {
    float: right;
    list-style: none;
    margin-top: 50px;
  }

  .main-nav li {
    display: inline-block;
    margin-left: 40px;
    font-weight: 600;
  }

  .main-nav li a:link,
  .main-nav li a:visited {
    color: #fff;
    text-decoration: none;
    font-size: 140%;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;
  }

  .main-nav li a:hover,
  .main-nav li a:active {
    border-bottom: 2px solid #f1c40f;
  }

  /*----Mobile Navigation---*/

  .mobile-nav-icon {
    float: right;
    margin-top: 30px;
    cursor: pointer;
    display: none;
  }

  .mobile-nav-icon i {
    font-size: 200%;
  }

  /*----sticky navigation----*/
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98);
    -webkit-box-shadow: 0 2px 2px #eaeaea;
    box-shadow: 0 2px 2px #eaeaea;
    z-index: 9999;
  }

  .sticky .main-nav li a:link,
  .sticky .main-nav li a:visited {
    padding: 5px 0;
    color: #ffba00;
  }

  .sticky-logo {
    height: 60px;
    width: auto;
    float: left;
    margin: 5px 0;
    border: 3px solid #ffba00;
    display: none;
  }

  .sticky .sticky-logo {
    display: block;
  }

  .sticky .main-nav {
    margin-top: 20px;
  }

  .hero-text-box {
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
