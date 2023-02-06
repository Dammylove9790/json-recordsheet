// import './Registration.css';
import {useEffect, useState} from 'react';


function Registration() {
  const [state, setState] = useState(
    {name:'kay', sister: 'barakat', age: '7'}
    )
  // useEffect(function, determinant)
  useEffect(()=>{
    setState({...state, name:'aminat'})
  }, [])

  console.log(state)
  return (
    <div className="form-container">
      {/* {JSON.stringify(user)} */}

      <h1>Registration Form</h1>
      <form>
        <p>
          Name: <br />
          <input name="name" />
        </p>
        <p>
          Phone: <br />
          <input type="tel" name="phone" />
        </p>
        <p>
          Email: <br />
          <input type="email" name="email" />
        </p>
        <p>
          password: <br />
          <input type="password" name="password" />
        </p>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default Registration;
















// function Registration() {
//   return (
//     <div className="form-container">
//       {JSON.stringify(user)}
//       <h1>Registration Form</h1>
// <form onSubmit={submitData}>
//         <p>
//           Name: <br />
//        <input name='name' onChange={handleData} />
//        <br/>
//        <span style={{color:'red'}}>{errors.nameErr}</span>
//        </p>
//        <p>
//           Phone: <br />
//        <input type='tel' name='phone' onChange={handleData} />
//        <br/>
//        <span style={{color:'red'}}>{errors.phoneErr}</span>
//        </p>
//        <p>
//           Email: <br />
//        <input type="email" name='email' onChange={handleData} />
//        <br/>
//        <span style={{color:'red'}}>{errors.emailErr}</span>
//        </p>
//        <p>
//           password: <br />
//        <input type="password" name='password' onChange={handleData} />
//        <br/>
//        <span style={{color:'red'}}>{errors.passwordErr}</span> 
//        </p>
//        <button type="submit" > Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Registration;
// const [user, setUser] = useState({
// name: '',
// phone: '',
// email: '',
// password: ''
// }) ;

// const [errors, setErrors]=useState({nameErr:'',
//   phoneErr:'',
//   emailErr:'',
//   password: '',
// })

// const handleData = (e)=>{
//   let name = e.target.name;
//   let value = e.target.value;
//    setUser({
//     ...user,
//     [name]:value
//    })
// }
// const submitData =(event)=>{
//   event.preventDefault();
//   let error =false;
//  if(user.name.trim() ==='' || user.name.trim()===null){
//    setErrors((err)=>{
//     return{
//       ...err,
//       nameErr:'Your name is required',
//     }
//    })
//    error =true;
//  }
//  if(user.phone.trim() ==='' || user.phone.trim()===null){
//   setErrors((err)=>{
//    return{
//      ...err,
//      phoneErr:'Your phone number is required',
//    }
//   })
//   error =true;
// }
// if(user.email.trim() ==='' || user.email.trim()===null){
//   setErrors((err) =>{
//    return{
//      ...err,
//      emailErr:'Your email is required',
//    }
//   })
//   error =true;
// }
// if(user.password.trim() ==='' || user.password.trim()===null){
//   setErrors((err) =>{
//    return{
//      ...err,
//      passwordErr:'Your password is required',
//    }
//   })
//   error =true;
// }
// if(! error){
//   console.log('submitted')
// }else{
//   console.log('errors occured')
// }
// }

