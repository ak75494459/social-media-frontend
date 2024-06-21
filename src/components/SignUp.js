import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const fetchData = async (data) => {
        try {
            let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/my/user`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result)
            navigate('/')
            localStorage.setItem("user",JSON.stringify(result.newUser))
            localStorage.setItem("token",JSON.stringify(result.token))
           
        } catch (error) {
            console.error('Error:', error);
            
        }
    };

    const onSubmit = (data) => {
        fetchData(data);
    };

    return (
        <div>
            <div className="bigSignUpContainer">
                <div className="signUpContainer ">
                    <div className="container">
                        <h1 className='font-bold xl m-2'>Sign UP</h1>
                        <form className='flex flex-col m-2' onSubmit={handleSubmit(onSubmit)}>
                            <label className='font-bold' htmlFor="name">Enter name:</label>
                            <input className='p-2' {...register('name')} type="text" name="name" id="name" placeholder="Enter your name" />
                            <label className='font-bold' htmlFor="email">Enter e-mail:</label>
                            <input className='p-2' {...register('email')} type="email" name="email" id="email" placeholder="Enter your E-mail" />
                            <label className='font-bold' htmlFor="password">Set password:</label>
                            <input className='p-2' {...register('password')} type="password" name="password" id="password" placeholder="Set password" />
                            <input type="submit" className="btnForSignUp cursor-pointer" value="Sign Up" />
                        </form>
                    </div>
                    <Link href="login" className='float-right mr-5  hover:underline hover:text-red-500 font-bold'>
                        Login Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
