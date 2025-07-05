import React from "react";
import {useNavigate} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import ReadRecipes from "../components/readRecipes";

const Recipes = () => {
    // const navigate = useNavigate();
    // function setData() {
    //     navigate('/createIngredient');
    // }
    return (
        <div>
            <h1>
                Page for Recipes
            </h1>
            {/*<h3>Create:</h3>*/}
            {/*<Button onClick={()=>{setData()}}>Add New</Button>*/}

            <h3>Read:</h3>
            <ReadRecipes />

        </div>
    )
}

export default Recipes;