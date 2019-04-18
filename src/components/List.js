import React from 'react';
import ListItem from './ListItem';
import Loading from './Loading';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const List = (props) => (
    <div>        
          
        {   //showing a loading screen before the database loads
            props.database === '' && <Loading/>
        }
        <ListGroup className='my-3'>
        {   //once the database loads, each beer is shown as a separate component
            props.database !== '' && 
            props.database.map(beer => 
                <ListGroupItem key={beer.id}>
                    <ListItem key={beer.id} database={beer}/>
                </ListGroupItem>)
        }
        </ListGroup>
        
    </div>
)


export default List;