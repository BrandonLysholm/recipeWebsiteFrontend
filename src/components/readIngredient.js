// Temporary file to get it working with relationshiops
import React, {useEffect, useState} from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from "axios";
import myConstants from "../constants";
import {Link} from "react-router-dom";

function ReadIngredient() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(myConstants.ingredientURL)
            .then((response) => {
                setApiData(response.data);
            })

    }, [])

    const setData = (data) => {
        localStorage.setItem('id', data.id);
        // console.log(data.IngredientCategoryId);
        localStorage.setItem('categoryID', data.IngredientCategoryId);
        // console.log(data);
        localStorage.setItem('name', data.name);
    }

    const onDelete = (id) => {
        axios.delete(myConstants.ingredientURL + '/' + id)
        .then(() => {
            getData();
        })
            .catch((error)=>{
                alert(error.response.data);
            })
    }

    const getData = () => {
        axios.get(myConstants.ingredientURL)
        .then((response) => {
            setApiData(response.data);
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Category Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.IngredientCategory.name}</Table.Cell>
                                <Link to='/updateIngredient'>
                                    <Table.Cell>
                                        <Button onClick={()=>setData(data)}>
                                            Update
                                        </Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={()=>onDelete(data.id)}>
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}

export default ReadIngredient;