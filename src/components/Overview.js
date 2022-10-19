import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Overview(props) {
    const { tasks, deleteButtonClick } = props;
    return (
        <ListGroup as="ul" className='text-center'>
            {tasks.map(task => <ListGroup.Item as={Row} as="li" key={task.id}>
                <h1 as={Col}>{task.text}</h1>
                <Button as={Col} variant='outline-danger' onClick={() => { deleteButtonClick(task.id) }} >Delete</Button>{''}
            </ListGroup.Item>
            )}
        </ListGroup>

    )

}