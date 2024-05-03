
import NavBar from "./Navbar.jsx"
import Header from "./Header.jsx"
import Card from "./Cards.jsx"

import { useEffect, useState } from "react"

/*
what is use effect?
- use effect is a hook that lets you perform side effects in your functional components.
- it is a close replacement for componentsDidmount, componentDidUpdate, and componentWillUnMount.
- it is called after the component has been rendered to the screen.
- it is used to fetch data, add event listeners, and perform other side effects
*/

function fetchRecipes(){
  
  data = fetch(url)

  console.log(data);
}
function App() {

 
  console.log("app component renderd")

  return (
    <>
      <NavBar />
      
    </>
  )
}


export default App