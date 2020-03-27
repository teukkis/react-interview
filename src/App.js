import React from 'react';

//import material-ui
import Container from '@material-ui/core/Container';

//import components
import TodoHandler from'./components/TodoHandler'

//Display the application
const App = () => {

    return (
        <Container fixed>
            <TodoHandler />
        </Container>
    )
}


export default App;
