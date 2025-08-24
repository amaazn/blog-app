import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full min-h-screen py-12'>
        <div className='mx-auto w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-slate-200'>
            <div className="mb-6 flex justify-center">
                <span className="inline-block w-full max-w-[120px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-3xl font-bold leading-tight text-slate-800 mb-2">Welcome back</h2>
            <p className="text-center text-base text-slate-600 mb-8">
                Don't have an account?&nbsp;
                <Link
                    to="/signup"
                    className="font-semibold text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                    Sign up
                </Link>
            </p>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">{error}</div>}
            <form onSubmit={handleSubmit(login)} className='space-y-6'>
                <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                >Sign in</Button>
            </form>
        </div>
    </div>
  )
}

export default Login