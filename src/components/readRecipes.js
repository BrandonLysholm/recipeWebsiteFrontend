import React, {useEffect, useState} from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from "axios";
import myConstants from "../constants";
import {Link} from "react-router-dom";
function ReadRecipes() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(myConstants.recipeURL)
            .then((response) => {
                setApiData(response.data);
            })
    }, [])

    const setData = (data) => {
        localStorage.setItem('id', data.id);
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
                                <Table.Cell>{data.RecipeCategory.name}</Table.Cell>
                                <Link to='/recipe'>
                                    <Table.Cell>
                                        <Button onClick={()=>setData(data)}>
                                            View Recipe
                                        </Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}

export default ReadRecipes;