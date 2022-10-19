import React from 'react';
import Overview from './components/Overview';
import { Button } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import uniqid from "uniqid";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };

  addTask() {
    if (this.state.task.text !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.task],
        task: {
          text: '',
          id: uniqid(),
        }
      })
    }
    document.getElementById('input').value = ""; // after adding task input is emptied
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  render() {

    const { task, tasks } = this.state; // deconstructing this.state into variables

    return (
      <Container className='sm mt-5' >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">New Task</InputGroup.Text>
          <Form.Control
            id='input'
            placeholder="new task"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
            value={task.text}
          />
          <Button variant="primary" onClick={this.addTask}>Click me</Button>{' '}
        </InputGroup>
        <Overview tasks={tasks} />
      </Container >
    )
  }
}