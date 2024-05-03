import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function RecipeInfo(props) {
    // props = {recipe: {name: "string", ...}
    const { recipe } = props;
    return (<div className="w-1/2 mx-auto">
        <h1 className="font-semibold text-4xl my-2 border-b-4 pb-2 border-indigo-300 w-fit">{recipe.name}</h1>
        <div>
            <img src={recipe.image} alt="food-image" className="object-cover w-full h-[330px]" />
            <div className="flex gap-4 bg-slate-200 p-4 mt-1 rounded-sm">
                <p className="flex-grow">
                    <span className="font-semibold">Category: </span>
                    <span>Dessert</span>
                </p>

                <p>
                    <span className="font-semibold">Time: </span>
                    <span>15 Min</span>
                </p>

                <p>
                    <span className="font-semibold">Serves: </span>
                    <span>4</span>
                </p>
            </div>
        </div>

        <div className="family-sans my-4">
            <h1 className="font-semibold text-3xl">Description</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quibusdam tempore veniam velit odit impedit vitae ipsa non accusamus asperiores!
            </p>
        </div>


        <div className="grid grid-cols-3 gap-1 mt-14">

            <section>
                <h1 className="font-medium text-2xl">Ingredients List</h1>
                <ul className="list-disc">
                    <li>
                        <span>2 cups of flour</span>
                    </li>
                    <li>
                        <span>1 cup of sugar</span>
                    </li>
                    <li>
                        <span>1 cup of milk</span>
                    </li>
                    <li>
                        <span>1 cup of oil</span>
                    </li>
                    <li>
                        <span>1 cup of butter</span>
                    </li>
                </ul>
            </section>

            <section className="col-span-2">
                <h1 className="font-medium text-2xl">Preparation</h1>
                <ol className="list-decimal">
                    <li>
                        <span>Preheat the oven to 350 degrees Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur ea amet voluptas eligendi quam itaque rerum dolore sed ipsam?</span>
                    </li>
                    <li>
                        <span>Mix the flour and sugar in a bowl</span>
                    </li>
                    <li>
                        <span>Add the milk and oil to the bowl</span>

                    </li>

                    <li>
                        <span>Grease a baking pan with butter</span>
                    </li>

                    <li>
                        <span>Pour the batter into the baking pan</span>
                    </li>


                </ol>
            </section>
        </div>

        <CommentSection />
    </div>)
}


function CommentSection() {
    return (<>

        <div className="border-t border-indigo-300">

            <h1 className="font-semibold text-2xl">Comments (4)</h1>


        </div>

    </>)
}


// http://localhost:5173/recipe/1 -> recipeId: 1
export default function DetailedRecipe() {
    // props = {recipe: {name: "string", ingredients: ["string"], instructions: ["string"]}}
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const serverUrl = `https://widespread-mellisent-vj0.koyeb.app/recipes/${recipeId}`;

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
        <div>

            {
                recipe === null ? "Loading..." : recipe.error ? "Recipe not found" : <RecipeInfo recipe={recipe} />
            }

        </div>
    </>)}
