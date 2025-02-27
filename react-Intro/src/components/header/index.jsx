import React from 'react'
import Logo from "../../assets/images/logo.png"
import Buttons from "../buttons"
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoCtn}>
            <img src={Logo} alt="" />
        </div>

        <div className={styles.btnCtn}>
            <select>
                <option value="english">English</option>
                <option value="chinese">中文</option>
            </select>
            <Buttons label="Sign In" />
        </div>

    </div>
  )
}

export default Header