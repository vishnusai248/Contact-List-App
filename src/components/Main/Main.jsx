import React, { useContext, useEffect } from 'react'
import ContactCard from '../ContactCard/ContactCard'
import './Main.scss'
import { useNavigate } from 'react-router-dom'
import { datacontenxt } from '../../App'

export default function Main() {
  const {contacts}=useContext(datacontenxt)

  const navigate=useNavigate()
  
  let maleCount = 0
  let femaleCount = 0
  let businessCount = 0
  let personalCount = 0
  contacts.forEach(contact => {
    contact.gender === 'Male' ? maleCount += 1 : femaleCount += 1
    contact.type === "Business" ? businessCount += 1 : personalCount += 1
  })

  const add =()=>{
    navigate("/AddContact/new")
  }
  return (

    <div className='maindiv p-5'>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={add}>Add Contact</button>

      </div>
      <div className="statscard">
        <div className="stat">
          <h3 className='statname'>Male</h3>
          <p className='statvalue'>{maleCount}</p>
        </div>
        <div className="stat">
          <h3 className='statname'>Female</h3>
          <p className='statvalue'>{femaleCount}</p>
        </div>
        <div className="stat">
          <h3 className='statname'>Business</h3>
          <p className='statvalue'>{businessCount}</p>
        </div>
        <div className="stat">
          <h3 className='statname'>Personal</h3>
          <p className='statvalue'>{personalCount}</p>
        </div>
      </div>
      <div className='contactcard-container'>
        {contacts.map((eachcontactcontact, i) => (
          <ContactCard key={i} data={eachcontactcontact} />
        ))}

      </div>
    </div>
  )
}
