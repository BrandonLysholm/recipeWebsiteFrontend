import React from "react";
import Read from "../components/read"
import {useNavigate} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import myConstants from "../constants";


const RecipeCategories = () => {
    const navigate = useNavigate();
    function setData() {
        localStorage.setItem('createURL', myConstants.recipeCategoryURL);
        navigate('/create');

    }
    return (
        <div>
            <h1>
                Page for Ingredient Categories
            </h1>
            <h3>Create:</h3>
            <Button onClick={()=>{setData()}}>Add New</Button>

            <h3>Read:</h3>
            <Read URL={myConstants.recipeCategoryURL} />
        </div>
    );
};

export default RecipeCategories;
