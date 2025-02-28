import React from 'react'
import Buttons from "../buttons"
import styles from "./input.module.css"

const InputComponent = () => {
  return (
    <div className={styles.inputDiv}>
        <p className='subtitle'> Ready to watch? Enter your email to create or restart your membership. </p>
        <form action="">
            <input type="email" name="" id="" placeholder='Email address'/>
            <Buttons label="Get Started" primary/>
        </form>
    </div>
  )
}

export default InputComponent