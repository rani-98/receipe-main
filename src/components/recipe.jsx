import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function RecipeInfo(props) {
    // props = {recipe: {name: "string", ...}
    const { recipe } = props;
    return (<>
    
        <h1>{recipe.name}</h1>
        <h1>{recipe.username}</h1>
        <h1>{recipe.description}</h1>
        <img src={recipe.image} alt="food-image" />
    </>)
}


export default function DetailedRecipe() {
    // props = {recipe: {name: "string", ingredients: ["string"], instructions: ["string"]}}
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const serverUrl = `http://127.0.0.1:8000/recipes/${recipeId}`;

    // i want to fetch recipe details from the server using recipeId
    // to get the recipe details, i need to make a request to the server
    // we can use the fetch API to make a request to the server
    // but we need to call the fetch API inside a useEffect hook
    // why useEffect? because we want to make the request when the component is mounted
    useEffect(() => {

        fetch(serverUrl).then(response => response.json()).then(data => {
           setRecipe(data) // {error: "Recipe not found"} or {name: "string", ingredients: ["string"], instructions: ["string"]}
        })


    }, [])
    //  [] -> this represents that the useEffect should only run once when the component is mounted for the first time




    return (<>
        <h1>this is recipe instructions page for recipe {recipeId}</h1>
        <div>

            {
               recipe === null ? "Loading..." : recipe.error ? "Recipe not found" : <RecipeInfo recipe={recipe} />
            }

        </div>
    </>)
}
