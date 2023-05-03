import axios from 'axios';


export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const POST_CUSTOMERS = "POST_CUSTOMERS";
export const PUT_CUSTOMERS = "PUT_CUSTOMERS";
export const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";

export const getCustomers = () => async (dispatch) => {
     const response = await axios('http://localhost:3001/customers');
     const result = response.data
     return dispatch({type:GET_CUSTOMERS, payload: result})
}

export const postCustomers = (customers) => async (dispatch) => {
      await axios.post('http://localhost:3001/customers',customers);
}

export const putCustomers = (id, customers) => async (dispatch) => {
     await axios.put(`http://localhost:3001/customers/${id}`,customers);
}

export const deleteCustomers = (id) => async (dispatch) => {
   const response =   await axios.delete(`http://localhost:3001/customers/${id}`)
   const result = response.data
   return dispatch({type:DELETE_CUSTOMERS, payload:result});
}