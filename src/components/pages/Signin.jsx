import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';
import { SiTwitter } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';



const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const data = JSON.parse(localStorage.getItem("data"));
    console.log()
    
    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleClick(){
        navigate('/createaccount')
    }

    function handleSubmit(e){
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Invalid email address!');

        }

        if (!passwordPattern.test(password)) {
            alert('Invalid Password!');
        }

        if(JSON.parse(localStorage.getItem("data")) == null){
            alert("No user found");
        }
        
        else{
            let data = JSON.parse(localStorage.getItem("data"))
            const answer = data.find((value)=>{
                return value.email == email; 
            })

            if(email === answer.email && password === answer.password){
                navigate('/home')
            }
    
            else{
                alert("Please enter the valid login credentials")
            }
        }
    }

    function handleForgotPassword() {
        navigate('/verifyemail')
    }


    function homepage() {
          navigate("/")
    }

    return (
        <>
            <div className={styles.logoBox}>
                <SiTwitter className={styles.Twticon} />
                <h2>Sign in to Twitter</h2>
                <button >
                    <FcGoogle className={styles.Gicon} />
                    Sign in with Google
                </button>
                <hr></hr>
                <span>Or</span>
                <br />
                <form onSubmit={handleSubmit} >
                    <label  >
                        <input type="text" value={email} onChange={handleEmail} className={styles.input} placeholder="Email" />
                    </label>
                    <br />
                    <br />
                    <label>
                        <input type="password" value={password} onChange={handlePassword} className={styles.input} placeholder="Password" />
                    </label>
                    <br />
                    <button type="submit" onClick={homepage}>Log in</button>
                </form>
                <button onClick={handleForgotPassword}>Forgot Password?</button>
                <p>Don't have an account?<a onClick={handleClick}>Sign up</a></p>
            </div>
        </>
    )
}

export default Signin;