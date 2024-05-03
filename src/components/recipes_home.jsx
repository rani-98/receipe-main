import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./Header.jsx";
import Card from "./card.jsx";




const url = " http://127.0.0.1:8000/recipes";


export default function Recipes() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [recipes, setRecipes] = useState([])

    const changeRecipe = (type) => {
        setSearchParams({ type: type })
    }
    const recipeType = searchParams.get("type") || "all"

    useEffect(() => {
        // console.log("useEffect called");
        // here we want to write the code that can fetch the data from the server
        // when the component is mounted for the first time


        // fetch is a function that is used to make a network request
        // fetch function returns a promise, which we need to handle using then
        // then function will be called when the promise is resolved
        // and then function takes a callback function as an argument
        // the callback function will be called when the promise is resolved with the data returned by the server
        fetch(url).then((response) => {
            return response.json() // here we are trying to access the json data from the response which is stored in the memory (RAM). 
            // To access memory from ram we need to use json() function, which will ask the operating system to give the data stored in the memory
            // Instead javascript waiting for the data in memory, it will return a promise which will be resolved when the data is available from the memory by the operating system.
        }).then((data) => {
            // data -> {recipes: [{}, {}, {}]}
            setRecipes(data.recipes)
        })

    }, [])

    // i want to execute a code when the component is mounted for the first time
    useEffect(() => {
        console.log("Component mounted for the first time");
    }, [])
    // when we pass empty array as second argument then it will only run once when the component is mounted for the first time

    // below effect will only runs when recipeType changes
    // this useEffect will check if recipeType chnaged or not in every render
    // if recipeType changed then it will run
    // if recipeType not changed then it will not run
    useEffect(() => {
        console.log("Recipe type changed");
    }, [recipeType])
    // ones the component is rendered then this useEffect will check recipeType is changed by comparing the previous value of recipeType with the current value of recipeType
    
    return (
        <>
            <Header type={recipeType} changeRecipe={changeRecipe} />
            {/* <Counter /> */}
            <div className="grid grid-cols-4 gap-6 p-8">
                {
                    // [Card, Card]
                    recipes.map((recipe, index) => {
                        if (recipeType === recipe.type || recipeType === "all") {
                            return <Card key={index} recipe={recipe} />
                        }
                    })
                }
            </div>

        </>
    )
}
