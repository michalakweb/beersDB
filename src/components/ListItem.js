import React from 'react';
import { Link } from "react-router-dom";

const ListItem = (props) => (
    <div>    
        <p>Name: {props.database.name}</p>
        <p>Abv: {props.database.abv ? props.database.abv : 'No information'}</p>
        <p>Ibu: {props.database.ibu ? props.database.ibu : 'No information'}</p>
        <Link to={{
            pathname: `/beer/${props.database.id}`,
            state: {
              oneBeerData: props.database
            }
          }}>Details
        </Link>
    </div>
)


export default ListItem;