import React from 'react'
import style from '../dropdown/dropdown.module.css'

const Dropdown = ({query}) => {
  return (
    
    <div className={style.dropdown}>
            
      <div className={style.faqquery}>
        <p>
          {query}
        </p>
      </div>

    </div>
  )
}

export default Dropdown
