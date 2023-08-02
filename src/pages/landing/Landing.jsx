import React from "react";
import { Header } from "./Landing.style";

const Landing = () => {
  return (
    <Header>
      <nav>
        <div class="row">
          <ul class="main-nav js--main-nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#taba">Taba</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <a href="#cakes">Cakes</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a class="mobile-nav-icon js--nav-icon">
            <i class="ion-navicon-round"></i>
          </a>
        </div>
      </nav>
      <div class="hero-text-box">
        <h1>
          Desi Taba
          <br />
          Modern Indian Catering
        </h1>
        <a class="btn btn-full js--scroll-to-packages" href="#">
          Ready to eat
        </a>
        <a class="btn btn-ghost js--scroll-to-about" href="#">
          Show me more
        </a>
      </div>
    </Header>
  );
};

export default Landing;
