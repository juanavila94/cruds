import React, { useEffect, useState } from 'react'
import { useDispatch} from "react-redux";
import { getCustomers,  putCustomers } from '../redux/actions/actions';
import { useParams } from 'react-router-dom';

const FormEdit = () => {
     const dispatch = useDispatch()
     const { id } = useParams();
     
     useEffect(() =>{
      dispatch(getCustomers())
     },[])

     const validate = (inputs) =>{
      const errors  = {}
      if(!inputs.name.length)  errors.name = 'empty name field';
      if(!inputs.phoneNumber  ) errors.phoneNumber = 'empty phone field';
      if (inputs.email.length < 1) errors.email = "empty email field";
     //  if (inputs.hobbies?.length === 0) errors.hobbies = "empty hobbies field";
    return errors;
     }
  const [customers, setCustomers] = useState({
     name:'',
     phoneNumber: Number(),
     email:'',
     hobbies: ['jugar'],
  })
  const [errors , setErrors] = useState({
     name:'',
     phoneNumber: Number(),
     email:'',
     hobbies: [],
  });

  const handleInput = (e) => {
     const {value, name} = e.target
     if (name === "hobbies"){
          setCustomers({ 
               ...customers,
               hobbies: [...customers.hobbies, value]
          })
     }else if (name === "phoneNumber"){
          setCustomers({ 
               ...customers,
               phoneNumber: Number(value)
          })
     }
     else {
          setCustomers({ 
               ...customers,
               [name]: value
          })
     }
     setErrors(
          validate({
               ...customers,
          [name]: value
          })
     )
  }

  const handleSubmit = (e) => {
     e.preventDefault();
    const allErrors = Object.values(errors)
    console.log(allErrors);
    if(allErrors.length === 0) {
     dispatch(putCustomers(id, customers))
     setCustomers({
          name:'',
          phoneNumber:0,
          email:'',
          hobbies: [''],
     })
     setErrors({ 
     name:'',
     phoneNumber:0,
     email:'',
     hobbies:[''],
     })
    }
  }
  
  
  return (
     <>
    <form onSubmit={handleSubmit}>
     <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={customers.name} name='name' id='name' onChange={handleInput}/> 
          {errors.name && <p>{errors.name}</p>}
     </div>
     <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" value={customers.phoneNumber} name='phoneNumber' id='phoneNumber' onChange={handleInput}/> 
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
     </div>
     <div>
          <label htmlFor="email">Email</label>
          <input type="text" value={customers.email} name='email' id='email' onChange={handleInput}/> 
          {errors.email && <p>{errors.email}</p>}
     </div>
     <div>
          <label htmlFor="hobbies">Hobbies</label>
          <input type="text" value={customers.hobbies} name='hobbies' id='hobbies' onChange={handleInput}/> 
          {errors.hobbies && <p>{errors.hobbies}</p>}
     </div>

     <button type="submit">Save</button>
     
    </form>
    </>
  )
}

export default FormEdit