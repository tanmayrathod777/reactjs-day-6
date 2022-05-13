import './App.css';
import React , {useState} from 'react';
import validator from 'validator';
function App() {
  const [data, setData] = useState("");
  const [pass , setPass] = useState("");
  const [city , setCity] = useState('');
  const getData =(event) => {
    setData(event.target.value);
    
  }
  const getPass = (event) => {
    setPass(event.target.value)
  }
  if(validator.isEmail(data) === true) {
    console.log('email is correct');
    
  }else {
    console.log('email is wrong');
   
  }
  
  if(validator.isNumeric(pass)) {
    // const show = console.log('password is valid');
    // console.log(show);
  }
  const submitEvent = (event) =>{
    event.preventDefault()
    const obj = {
      name : data , 
      password : pass ,
      city : city
    }
    console.log(obj)
  }
const getCity = (event) => {
  setCity(event.target.value) ;
}
  return (
    <div className="App">
    <form onSubmit={submitEvent}>
      <h1>Form</h1>
      <lable>Enter Your Email</lable>
      <input type='text' onChange={getData} name = {data}></input><br />
      <lable>Enter Your Password</lable>
      <input type='text' onChange={getPass} name = {pass}></input> <br />
      <lable>City Name</lable>
      <input type='text' onChange={getCity} name = {city} ></input><br />
      <button type='submit'>Submit</button>
      </form>
    </div> 
  );
}

export default App;
