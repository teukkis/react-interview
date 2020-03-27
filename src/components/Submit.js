import React, {useState} from 'react';

//import material-ui
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import { grey } from '@material-ui/core/colors';


//component for adding a new todo (textfield and button)
const Submit = ({todo, onAddTodo}) => {

    //set style to the classes variable
    const classes = useStyles();

    const [newTodo, setNewTodo] = useState('')

    //follow changes of the textfield
    const handleTodo = (event) => {
        setNewTodo(event.target.value)
    }

    //when a new todo added, pass it back to the parent (App.js) component.
    const addTodo = (event) => {
        event.preventDefault();
        todo = newTodo
        onAddTodo(todo)

        //clear the textfield after a todo added.
        setNewTodo('')
    }

    return (
        <div className={classes.root}>
            <form onSubmit={addTodo}>
            
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Add new todo"
                        multiline
                        value={newTodo}
                        onChange={handleTodo}
                        color="secondary"
                        id="mui-theme-provider-standard-input"
                    />
                
                    <IconButton color="secondary" type="submit" aria-label="search">
                        <SaveIcon fontSize="large"/>
                    </IconButton>
                </ThemeProvider>

            </form>
        </div>
    )
}


//style for the Submit component
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    
  }));


//style for TextField and IconButton
  const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: {
          main: '#555555',
        },
      },
  });


export default Submit