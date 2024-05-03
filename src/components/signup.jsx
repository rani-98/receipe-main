import { useState } from "react"
import EyeslashSvg from "./svg/eye_slash"
import EyeSvg from "./svg/eye"
import { Link, useNavigate } from "react-router-dom"


const pwdNotMatch = "Passwords do not match"

export default function Signup() {
    const url = "https://widespread-mellisent-vj0.koyeb.app/signup"


    const [hidden, setHidden] = useState(true)
    const [chidden, setChidden] = useState(true)
    // navigate to login page
    const navigate = useNavigate()

    // store passwords for comparison
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const [error, setError] = useState(false)
    const [errMessage, setErrMessage] = useState("")

    const onConfirmPWD = (event) => {
        const value = event.target.value
        if(password !== value) {
            setError(true)
        } else {
            setError(false)
        }

        setCpassword(value)
    }

    const disableSubmitStyle = "inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-medium text-white"
    const enableSubmitStyle = "inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"

    const btnStyle = (error || password.length === 0 || cpassword !== password )? disableSubmitStyle :  enableSubmitStyle


    const onSubmit = (event) => {  
        event.preventDefault()
        
        if (error || password.length === 0 || cpassword !== password) {
            return
        }

        const formData = new FormData(event.target)

        fetch(url, {
            method: "POST",
            body: formData
        }).then(resp => {
            return resp.json()
        }).then(data => {
            if (data.message) {
                navigate("/auth/login", {replace: true})
            } else {
                console.log(data.error);
                setErrMessage(data.error)
            }
        }).catch(err => {
            console.log(err)
        })
    
    }

    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                {
                    errMessage ? <div className="text-red-500 text-sm mt-1 text-center">{errMessage}</div> : ""
                }

                <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="text"
                                name="username"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type={hidden ? "password" : "text"}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                id="password"
                                name="password"
                                onChange={ e => {setPassword(e.target.value)}}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setHidden(!hidden)}>
                                {
                                    hidden ? <EyeslashSvg/> : <EyeSvg/>
                                }
                            </span>
                        </div>
                    </div>
                    
                    
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>

                        <div className="relative">
                            <input
                                id = "confirm-password"
                                type={chidden ? "password" : "text"}
                                className={
    "w-full rounded-lg p-4 pe-12 text-sm shadow-sm " + (error ? "focus:outline-red-500 outline outline-2 outline-red-500" : "border-gray-200")
                                }
                                placeholder="Enter password"
                                name="cpassword"
                                onChange={ onConfirmPWD}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setChidden(!chidden)}>
                                {
                                    chidden ? <EyeslashSvg/> : <EyeSvg/>
                                }
                            </span>
                        </div>
                            <p className="text-red-500 text-sm mt-1">
                                {   
                                    error ? pwdNotMatch : ""
                                }
                            </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Already have an account?
                            <Link to="/auth/login" className="text-blue-500">Sign in</Link>
                        </p>

                        <button
                            type="submit"
                            className={btnStyle}
                            disabled={error || password.length === 0 || cpassword !== password}
                        >
                            Sign UP
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}