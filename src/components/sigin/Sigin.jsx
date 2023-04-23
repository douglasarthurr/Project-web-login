import React from "react";
import './sigin.css'
import { useState } from 'react';

import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        checkFormFilled();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkFormFilled();
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirm(event.target.value);
        checkFormFilled();
    };


    const checkFormFilled = () => {
        if (email !== '' && password !== '' && confirmPassword !== '') {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className="container-sigin">
            <p className="titlepage">Cadastre-se aqui</p>
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

                    <div className="input-senha">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input 
                            className="input" 
                            type={isConfirmPasswordVisible ? 'text' : 'password'} 
                            name="confirm-password" 
                            placeholder="ex: suaSenha123" 
                            required 
                            value={confirmPassword} 
                            onChange={handleConfirmPasswordChange} 
                        />
                        <div className="eye">
                            {isConfirmPasswordVisible 
                                ? <BsFillEyeSlashFill onClick={handleConfirmPasswordVisibility}/> 
                                : <BsFillEyeFill onClick={handleConfirmPasswordVisibility}/>
                            }
                        </div>
                    </div>

                    <button 
                        className="button-sigin" 
                        type="submit" 
                        disabled={!isFormFilled}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
    
};

export default Login;

