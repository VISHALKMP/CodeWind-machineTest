import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function SignUp() {
    const [Data,setData] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handel = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value
        });
           console.log(Data)
    }

    const signInPage = () =>{
        navigate('/');
    }
    const handelsubmit = async (e)=>{
          e.preventDefault();
          console.log("hello")
        let response = await  axios.post(`http://localhost:3000/user/signUp`,Data)
          .then(()=>{
            console.log(Data);
            console.log("succses");
            alert("sucess")
            
            
            
          }).catch(err =>{
            console.log(err);
            
          })


    }

    return <>
        <div>
            <form onSubmit={handelsubmit} >
                <label >Namee</label>
                <input type="text" name="name"  />
                <label >Put Your Email
                </label>
                <input type="email" name="email" value={Data.email} onChange={handel} />
                
                

                <label>tell me you Password</label>
                <input type="password" name="password" value={Data.password} onChange={handel}/>

                <button type='submit' >submit</button>
            </form>
            <button onClick={signInPage}>go to SigIn Page</button>
        </div>


    </>
}
export default SignUp