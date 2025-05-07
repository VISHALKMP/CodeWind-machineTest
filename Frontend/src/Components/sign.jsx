import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function SignIn() {
    const [Data, setData] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handel = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value
        });
        console.log(Data)
    }

    const navPage = () =>{
        navigate('/SignUp')
    }
    const handelsubmit = async (e) => {
        e.preventDefault();
        console.log("hello")

        try {
            const response = await axios.post(`http://localhost:3000/user/singIn`, Data);

            // Check response and store token
            if (response.status === 200) {
                alert("success");
                localStorage.setItem("token", response.data.token);
                console.log("Token stored:", response.data.token);

                navigate('/dash');
            }
        } catch (err) {
            console.log("Login failed:", err.response?.data || err.message);
        }
    }


    return <>
        <div>
            <form onSubmit={handelsubmit} >
                <label >Put Your Email
                </label>
                <input type="email" name="email" value={Data.email} onChange={handel} />



                <label>tell me you Password</label>
                <input type="password" name="password" value={Data.password} onChange={handel} />

                <button type='submit' >submit</button>
            </form>
                <button onClick={navPage}>go to signUp Page</button>
        </div>


    </>
}
export default SignIn