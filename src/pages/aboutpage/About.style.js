import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 30px;
  padding-bottom: 35px;

  section {
    padding: 80px 0;
  }

  h2 {
    font-size: 200%;
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
  }

  h2:after {
    display: block;
    height: 2px;
    background-color: #ffba00;
    content: " ";
    width: 250px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .brief-blurb {
    line-height: 145%;
    width: 80%;
    margin-left: 10%;
    color: rgb(0, 0, 0);
    font-family: serif;
    font-style: italic;
    text-indent: 50px;
  }

  .brief-blurb {
    margin-bottom: 30px;
  }

  section#taba {
    padding-top: 120px;
  }

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
