import React, { useContext } from 'react'
import male from '../../images/male_avatar.jpg';
import female from '../../images/female_avatar.jpg'
import './ContactCard.scss'
import trash from '../../images/trashicon.svg'
import edit from '../../images/editIcon.svg'
import { datacontenxt } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function ContactCard(props) {
    const navigate=useNavigate()
    const contact=props.data
    const {contacts,setcontacts} =useContext(datacontenxt)

    const editcontact = (contact) =>{
      navigate({
        pathname: '/AddContact/'+contact.id,
        state: { contact: contact, editMode: true },
    });
    }
    const deletecontact =(id)=>{
    let newarr= contacts.filter((eachcontact)=>{ return eachcontact.id !==id})
      setcontacts(newarr)
    }
  return (

    <div className='contactcard'>
      {console.log(contact.gender)}
        <img className='contactimg' alt='avatar' src={contact.img?contact.img:(contact.gender==="Male"?male : female)} />
        <div className=' d-flex justify-content-between'>
          <span className= {`contacttype ${contact.type==="Business"? 'businesstype':'personaltype'}`}  >{contact.type}</span>
          <div className='actions'>
          <img className='edit' src={edit} onClick={() =>{editcontact(contact)}}  alt="edit"/>

          <img className='trash' src={trash} onClick={() =>{deletecontact(contact.id)}}  alt="delete"/>

          </div>
        </div>
        <h2 className='contacttext'>{contact.name}</h2>
        <h5 className='contacttext'>{contact.phone}</h5>
        <h5 className='contacttext'>{contact.email}</h5>
    </div>
  )
}
