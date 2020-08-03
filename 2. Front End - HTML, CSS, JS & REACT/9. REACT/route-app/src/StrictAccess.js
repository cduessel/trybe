import React from 'react';
import { Redirect } from 'react-router-dom';
// import about from './About';

const StrictAccess = ({ user }) => {
    if(user.username === "CD" && user.password === "1234"){
        return(
          <div>
            <h2>Hello João!</h2>
          </div>
        ) 
    }
    return(
    // alert("acesso negado!")
    <Redirect to="/about" />
    )
}

export default StrictAccess