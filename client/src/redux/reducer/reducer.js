import { DELETE_CUSTOMERS, GET_CUSTOMERS } from "../actions/actions";


const initialState = {
     customers : [],
}


const reducer = (state = initialState, action) =>{

     switch(action.type){
          case GET_CUSTOMERS:
               return {...state, customers: action.payload};
          case DELETE_CUSTOMERS:
               return {...state, customers: state.customers.filter(el => el.id !== action.payload)};
          default:
               return{
                    ...state,
               }
     }
}

export default reducer;
