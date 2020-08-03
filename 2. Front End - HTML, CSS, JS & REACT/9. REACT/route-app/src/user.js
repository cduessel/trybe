import React from 'react';

const user = (props) => (
    <div>
        <h2>User:</h2>
        <h3>{props.location.pathname}</h3>
        <h1>ID:{props.match.params.id}</h1>
    </div>
)

export default user