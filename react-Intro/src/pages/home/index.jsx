import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import InputComponent from "../../components/inputComponent";
import ValuePropCard from "../../components/valueProps";
import Line from "../../components/line";
import image1 from "../../assets/images/box1-image.png"
import image2 from "../../assets/images/strangerBoy.png"
import image3 from "../../assets/images/heroBg.png"
import image4 from "../../assets/images/kidImage.png"

function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <Header />
        <div className={styles.textCtn}>
          <div>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>

          <InputComponent />
        </div>

        <section>
          <ValuePropCard
            heading="Enjoy on your TV"
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            imgUrl={image1}
          />
          <Line/>
          <ValuePropCard
            heading="Download your shows to watch offline"
            description="Save your favorites easily and always have something to watch."
            reverse
            imgUrl={image2}
          />
          <Line/>
          <ValuePropCard
            heading="Watch everywhere"
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
            imgUrl={image3}
          />
          <Line/>
          <ValuePropCard
            heading="Create profile for your kids"
            description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            reverse
            imgUrl={image4}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
