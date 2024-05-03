import { useContext, useState } from "react"
import { Link, Navigate, useNavigate} from "react-router-dom"
import EyeslashSvg from "./svg/eye_slash"
import EyeSvg from "./svg/eye"
import { AuthContext } from "../context/authContext"

export default function Login() {
    const url = "https://widespread-mellisent-vj0.koyeb.app/login"
    const [hidden, setHidden] = useState(true)
    const navigation = useNavigate()
    const {token, login} = useContext(AuthContext)


    const onSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)

        fetch(url, {
            method: "POST",
            body: formData
        }).then(resp => resp.json()).then(data => {
            if (data.access_token) {
                // securly store the token
                // store in cookie
                login(data.access_token)    
                navigation("/home", {replace: true})               
            }
            console.log(data)
        })
    }

    if (token) {    
        return <Navigate to="/home" replace={true} />
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

                <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="text"
                                name = "username"
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
                                name = "password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setHidden(!hidden)}>
                                {
                                    hidden ? <EyeslashSvg/> : <EyeSvg/>
                                }
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <Link to="/auth/signup" className="text-blue-500">Sign up</Link>

                        </p>

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}