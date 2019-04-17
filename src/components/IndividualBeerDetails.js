import React from 'react';

const noInfo = 'No information'

// destructuring beer data for some readability
// if information is not provided I still display it, so that the layout can be more uniformal
const IndividualBeerDetails = ({oneBeerData: {name, abv, ibu, isOrganic, status, glass}}) => (
    <div>
        <p>Name: {name ? name : noInfo}</p>
        <p>Abv: {abv ? abv : noInfo}</p>
        <p>Ibu: {ibu ? ibu : noInfo}</p>
        <p>IsOrganic: {isOrganic ? isOrganic : noInfo}</p>
        <p>Status: {status ? status : noInfo}</p>
        <p>Glass: {glass ? glass.name : noInfo}</p>
    </div>
)


export default IndividualBeerDetails;