// Following tutorial: https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

import React, {useEffect, useState} from 'react';
import {Button, Form, Dropdown} from 'semantic-ui-react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import myConstants from "../constants";

function CreateIngredient() {
    const history = useNavigate();
    const [name, setName] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const createURL = myConstants.ingredientURL;
    const postData = () => {
        axios.post(createURL,{
            name,
            categoryID,
        }).then(()=>{
            history(-1);
        }).catch((error)=>{
            alert(error.response.data);
        })
    }

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(myConstants.ingredientCategoryURL)
            .then((response) => {
                const mappedData = [];
                for ( let tempObj of response.data ){
                    mappedData.push({key: tempObj.id, value: tempObj.id, text: tempObj.name});
                }
                setApiData(mappedData);
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    return (
        <Form>
            <Form.Field>
                <label>Name:</label>
                <input placeholder="Name" onChange={(e)=> setName(e.target.value)} />
            </Form.Field>
            <Dropdown
                placeholder='select category'
                onChange={(e, data)=>{
                    // console.log(data)
                    setCategoryID(data.value)
                }}
                options={apiData} >
            </Dropdown>
            <Button type="submit" onClick={postData}>Create</Button>
        </Form>
    )
}

export default CreateIngredient;
