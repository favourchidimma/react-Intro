import React from 'react'
import Buttons from '../components/buttons'
import KidsImage from '../assets/images/kidImage.png'
import CTA from '../components/CTA'

function Components() {
  return (
    <div>
        <Buttons label="Get Started" primary/>
        <Buttons label="Sign In" />
        <ValueProps text="Download Your shows to watch offline." paragraph="save your favourites easily and always have something to watch" imgUrl={KidsImage} />
        <ValueProps text="Create profiles for kids." paragraph="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." imgUrl={KidsImage} />
        <ValueProps text="Download Your shows to watch offline." paragraph="save your favourites easily and always have something to watch" imgUrl={KidsImage} />
        <CTA text="Ready to watch? Enter your email to create or restart your membership." email="Email Address" input="Get Started >"/>
    </div>
  )
}

export default Components