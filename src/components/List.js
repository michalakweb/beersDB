import React from 'react';

const List = (props) => (
    <div>        
          
        {   //showing a loading screen before the database loads
            props.database === '' && <p>Loading</p>
        }
        {   //once the database loads, each beer is shown as a separate component
            props.database !== '' && props.database.map(el => <p>{el.name}</p>)
        }
    </div>
)


export default List;