import React from 'react';

//import material-ui
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';


//returns listed todos
const Todo = ({todo, onDeleteTodos, onChangeTodos}) => {
    
    //set style to the classes variable
    const classes = useStyles();

    //when checkbox clicked, pass the id of that item back to parent (App.js) component.
    const handleToggle = todo => () => {
        onChangeTodos(todo.id)
      }

    //when deleteIcon clicked, pass the id of that item back to parent (App.js) component.
    const handleDelete = (todoId) => {
      onDeleteTodos(todoId)
    }

    return (
            
              <ListItem data-testid="q" className={classes.item}  dense button onClick={handleToggle(todo)}>

                <ListItemIcon  >
                  <FormControlLabel  control={<GreenCheckbox checked={todo.complete} />}/>
                </ListItemIcon>

                <ListItemText data-testid="item" primary={todo.name}/>

                <ListItemSecondaryAction>
                  <IconButton data-testid="delete" edge="end"  onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon className={classes.deleteButton}/>
                  </IconButton>
                </ListItemSecondaryAction>
                
              </ListItem>
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


//define style for the checkbox
const GreenCheckbox = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox display="none" data-testid="box" role="checkbox" aria-checked={props.checked} {...props} />);

export default Todo