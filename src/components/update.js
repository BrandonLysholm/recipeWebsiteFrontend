import React, {useEffect, useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Update() {
    const [name, setName] = useState("");
    const [id, setID] = useState(null)
    const history = useNavigate();

    const updateAPIData = () => {

        axios.put(localStorage.getItem('editURL'), {
            id: id,
            name: name,
        }).then(()=>{
            history(-1);
        }).catch((error)=>{
            alert(error.response.data);
        })
    }

    useEffect(() => {
        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
    }, [])

    return (
        <Form>
            <Form.Field>
                <label>Name:</label>
                <input placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
            </Form.Field>
            <Button type="submit" onClick={updateAPIData}>Update</Button>
        </Form>
    )
}

export default Update;
