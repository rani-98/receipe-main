import { AuthContext } from "../context/authContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

function ProtectedRoute(props) {
    // <ProtectedRoute> <HomeRoute /> <h1>hello</h1> </ProtectedRoute>
    // props -> {children: [<HomeRoute/>, <h1>hello</h1>]}
    // check the auth context and return the children if the user is authenticated
    const { token } = useContext(AuthContext)

    if (!token) {
        // redirect to login
        return <Navigate to="/auth/login" />
    }

    console.log("ProtectedRoute", token);
    return (
        <>
        {props.children}
        </>
    )
}

export default ProtectedRoute