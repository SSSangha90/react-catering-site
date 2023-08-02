import "./App.css";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <body>
      <Landing />
      <section class="section-about js--section-about" id="about">
        <div class="row">
          <h2>No job is too big or too small</h2>
          <p class="brief-blurb">
            Desi taba catering provides a modern take on traditional indian
            cuisine for all occasions. We use the freshest ingredients and cater
            to our customer's requirements and specific taste. Our menu's
            include vegetarian, non-vegetarian and mixed options. We ensure we
            continue to strive for excellence to leave a lasting taste on those
            enjoying our food. Typical events we cater for include birthday
            parties, engagement parties and weddings. We also have a host of
            packages to consider for that personal touch you desire. In
            addition, we also create first-class cakes, from unique cup cakes to
            tasty sponge cakes.{" "}
            <a href="content/LuckysTabaMenu.pdf">View Menu.</a>
          </p>
        </div>
        <div class="about-meals-section js--wp-1">
          <ul class="meals-about clearfix">
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/chilli%20paneer-min.jpg"
                  alt="Chilli-Paneer"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/veg-thai-curry-min.jpg"
                  alt="Veg-Thai-Curry"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img src="img/Taba/lamb-mirch.jpg" alt="Lamb-Lal-Mirch" />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/spicy-mozarella-balls-min.jpg"
                  alt="Spicy-Mozarella-Balls"
                />
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-taba" id="taba">
        <div class="row">
          <h2>Desi Taba</h2>
          <p class="brief-blurb">
            Fresh Indian ingredients cooked with care. We provide an entrée of
            starters, mains and desserts comprising of vegetarian food,
            non-vegetarian cusine or a combination of both depending on your
            requirements. Some of our popular dishes include: Desi Veggie
            Quiche; Chicken Tikka Puff Pastries; Pepper Battered Fish Pakoreh;
            Palak Paneer and Sultry Lamb Keema, to name a few.
          </p>
        </div>

        <div class="about-meals-section js--wp-2">
          <ul class="meals-about clearfix">
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/saag-makhi-min.jpg"
                  alt="Saag with Makhi Di Roti"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/samosa-parcels-min.jpg"
                  alt="Samosa Parcels"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img src="img/Taba/pindee-sabzi-min.jpg" alt="Pindee Sabjee" />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/Taba/butter-chicken-rice-min.jpg"
                  alt="Butter Chicken with Rice"
                />
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section class="packages-section js--section-packages" id="packages">
        <div class="row">
          <h2>Popular Packages</h2>
          <p class="brief-blurb">
            We have a range of packages to suit your requirements. This includes
            Vegetarian and Non-Vegetarian options, and extras for larger events.
            We can also accomodate for personal preferences - just ask!
          </p>
        </div>
        <div class="row">
          <div class="col span-1-of-3 box js--wp-4">
            <h2 class="package">Mixed Menu</h2>
            <h3>Starters only</h3>
            <h3>£6 per head</h3>
            <ul>
              <li>2 x Veg Dishes</li>
              <li>2 x Non-Veg Dishes</li>
            </ul>
            <br />
            <h3>Main Course & Dessert only</h3>
            <h3>£8 per head</h3>
            <ul>
              <li>1 x Non-Veg Main</li>
              <li>3 x Veg Mains</li>
              <li>Rice, Naan, Raita & Salad</li>
              <li>Dessert</li>
            </ul>
            <br />
            <h3>3-Course Meal</h3>
            <h3>£11 per head</h3>
            <ul>
              <li>2 x Veg Starters</li>
              <li>2 x Non-Veg Starters</li>
              <li>1 x Non-Veg Main</li>
              <li>2 x Veg Mains</li>
              <li>Rice, Naan, Raita & Salad</li>
              <li>Dessert</li>
            </ul>
          </div>
          <div class="col span-1-of-3 box">
            <h2 class="package">Vegetarian Menu</h2>
            <h3>Starters only</h3>
            <h3>£5 per head</h3>
            <ul>
              <li>3 x Veg starters</li>
            </ul>
            <br />
            <h3>Main Course & Dessert only</h3>
            <h3>£7 per head</h3>
            <ul>
              <li>3 x Veg Mains</li>
              <li>Rice, Naan, Raita & Salad</li>
              <li>Dessert</li>
            </ul>
            <br />
            <h3>3-Course Meal</h3>
            <h3>£9.50 per head</h3>
            <ul>
              <li>3 x Veg Starters</li>
              <li>3 x Veg Mains</li>
              <li>Rice, Naan, Raita & Salad</li>
              <li>Dessert</li>
            </ul>
          </div>
          <div class="col span-1-of-3 box">
            <h2 class="package">Large Event Extras</h2>
            <h3>On-Site Chefs</h3>
            <ul>
              <li>For events between 70-150, a team of two chefs from £250</li>
            </ul>
            <br />
            <h3>Cooking Marquee</h3>
            <ul>
              <li>If one is unavailable, we can bring our own - £150</li>
            </ul>
            <br />
            <h3>Tandoor</h3>
            <ul>
              <li>For fresh breads and kebabs on site - from £200</li>
            </ul>
            <br />
            <h3>Chafing Dishes</h3>
            <ul>
              <li>£8 each to hire, plus £50 deposit</li>
            </ul>
            <br />
            <h3>Waiting Staff</h3>
            <ul>
              <li>Minimum of two, for a minimum of 5 hours</li>
              <li>£9 per hour</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section-cakes" id="cakes">
        <div class="row">
          <h2>Desi Taba's Cakes</h2>
          <p class="brief-blurb">
            As well as our Indian Cuisine, our cakes have been a hit for family
            functions, including birthday parties, weddings and baby-showers. We
            also cater our cakes for vegetarians and vegans, baking eggless
            cakes. We have a wide variety of cakes available, pick your sponge
            and toppings and we'll do the rest. Our creative cup cakes can also
            help you prepare for any themed parties you may have in mind. Costs
            depend on the type of cake, size and amount.
          </p>
        </div>

        <div class="about-meals-section js--wp-3">
          <ul class="meals-about clearfix">
            <li>
              <figure class="about-photo">
                <img
                  src="img/cakes/choc-wafers-min.jpg"
                  alt="Chocolate Wafer Cake with Strawberries"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/cakes/rose-bouquet-min.jpg"
                  alt="Chocolate Rose cupcakes"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/cakes/nani-fruitcake-min.jpg"
                  alt="Fresh Cream and Fruit Birthday Cake"
                />
              </figure>
            </li>
            <li>
              <figure class="about-photo">
                <img
                  src="img/cakes/maltesers-min.jpg"
                  alt="Maltesers and chocolate button cake"
                />
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section class="reviews-section" id="reviews">
        <div class="row">
          <h2>Customer Reviews</h2>
        </div>

        <div class="content-slider">
          <div class="slider">
            <div class="mask">
              <ul>
                <li class="anim1">
                  <div class="quote">
                    Nisha, you are one amazing cook! Thank you for catering for
                    my party last night. The food was amazing and perfect for
                    everyone to enjoy. Look forward to ordering from you again.
                  </div>
                  <div class="source">- S. Sathi</div>
                </li>
                <li class="anim2">
                  <div class="quote">
                    High standards as usual delivered by Desi Taba, try their
                    oreo cookie milkshakes!
                  </div>
                  <div class="source">- G. Rana</div>
                </li>
                <li class="anim3">
                  <div class="quote">
                    Desi Taba provided the cup-cakes at my baby-shower and there
                    weren't a single one left. A real treat for the occasion.
                  </div>
                  <div class="source">- S. Lal</div>
                </li>
                <li class="anim4">
                  <div class="quote">
                    I really enjoyed your food at the pop-up bazaar the other
                    day. The kids loved the cup-cakes!
                  </div>
                  <div class="source">- P. Kaur</div>
                </li>
                <li class="anim5">
                  <div class="quote">
                    Desi Taba delivered the catering for our Halloween party.
                    The preparation was great, the themed food went down well
                    and the lamb was delicious!
                  </div>
                  <div class="source">- J. Sangha </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section-form" id="contact">
        <div class="row">
          <h2>Get in Touch!</h2>
        </div>

        <div class="map-box">
          <div class="map"></div>

          <div class="form-box">
            <div class="row" id="form">
              <form method="post" action="mailer-new.php" class="contact-form">
                <div class="row"></div>

                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="name">Name</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="number">Number</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Your Number"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="email">Email</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="postcode">Postcode</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="text"
                      name="postcode"
                      id="postcode"
                      placeholder="Your Postcode"
                      pattern="[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="guests"> Guests</label>
                  </div>
                  <div class="col span-2-of-3">
                    <select name="guests" id="guests">
                      <option value="under25" selected>
                        0-25
                      </option>
                      <option value="26to50">26-50</option>
                      <option value="51to100">51-100</option>
                      <option value="101to150">101-150</option>
                      <option value="150plus">150+</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="message">Message</label>
                  </div>
                  <div class="col span-2-of-3">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="What's the occassion?"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label>&nbsp;</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/selectivizr@1.0.3/selectivizr.min.js"></script>
      <script src="vendors/js/jquery.waypoints.min.js"></script>
      <script src="resources/js/gmaps.js"></script>
      <script src="resources/js/script.js"></script>
      <script src="http://maps.google.com/maps/api/js?key=AIzaSyDLvUGCDlJy1xOYJRq9Mi7LKxY1EOgxZXY&callback=initMap"></script>
    </body>
  );
}

export default App;
