// import react components
import React from "react";

// retrieve functions 'render' and 'cleanup' from react testing library
import { render, cleanup } from '@testing-library/react';

// import the extend-expect library from the jest-dom package.
import '@testing-library/jest-dom/extend-expect';

// import the component we will be testing
import About from '..';

// call the cleanup function using the afterEach global function from Jest
afterEach(cleanup);

// function to declare the component we're testing
// 'About componenet' declares which component is being tested 
describe('About component', () => {
    // renders about test,
    // first test called 'renders'
    it('renders', () => {
        //  render the About component using JSX
        render(<About />);
    });
    // second test
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    })
})