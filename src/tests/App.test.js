import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import App from '../components/App'

// App rendering (passing location object to bypass a Router-caused error)
const location = { state: {
    oneBeerData: `'Murican Pilsner`
} };

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App location={location}/>, div);
});

// 

it('App renders the nav component that contains Beer DB text', () => {
    const { getByText } = render(<App location={location}/>);
    expect(getByText('Beer DB')).toBeTruthy();
});