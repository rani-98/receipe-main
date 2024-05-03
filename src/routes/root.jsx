import {Outlet} from "react-router-dom";
import NavBar from "./components/navbar";
import { useContext } from "react";
import { themeContext } from "./routes/context/themeContext";


export default function Root() {
    const {} = useContext(themeContext)
    const darkTheme = "bg-gray-800 text-white min-h-full"
    const lightTheme = "bg-white text-black min-h-full"
   
    
    return (
        <>
        <div className={theme === dark ? darkTheme : lightTheme}>
            <NavBar />
            <Outlet />
            
        </div>
            
        </>
    )
}
