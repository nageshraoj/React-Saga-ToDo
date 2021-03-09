import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { v4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodos, addTodos } from '../actions/todoActions'

const AddNewItem = () => {
  const [catagory, setCatagory] = useState('')
  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState('')

  const isAdd = useSelector((state) => state.updateTodo)
  const dispatch = useDispatch()

  const changeModelState = () => {
    dispatch(updateTodos({}))
  }

  const saveToDo = () => {
    dispatch(addTodos({ id: v4(), title, catagory, todo }))
    dispatch(updateTodos({}))
  }

  return (
    <>
      <Modal show={isAdd.AddNew} onHide={changeModelState}>
        <Modal.Header closeButton>
          <Modal.Title>New To-DO</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId='addCatagory'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={catagory}
                onChange={(e) => setCatagory(e.target.value)}
                type='text'
                placeholder='Catagory'
              />
              <Form.Text className='text-muted'>The Title of ToDo.</Form.Text>
            </Form.Group>

            <Form.Group controlId='addTitle'>
              <Form.Label>Catagory</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Title'
              />
              <Form.Text className='text-muted'>
                The catagory of ToDo.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='addTodo'>
              <Form.Label>To-Do</Form.Label>
              <Form.Control
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type='text'
                placeholder='ToDo'
              />
              <Form.Text className='text-muted'>ToDo information.</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={changeModelState} variant='secondary'>
            Close
          </Button>
          <Button onClick={saveToDo} variant='primary'>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddNewItem
