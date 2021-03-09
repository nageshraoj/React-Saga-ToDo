import React, { useState,useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodos, editTodos } from '../actions/todoActions'

const EditTodo = () => {
  const [catagory, setCatagory] = useState('')
  const [title, setTitle] = useState('')
  const [edittodo, setEditTodo] = useState('')

  const { edit ,todo} = useSelector((state) => state.updateTodo)
  const dispatch = useDispatch()

    useEffect(() => {
        setTitle(todo.todo.title)
        setCatagory(todo.todo.catagory)
        setEditTodo(todo.todo.todo)
    }, [todo])
    
  const changeModelState = () => {
    dispatch(updateTodos({}))
  }

    const saveToDo = () => {
    dispatch(editTodos({ id: todo.todo.id, title, catagory, todo: edittodo }))
    dispatch(updateTodos({}))
  }

  return (
    <>
      <Modal show={edit} onHide={changeModelState}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To-DO</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId='editTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Catagory'
              />
              <Form.Text className='text-muted'>The Title of ToDo.</Form.Text>
            </Form.Group>

            <Form.Group controlId='editCatagory'>
              <Form.Label>Catagory</Form.Label>
              <Form.Control
                value={catagory}
                onChange={(e) => setCatagory(e.target.value)}
                type='text'
                placeholder='Title'
              />
              <Form.Text className='text-muted'>
                The catagory of ToDo.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='editTodo'>
              <Form.Label>To-Do</Form.Label>
              <Form.Control
                value={edittodo}
                onChange={(e) => setEditTodo(e.target.value)}
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

export default EditTodo
