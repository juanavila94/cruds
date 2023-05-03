import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomers,
  getCustomers,
  postCustomers,
} from "../redux/actions/actions";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const allCustomers = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const validate = (inputs) => {
    const errors = {};
    if (!inputs.name.length) errors.name = "empty name field";
    if (!inputs.phoneNumber) errors.phoneNumber = "empty phone field";
    if (inputs.email.length < 1) errors.email = "empty email field";
    //  if (inputs.hobbies?.length === 0) errors.hobbies = "empty hobbies field";
    return errors;
  };
  const [customers, setCustomers] = useState({
    name: "",
    phoneNumber: Number(),
    email: "",
    hobbies: [''],
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: Number(),
    email: "",
    hobbies: [],
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    if (name === "hobbies") {
      setCustomers({
        ...customers,
        hobbies: [...customers.hobbies, value],
      });
    } else if (name === "phoneNumber") {
      setCustomers({
        ...customers,
        phoneNumber: Number(value),
      });
    } else {
      setCustomers({
        ...customers,
        [name]: value,
      });
    }
    setErrors(
      validate({
        ...customers,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = Object.values(errors);
    console.log(allErrors);
    if (allErrors.length === 0) {
      dispatch(postCustomers(customers));
      setCustomers({
        name: "",
        phoneNumber: 0,
        email: "",
        hobbies: [""],
      });
      setErrors({
        name: "",
        phoneNumber: 0,
        email: "",
        hobbies: [""],
      });
    }
  };
  const handleEdit = (e, el) => {
    setCustomers({
      name: el.name,
      phoneNumber: el.phoneNumber,
      email: el.email,
      hobbies: el.hobbies,
    });
  };
  //   const handleDelete = (id) => {
  //      dispatch(deleteCustomers(id));
  //      dispatch(getCustomers());
  //    };

  const handleDelete = (id) => {
    dispatch(deleteCustomers(id)).then(() => {
      dispatch(getCustomers());
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={customers.name}
            name='name'
            id='name'
            onChange={handleInput}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='number'
            value={customers.phoneNumber}
            name='phoneNumber'
            id='phoneNumber'
            onChange={handleInput}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            value={customers.email}
            name='email'
            id='email'
            onChange={handleInput}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor='hobbies'>Hobbies</label>
          <input
            type='text'
            value={customers.hobbies}
            name='hobbies'
            id='hobbies'
            onChange={handleInput}
          />
          {errors.hobbies && <p>{errors.hobbies}</p>}
        </div>

        <button type='submit'>Save</button>
      </form>
       
      <table>
           <thead>
               <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Hobbies</th>
                <th>Update | Delete</th>
                <th>Select</th>
                </tr>
          </thead>
          <tbody>
               {allCustomers.map(el => (
                    <tr key={el._id}>
                          <td>{el.id}</td>
                          <td>{el.name}</td>
                          <td>{el.phoneNumber}</td>
                          <td>{el.email}</td>
                          <td>{el.hobbies.join(", ")}</td>
                         <td><Link to={`/edit/${el._id}`}><button>Edit</button></Link>
                             <button onClick={() => handleDelete(el._id)}>Delete</button></td>
                         <td><input type="checkbox" /></td>
                     </tr>
                ))}
          </tbody>
     </table>
    </>
  );
};

export default Form;
