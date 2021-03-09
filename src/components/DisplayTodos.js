import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodos,removeTodos } from '../actions/todoActions'
import './todoStyle.css'

const DisplayTodos = () => {
  const todos = useSelector((state) => state.todos)

  const dispatch = useDispatch()
  const editTodo = (todo) => {
    dispatch(updateTodos({ edit: true, todo }))
  }

  const deleteTodo = (todo) => {
    dispatch(removeTodos(todo))
  }

  return (
    <>
      <Container className='card-container'>
        {todos.map((todo) => (
          <Card key={todo.id} className='card-style'>
            <Card.Body className='cardbody-style'>
              <Card.Title className='text-center'>{todo.title}</Card.Title>
              <Card.Subtitle className='mb-2'>
                {todo.catagory}
              </Card.Subtitle>
              <Card.Text>{todo.todo}</Card.Text>

              <Card.Footer className='card-footer'>
                <Card.Link
                  onClick={(e) => editTodo({ todo })}
                  className='btn btn-info cardBtn'
                >
                  <i className='fas fa-edit'></i>
                </Card.Link>

                <Card.Link
                  onClick={(e) => deleteTodo({ todo })}
                  className='btn btn-info cardBtn'
                >
                  <i className='fas fa-trash-alt'></i>
                </Card.Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default DisplayTodos
