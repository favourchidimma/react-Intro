import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import InputComponent from "../../components/inputComponent";
import ValuePropCard from "../../components/valueProps";


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
          />
          <ValuePropCard
            heading="Download your shows to watch offline"
            description="Save your favorites easily and always have something to watch."
            reverse
          />
          <ValuePropCard
            heading="Watch everywhere"
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          />
          <ValuePropCard
            heading="Create profile for your kids"
            description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            reverse
          />
        </section>
      </div>
    </>
  );
}

export default Home;
