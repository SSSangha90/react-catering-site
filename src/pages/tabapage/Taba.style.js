import styled from "styled-components";
import saag from "./images/saag-makhi.jpg";

export const Section = styled.section`
  padding-top: 120px;
  background-color: #fff6dd;

  .about-meals-section {
    padding-top: 60px;
  }

  .meals-about {
    list-style: none;
    width: 100%;
    padding-bottom: 200px;
  }

  .meals-about li {
    display: block;
    float: left;
    width: 25%;
  }

  .about-photo {
    width: 100%;
    margin: 0;
    overflow: hidden;
    background: #000;
  }

  .about-photo img {
    background-image: url(${saag});
    opacity: 0.7;
    width: 100%;
    height: 300px;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
    transition: opacity 0.8s, -webkit-transform 0.8s;
    transition: transform 0.8s, opacity 0.8s;
    transition: transform 0.8s, opacity 0.8s, -webkit-transform 0.8s;
  }

  .about-photo img:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    opacity: 1;
  }
`;
