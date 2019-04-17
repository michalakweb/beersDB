import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
    <div>        
          
        {   //showing a loading screen before the database loads
            props.database === '' && <p>Loading</p>
        }
        {   //once the database loads, each beer is shown as a separate component
            props.database !== '' && props.database.map(beer => <ListItem key={beer.id} database={beer}/>)
        }
    </div>
)


export default List;