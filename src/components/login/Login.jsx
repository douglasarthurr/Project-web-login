import React from "react";
import './login.css'
import { useState } from 'react';

import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        checkFormFilled();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkFormFilled();
    };

    const checkFormFilled = () => {
        if (email !== '' && password !== '') {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className="container-login">
            <p className="titlepage">Faça seu Login</p>
            <div className="container-input">
                <form onSubmit={handleSubmit}>
                    <div className="input-email">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            className="input" 
                            type="email" 
                            name="email" 
                            placeholder="ex: seuemail@gmail.com" 
                            required 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    <div className="input-senha">
                        <label htmlFor="password">Password</label>
                        <input 
                            className="input" 
                            type={isPasswordVisible ? 'text' : 'password'} 
                            name="password" 
                            placeholder="ex: suaSenha123" 
                            required 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                        <div className="eye">
                            {isPasswordVisible 
                                ? <BsFillEyeSlashFill onClick={handlePasswordVisibility}/> 
                                : <BsFillEyeFill onClick={handlePasswordVisibility}/>
                            }
                        </div>
                    </div>
                    <button 
                        className="button-login" 
                        type="submit" 
                        disabled={!isFormFilled}
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className="remember">
                <input type="checkbox" name="remeber"/>
                <p>lembre-me</p>
            </div>
            

            <a className="forgot" href="http://" target="_blank">esqueci a senha</a>
            

        </div>
    );
    
};

export default Login;

