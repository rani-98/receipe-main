function Header(props) {
   
    console.log("Rendered Header");
    const selectedStyle = "bg-black text-white px-4 py-2 border border-black rounded-sm"
    const unselectedStyle = "px-4 py-2 border border-black rounded-sm cursor-pointer"

    const changeAll = () => {
        props.changeRecipe("all")
    }
    
    const changeAppetizers = () => {
        props.changeRecipe("appetizers")
    }

    const changeBeverages = () => {
        props.changeRecipe("beverages")
    }

    const changeBreakfast = () => {
        props.changeRecipe("breakfast")
    }

    const changeDessert = () => {
        props.changeRecipe("dessert")
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-3">
                Recipes
            </h1>

            <ul className="border-y-2 py-3 flex justify-center gap-2 items-center">
                <li className={props.type == 'all' ? selectedStyle : unselectedStyle} onClick={changeAll}>All Recipes</li>
                <li className={props.type == 'appetizers' ? selectedStyle : unselectedStyle} onClick={changeAppetizers}>Appetizers</li>
                <li className={props.type == 'beverages' ? selectedStyle : unselectedStyle} onClick={changeBeverages} >Beverages</li>
                <li className={props.type == 'breakfast' ? selectedStyle : unselectedStyle} onClick={changeBreakfast}>Breakfast</li>
                <li className={props.type == 'dessert' ? selectedStyle : unselectedStyle} onClick={changeDessert}>Desserts</li>
            </ul>
        </>
    )
}


export default Header