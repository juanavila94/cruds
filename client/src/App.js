import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form/Form';
import FormEdit from './FormEdit/FormEdit';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/edit/:id' element={<FormEdit/>}/>
   </Routes>
  );
}

export default App;
