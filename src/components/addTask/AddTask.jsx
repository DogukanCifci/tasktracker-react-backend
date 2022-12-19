import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, description, priority, is_done: false };
    console.log("task geldi mi:", newTask);
    addNewTask(newTask);
    setTask("");
    setDescription("");
    setPriority("");
  };

  const addNewTask = async (newTask) => {
    const url = "http://127.0.0.1:8000/todomvs/";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Open this select menu</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">Height</option>
        </Form.Select>
        <div className="text-center">
          <Button variant="primary w-50 " type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
