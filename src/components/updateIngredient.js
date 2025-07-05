import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Form, Input} from 'semantic-ui-react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import myConstants from "../constants";

function UpdateIngredient() {
    const [name, setName] = useState("");
    const [id, setID] = useState(null)
    const [categoryID, setCategoryID] = useState(Number);
    const [apiData, setApiData] = useState([]);
    const history = useNavigate();
    const preselectedCategory = Number(localStorage.getItem("categoryID"));

    const updateAPIData = () => {
        axios.put(myConstants.ingredientURL, {
            id: id,
            name: name,
            categoryID: categoryID,

        }).then(()=>{
            history(-1);
        }).catch((error)=>{
            alert(error.response.data);
        })
    }

    useEffect(() => {

        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setCategoryID(Number(localStorage.getItem("categoryID")));
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
    }, [])


    return (
        <Form>
            <Form.Field>
                <label>Name</label>
                <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Dropdown
                placeholder='select category'
                onChange={(e, data)=>{
                    setCategoryID(data.value)
                }}
                options={apiData}
                defaultValue={preselectedCategory}

            >
            </Dropdown>
            <Button type="submit" onClick={updateAPIData}>Update</Button>

        </Form>
    )
}

export default UpdateIngredient;