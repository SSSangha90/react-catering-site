import React from "react";
import { Section } from "./About.style";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="row">
        <h2>No job is too big or too small</h2>
        <p className="brief-blurb">
          Desi taba catering provides a modern take on traditional indian
          cuisine for all occasions. We use the freshest ingredients and cater
          to our customer's requirements and specific taste. Our menu's include
          vegetarian, non-vegetarian and mixed options. We ensure we continue to
          strive for excellence to leave a lasting taste on those enjoying our
          food. Typical events we cater for include birthday parties, engagement
          parties and weddings. We also have a host of packages to consider for
          that personal touch you desire. In addition, we also create
          first-class cakes, from unique cup cakes to tasty sponge cakes.{" "}
          <a href="content/LuckysTabaMenu.pdf">View Menu.</a>
        </p>
      </div>
      <div className="about-meals-section js--wp-1">
        <ul className="meals-about clearfix">
          <li>
            <figure className="about-photo">
              <img src="img/Taba/chilli%20paneer-min.jpg" alt="Chilli-Paneer" />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img src="img/Taba/veg-thai-curry-min.jpg" alt="Veg-Thai-Curry" />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img src="img/Taba/lamb-mirch.jpg" alt="Lamb-Lal-Mirch" />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img
                src="img/Taba/spicy-mozarella-balls-min.jpg"
                alt="Spicy-Mozarella-Balls"
              />
            </figure>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default AboutSection;
