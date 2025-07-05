import React, {useEffect, useState} from "react";
import axios from "axios";
import myConstants from "../constants";

const Recipe = () => {
    const [apiData, setApiData] = useState([]);
    const id = (Number(localStorage.getItem("id")));
    useEffect(() => {
        axios.get(myConstants.recipeURL + '/'+id)
            .then((response) => {
                setApiData(response.data);
            })
    }, [])

    // currently using this if statement to handle it not trying to render before the API call is finished
    if (apiData.recipe) {
        return (
                <div>
                    <h1>{apiData.recipe.name}</h1>
                    <h3>Category: {apiData.recipe.RecipeCategory.name}</h3>
                    <h2>Ingredients</h2>
                    <ul>
                        {(apiData.ingredients).map((data)=>{
                            return (
                                <li>{data.amount} {data.Measurement.name} {data.Ingredient.name}</li>
                            )
                        })}
                    </ul>
                    <h2>Steps</h2>
                    <ol>
                        {(apiData.steps).map((data)=>{
                            return (
                                <li>{data.stepDirections}</li>
                            )
                        })}
                    </ol>
                </div>
        )
    } else {
        return (
            <div>
                <h1>not defined</h1>
            </div>
        )
    }
}

export default Recipe;