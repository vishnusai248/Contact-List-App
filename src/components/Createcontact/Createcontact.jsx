import React, { useContext, useEffect, useState } from 'react'
import './CreateContact.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { datacontenxt } from '../../App'

export default function Createcontact() {
    const {contacts , setcontacts}= useContext(datacontenxt)
    const navigator=useNavigate()
    const [editing,setediting]= useState(false)
    const params =useParams()
    const [fetcheddata,setfetcheddata]= useState(null)
    const [contactform,setcontactform]=useState({
        name: '',
        gender:'',
        phone:'',
        email: '',
        type: '',
      })

    useEffect(()=>{
        if(params.id!=='new'){        
            setediting(true)
            let fetch = contacts.filter(eachcontact=> eachcontact.id == params.id)
            setfetcheddata(fetch)
            setcontactform(fetch[0])
        }
       
    },[])

    

    const handleinput= (e)=>{
        
        const { name, value } = e.target;
        setcontactform({
        ...contactform,
        [name]: value,
        });
    }

    const handlesubmit = (event) =>{
        debugger
        event.preventDefault()
        console.log(contactform)
        if(editing){
            const updatedContacts = contacts.map(contact =>
                contact.id == params.id ? { ...contactform } : contact
            );
            console.log("update:",updatedContacts)
            setcontacts(updatedContacts);
        }else{
            setcontacts((prev)=>[
                ...prev,
                {id:prev.length + 1,...contactform}
            ])

        }
        navigator('/')
       
    } 
  return (
    <div className='Createcontact'>
        <div className='createcard'>
            <form className='contactform' onSubmit={handlesubmit} >
                <h2 className='text-center mb-4'>{editing ? 'Edit' : 'New'} Contact</h2>
                <div className='form-field'>
                    <label className='form-label' htmlFor="name">Name <span class="required">*</span></label>
                    <input className='form-control' name='name' value={contactform.name} onChange={handleinput} required ></input>
                </div>
                <div className='form-field'>
                    <label className='form-label' htmlFor="gender">Gender <span class="required">*</span></label>
                    <select className='form-select' name='gender' value={contactform.gender} onChange={handleinput} required >
                        <option value='' selected disabled >Select</option>
                        <option value='Male' >Male</option>
                        <option value='Female' >Female</option>

                    </select>
                </div>
                <div className='form-field'>
                    <label className='form-label' htmlFor="phone">Phone <span class="required">*</span></label>
                    <input className='form-control' name='phone' value={contactform.phone} onChange={handleinput} required ></input>
                </div>
                <div className='form-field'>
                    <label className='form-label' htmlFor="email">Email </label>
                    <input className='form-control' name='email' value={contactform.email} onChange={handleinput} ></input>
                </div>
                <div className='form-field'>
                    <label className='form-label' htmlFor="type">Contact Type <span class="required">*</span></label>
                    <select className='form-select' name='type' value={contactform.type} onChange={handleinput} required >
                    <option value='' selected disabled >Select</option>
                        <option value='Business' >Business</option>
                        <option value='Personal' >Personal</option>
                    </select>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-primary '>{editing? 'Update': 'Submit'}</button>

                </div>
            </form>
        </div>
    </div>
  )
}
