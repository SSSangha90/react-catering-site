import React from "react";
import { Section } from "./Taba.style";

// images
import saagImg from "./images/saag-makhi.jpg";

const TabaSection = () => {
  return (
    <Section id="taba">
      <div className="row">
        <h2>Desi Taba</h2>
        <p className="brief-blurb">
          Fresh Indian ingredients cooked with care. We provide an entrée of
          starters, mains and desserts comprising of vegetarian food,
          non-vegetarian cusine or a combination of both depending on your
          requirements. Some of our popular dishes include: Desi Veggie Quiche;
          Chicken Tikka Puff Pastries; Pepper Battered Fish Pakoreh; Palak
          Paneer and Sultry Lamb Keema, to name a few.
        </p>
      </div>

      <div className="about-meals-section js--wp-2">
        <ul className="meals-about clearfix">
          <li>
            <figure className="about-photo">
              <img
                src="/img/Taba/papri-chaat.jpg"
                alt="Saag with Makhi Di Roti"
              />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img
                src="resources/css/bg-images/samosa-parcels.jpg"
                alt="Samosa Parcels"
              />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img src="img/Taba/pindee-sabzi-min.jpg" alt="Pindee Sabjee" />
            </figure>
          </li>
          <li>
            <figure className="about-photo">
              <img
                src="img/Taba/butter-chicken-rice-min.jpg"
                alt="Butter Chicken with Rice"
              />
            </figure>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default TabaSection;
