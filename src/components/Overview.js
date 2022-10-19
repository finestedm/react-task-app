import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';


export default function Overview(props) {
    const { tasks, deleteButtonClick } = props;
    return (
        <ListGroup as="ul">
            {tasks.map(task => <ListGroup.Item as="li" key={task.id}>
                {task.text}
                <Button variant='outline-danger' onClick={() => { deleteButtonClick(task.id) }}>Delete</Button>{''}
            </ListGroup.Item>)}
        </ListGroup>
    )

}