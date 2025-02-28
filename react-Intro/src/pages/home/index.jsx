import React from 'react'
import styles from "./home.module.css"
import Header from '../../components/header'
import CTA from '../../components/CTA'
import Line from '../../components/line'

function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <Header />
        <CTA/>
        <Line/>

        <div className={styles.textCtn}>
          
        </div>
      </div>
    </>
  )
}

export default Home

