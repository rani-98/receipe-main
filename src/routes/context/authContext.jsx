import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()


function AuthProvider(props) {
    // props -> {children: [<RouterProvider/> ]}
    const [token, setToken] = useState(null)


    useEffect(() =>{
        const token = localStorage.getItem("token")
        if (token) {
            setToken(token)
        }
    },[])

    const login = (token) => {
        setToken(token)
        localStorage.setItem("token", token)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem("token")
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )

}


export {
    AuthContext,
    AuthProvider
}