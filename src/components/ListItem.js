import React from 'react';
import { Link } from "react-router-dom";

const ListItem = (props) => (
    <div>    
        <p>Name: {props.database.name}</p>
        <p>Abv: {props.database.abv ? props.database.abv : 'Information not available'}</p>
        <p>Ibu: {props.database.ibu ? props.database.ibu : 'Information not available'}</p>
        <Link to={`/beer/${props.database.id}`}>Details</Link>
    </div>
)


export default ListItem;