import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import BeerData from './BeerData';

// Components
import Navigation from '../components/Navigation';
import Loading from '../components/Loading';
import List from '../components/List';
import ListItem from '../components/ListItem';
import IndividualBeer from '../components/IndividualBeer';
import IndividualBeerDetails from '../components/IndividualBeerDetails';


it('Navigation renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation/>, div);
});

it('Loading renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading/>, div);
});

// List gets an object for mock props
it('List renders without crashing', () => {
    const div = document.createElement('div');
    const jsx = (
        <BrowserRouter>
            <List database={BeerData}/>
        </BrowserRouter>
    );
    ReactDOM.render(jsx, div);
});

it('ListItem renders without crashing', () => {
    const jsx = (
        <BrowserRouter>
            <ListItem database={BeerData[0]}/>
        </BrowserRouter>
    );
    const div = document.createElement('div');
    ReactDOM.render(jsx, div);
});

//(passing location object to bypass a Router-caused error)
const location = { state: {
    oneBeerData: `'Murican Pilsner`
} };

it('IndividualBeer renders without crashing', () => {
    const jsx = (
        <BrowserRouter>
            <IndividualBeer location={location}/>
        </BrowserRouter>
    );
    const div = document.createElement('div');
    ReactDOM.render(jsx, div);
});



