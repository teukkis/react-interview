import React, {useState, useEffect} from 'react';

//import all the components
import Submit from './Submit'
import Todo from './Todos'
import Header from './Header'

//import material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//import id generator
const uniqid = require('uniqid')


//todos in the list at the beginning
const initialTodos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: true},
    {id: 5, name: 'Change car tyres', complete: false}
];


//Handle all the todo list functionality
const TodoHandler = () => {

    //set style to the classes variable
    const classes = useStyles()

    //define initial states 
    const [todos, setTodos] = useState(initialTodos)
    const [newTodo, setNewTodo] = useState()
    const [header, setHeader] = useState('Something to play around with during quarantine...')

    //create a new todo object, and form a new array with the new todo object
    const handleNewTodo = (newTodo) => {
        
        if (newTodo.length !== 0 && newTodo.length < 55) {
            
            setNewTodo(newTodo)

            const newTodoObject = {
                id: uniqid(),   //generate unique id
                name: newTodo, 
                complete: false
            }

            setTodos([...todos, newTodoObject])
        }

        else if (newTodo.length >= 55) {
            setHeader('Only shorter than 55 characters are ')
        }

        else {
            setHeader('You need to type something')
        }
    }

    //iterate todo list and delete the item based on its id.
    //replace the old list with the new one
    const handleTodoDelete = (todoId) => {
        const newList = todos.filter(toDelete => toDelete.id !== todoId)
        setTodos(newList)
    }

    //change the 'complete' value of the todo object ( true / false )
    //create a new array with the modified item
    const handleTodoCheck = (todoId) => {
        try {
            const todoToChange = todos.find(t => t.id === todoId)
            const changedTodo = { ...todoToChange, complete: !todoToChange.complete }
            setTodos(todos.map(t => t.id !== todoId ? t : changedTodo))

        } catch (error) {
            window.alert(error)
        }
    }

    //change the state of header text based on the number of items in the list
    useEffect(() => {
        if (todos.length > 8) {
            setHeader('Try to even get something done!')
        }
        else if (todos.length === 0) {
            setHeader('Great job buddy!')
        }
        else {
            setHeader('Something to play around with during quarantine...')
        }
    }, [todos.length])

    return (
        <div className={classes.root}>

            <Grid container>

                <Grid 
                    item xs={12} 
                    container
                    className={classes.header}
                >
                    <Header text={header}/>
                </Grid>

                <Grid 
                    item xs={12} 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.todos}
                >
                    <Todo todos={todos} onChangeTodos={handleTodoCheck} onDeleteTodos={handleTodoDelete}/>
                </Grid>
                
                <Grid 
                    item xs={12} 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.submit}
                >
                    <Submit todo={newTodo} onAddTodo={handleNewTodo}/>
                </Grid>

            </Grid>
        </div>
    )
}

//style for the TodoHandler component
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    header: {
        paddingBottom: '30px',
    },
    todos: {  
        paddingBottom: '10px',
    },
  }));

export default TodoHandler;
