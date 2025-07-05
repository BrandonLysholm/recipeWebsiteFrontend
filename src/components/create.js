// Following tutorial: https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

import React, {useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
// import myConstants from "../constants";

function Create() {
    const history = useNavigate();
    const [name, setName] = useState("");
    // const createURL = localStorage.getItem(myConstants.ingredientCategoryURL);
    const createURL = localStorage.getItem("createURL");

    const postData = () => {
        axios.post(createURL,{
            name
        }).then(()=>{
            history(-1);
        }).catch((error)=>{
            alert(error.response.data);
        })
    }
    return (
        <Form>
            <Form.Field>
                <label>Name:</label>
                <input placeholder="Name" onChange={(e)=> setName(e.target.value)} />
            </Form.Field>
            <Button type="submit" onClick={postData}>Create</Button>
        </Form>
    )
}

export default Create;
