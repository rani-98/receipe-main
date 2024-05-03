import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./routes/context/themeContext";


function Card(props) {
    // props = {recipe: {id: 2,  name: "Raw Veggie Chopped Salad", username: "Ratna Kumari", time: 10, servers: 2, image: "https://www.veggieinspired.com/wp-content/uploads/2021/05/raw-veggie-chopped-salad-featured.jpg"}}
    const {theme} = useContext(ThemeContext)

    const darkTheme = "bg-slate-800 text-white"
    const lightTheme = "bg-slate-100 text-black"

    // write some code here for the card component styling
    
    return (
        <Link to={`/recipes/${props.recipe.id}`}>
        
    <div className="min-w-56 rounded-lg shadow-lg p-3 h-full">
            <div className="flex flex-col gap-4 h-full">

                <img className="rounded-lg flex-grow object-cover" src={props.recipe.image} alt="veggies" />

                <h2 className="font-bold">{props.recipe.name}</h2>

                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="border rounded-full p-1 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <span>{props.recipe.username}</span>

                </div>

                <div className="flex gap-2 text-orange-400 font-semibold">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                    <span>{props.recipe.time} min </span>
                    <span> | </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>

                    <span>{props.recipe.servers} People</span>

                </div>


            </div>

        </div>
        </Link>
    )
}
