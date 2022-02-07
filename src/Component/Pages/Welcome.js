import React from 'react';
import NavBar from '../Layout/NavBar';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Welcome() {
  return (<div>
     <NavBar/> 
     <Container>
         <br/>
         <br/>
         <Link to="/addsearchform">
         <Button>
            LOOKUP A SCHOOL YOU ARE INTERESTED IN
         </Button>
         </Link>
     </Container>
  </div>);
}
