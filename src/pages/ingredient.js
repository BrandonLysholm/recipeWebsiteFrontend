import React from "react";
import {useNavigate} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import ReadIngredient from "../components/readIngredient";

const Ingredient = () => {
    const navigate = useNavigate();
    function setData() {
        navigate('/createIngredient');
    }
    return (
        <div>
            <h1>
                Page for Ingredients
            </h1>
            <h3>Create:</h3>
            <Button onClick={()=>{setData()}}>Add New</Button>

            <h3>Read:</h3>
            <ReadIngredient />

        </div>
    )
}

export default Ingredient;