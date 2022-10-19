import React from 'react';
import Overview from './components/Overview';
import { Button } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: ['123', '222']
    };

    this.addTask = this.addTask.bind(this);
  };

  addTask() {
    if (document.getElementById('input').value !== '') {
      this.setState({
        tasks: [...this.state.tasks, document.getElementById('input').value]
      })
    }

    document.getElementById('input').value = ""; // after adding task input is emptied
  }

  render() {

    const { tasks } = this.state; // deconstructing this.state into two variables

    return (
      <Container className='sm mt-5' >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">New Task</InputGroup.Text>
          <Form.Control
            id='input'
            placeholder="new task"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary" onClick={this.addTask}>Click me</Button>{' '}
        </InputGroup>
        <Overview tasks={tasks} />
      </Container >
    )
  }
}