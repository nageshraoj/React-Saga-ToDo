import React from 'react'
import { Button,Container,Navbar,Nav } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import AddNewItem from './components/AddNewItem'
import EditTodo from './components/EditTodo'
import DisplayTodos from './components/DisplayTodos'
import { updateTodos } from './actions/todoActions'

const App = () => {

    const dispatch = useDispatch()
    const isUpdate = useSelector((state) => state.updateTodo)

    const addNewHandler = () => {
    dispatch(updateTodos({AddNew:true}))
  }

  return (
    <>
      <Navbar className='navbar navbar-expand-lg navbar-light bg-primary'>
        <Container>
          <Navbar.Brand href='#'>To-Dos</Navbar.Brand>
          <Nav>
            <Button
              onClick={() => addNewHandler()}
              className='btn btn-info mr-auto'
            >
              Add New To-Do
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <DisplayTodos />

      {isUpdate.AddNew ? <AddNewItem /> : null}
      {isUpdate.edit ? <EditTodo /> : null}
    </>
  )
}

export default App
