import React from 'react';

//import material-ui
import Typography from '@material-ui/core/Typography';

//display header text
const Header = ({text}) => {

  return (
      <div >
          <Typography variant="h3">{text}</Typography>
      </div>
  )
}


export default Header