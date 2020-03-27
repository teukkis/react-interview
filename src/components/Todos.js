import React from 'react';

import Todo from './Todo'

//import material-ui
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';


//returns listed todos
const Todos = ({todos, onDeleteTodos, onChangeTodos}) => {
    
    //set style to the classes variable
    const classes = useStyles();

    return (
      <List className={classes.root}>
      
        {/* Iterate todos for the listing */}
        {todos.map(todo => {
          
          return (
            <div key={todo.id}>
              <Todo todo={todo} onDeleteTodos={onDeleteTodos} onChangeTodos={onChangeTodos}/>
              
              <Divider />
            </div>
          );
        })}
      </List>
    );
}


//style for the Todo component
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
      minHeight: '40px',
      fontSize: '30px'
  },
  text: {
      fontSize: '30px',
  },
  deleteButton: {
    color: grey[900],
  }
  
}));

export default Todos