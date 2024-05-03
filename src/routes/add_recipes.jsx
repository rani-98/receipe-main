import Input from "../components/input"
import { useState } from "react"
import TrashSvg from "../components/svg/trash_svg"
import PlusSvg from "../components/svg/plus_svg"

function IngredientInput(props) {
    // name = "step-2"
    return (
        <div className="flex gap-2 m-2 border-2 p-2 rounded-md">
            <input type="text" className="flex-grow focus:outline-none" placeholder="Add Ingredients" name={`step-${props.uid}`} />
            <span>
                <TrashSvg />
            </span>
        </div>
    )
}


export default function AddRecipe() {
    

    const [uploadedImage, setUploadedImage] = useState("")

    const [ingredientTags, updateIngredientTags] = useState([])

    const handleImageChange = (event) => {

        // take the uploaded file and convert it to a URL
        const file = event.target.files[0];

        const reader = new FileReader();

        // onloadend is an event listener that is triggered when the file is converted to a URL
        reader.onloadend = () => {
            console.log("file uploaded");
            console.log(reader.result);
            setUploadedImage(reader.result)
        }
        
        // readAsDataURL is a method that converts the file to a URL
        reader.readAsDataURL(file);
    }



    const newIngredient = (event) => {
        const key = Math.random().toString(36).substring(7)
        const newIngredient = <IngredientInput key={key} uid={key}/>
        const iArray = [...ingredientTags, newIngredient]
        updateIngredientTags(iArray)
    }

    const formSubmit = (event) => {
        event.preventDefault();
        // get the data image from the form
        const form = new FormData(event.target);

        console.log(form.get("images"));
        console.log(form.get("recipeName"));
        console.log(form.get("category"));
        console.log(form.get("time"));
        console.log(form.get("serves"));
        console.log(form.get("description"));

        // get all the tags which starts with name step
        const tags = Array.from(form.keys()).filter(name => name.startsWith("step-"));
        
        // get the values of the tags
        const values = tags.map(tag => {
            return form.get(tag)
        }
        );
        // join the values with a comma
        const ingredients =  values.join(",");

        form.append("ingredients", ingredients);
        form.append("steps", "")
        form.append("username", "testuser")

        const url = "https://widespread-mellisent-vj0.koyeb.app/add_recipe"
        // headers send multipart form data
        fetch(url,{
            method: "POST",
            body: form,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.json()).then(data => {
            console.log(data)
        })


    }

    const selectInputStyle = "mx-auto my-2 border rounded-md p-2 w-full"
    return (
        <form  className="w-3/4 mx-auto my-5 border rounded-md p-4" onSubmit={formSubmit}>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <Input id="rname" label="Recipe Name" placeholder="Ex: Veg Salad" name="name"  />
                <div>
                    <label htmlFor="category">Food Category</label>
                    <select name="category" id="category" className={selectInputStyle}  required >
                        <option value="" >
                            Select Food Category
                        </option>
                        <option value="breakfast">
                            Breakfast
                        </option>
                        <option value="lunch">
                            Lunch
                        </option>
                        <option value="dinner">
                            Dinner
                        </option>
                        <option value="snack">
                            Snack
                        </option>
                        <option value="dessert">
                            Dessert
                        </option>
                        <option value="beverage">
                            Beverage
                        </option>
                    </select>
                </div>
                <Input id="tprepare" label="Time to Perpare" placeholder="time to preperate" type="number" name="time"  />
                <Input id="serves" label="Serves" placeholder="Servers" type="number" name="serves"  />

            </div>

            <div className="my-2">
                <Input label="Description" name="description" id="descriptions" placeholder="Recipe Description"
                    
                />
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="images" className="border-2 border-dotted rounded-md h-32 grid items-center text-center">
                        <h2 className="text-center text-gray-500">
                            Drag and Drop Image Here
                        </h2>
                    </label>
                    <input type="file" name="images" id="images" accept="image/*" hidden onChange={handleImageChange} required/>
                </div>
                <div className="border rounded-md p-2">
                    {
                        uploadedImage && <img src={uploadedImage} alt="uploaded" className="rounded-md" />
                    }
                    

                </div>
            </div>
                

            <div className="grid grid-cols-2 my-2 gap-2">

                    <div className="border-2 border-dashed rounded-md min-h-80">
                        <div className="flex justify-center gap-2 m-2 border-2 p-2 rounded-md hover:cursor-pointer" onClick={newIngredient}>
                            <PlusSvg />
                            New Ingredient
                        </div>

                        {ingredientTags}
                        
                    </div>

                    <div className="border-2 border-dashed rounded-md min-h-80">


                       

                    </div>

            </div>



            <button type="submit" className="block mx-auto my-2 border rounded-md p-2  bg-blue-500 text-white w-fit">
                Submit
            </button>
        </form>
    )
}