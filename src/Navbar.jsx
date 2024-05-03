import React, { useState } from 'react';

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pageStyle = " cursor-pointer border-b-4 border-indigo-300";
  const pointer = "cursor-pointer";

  function handleClick(page) {
    setCurrentPage(page);
  }

  const homeClick = () => {
    handleClick("Home");
    if (currentPage !== "Home") {
      window.location.reload();
    }
  }

  const recipesClick = () => {
    handleClick("Recipes");
  }
  const addClick = ()=> {
    handleClick("add recipes")
  }

  console.log("Rendered NavBar");

  return (
    <div className="flex p-4 w-full">
      <h1>React Recipe App</h1>
      <ul className="flex justify-end gap-2 w-full">
        
        <li className={currentPage === "Home" ? pageStyle : pointer} onClick={homeClick}>
          <link to="/home">Home</link>
          </li>
        <li className={currentPage === "Recipes" ? pageStyle : pointer} onClick={recipesClick}>
        <link to="/recipes">Recipes</link></li>
        <li className={currentPage === "add" ? pageStyle : pointer} onClick={addClick}>
        <link to="/add">add recipes</link></li>
      </ul>
    </div>
  );
}

export default NavBar;