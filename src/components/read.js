import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import axios from "axios";

function Read(passedData) {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(passedData.URL)
            .then((response) => {
                setApiData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[passedData]);

    const setData = (data) => {
        localStorage.setItem('editURL', passedData.URL);
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', data.name);
    }

    const onDelete = (id) => {
        axios.delete(passedData.URL+'/'+id)
            .then(()=> {
                getData();
            })
            .catch((error)=> {
                alert(error.response.data);
            })
    }

    const getData = () => {
        axios.get(passedData.URL)
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
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Link to ='/update'>
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


export default Read;
