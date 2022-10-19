import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


export default function Overview(props) {
    const { tasks } = props;
    return (
        <ListGroup as="ul">
            {tasks.map(task => <ListGroup.Item as="li" key={task.id}>{task.text}</ListGroup.Item>)}
        </ListGroup>
    )

}