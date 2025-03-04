import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import InputComponent from "../../components/inputComponent";
import ValuePropCard from "../../components/valueProps";
import Line from "../../components/line";
import image1 from "../../assets/images/box1-image.png";
import image2 from "../../assets/images/strangerBoy.png";
import image4 from "../../assets/images/kidImage.png";
import Dropdown from "../../components/dropdown/Index";
import Footer from "../../components/footer";



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

        <section className={styles.textCtn2}>
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
          />
          <Line/>
          <ValuePropCard
            heading="Create profile for your kids"
            description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            reverse
            imgUrl={image4}
          />
        </section>

        <section className={styles.faqsection}>

          
                <h1>Frequently Asked Questions</h1>
          
        

          <Dropdown query="What is Netflix?"/>
          <Dropdown query="How much does Netflix Cost?"/>
          <Dropdown query="Where can I watch?"/>
          <Dropdown query="How do I cancel?"/>
          <Dropdown query="What can I watch on Netflix"/>
          <Dropdown query="Is Netflix good for Kids"/>
        </section>


      <div className={styles.input}>
        <InputComponent/>
      </div>


        <Footer />
      </div>
    </>
  );
}

export default Home;
