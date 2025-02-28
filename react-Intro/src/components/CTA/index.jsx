import React from 'react'
import style from './CTA.module.css'


const CTA = ({text, email, input}) => {
  return (
    <div className={style.everthing}>
        <div className={style.message}>
                 <p>{text}</p>
        </div>

        <div className={style.write}>
            <input type={email} />
            <button>{input}</button>
        </div>
    </div>
  )
}

export default CTA
