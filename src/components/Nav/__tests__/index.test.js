import React from "react";
import { render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render(<Nav />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();

    });
  })

  describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
        //   arrange
        const { getByLabelText } = render(<Nav />);
        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })

  // verify that the text content is being inserted into the <a> tags 
  // describe('links are visible', () => {
  //   it('inserts text into the links', () => {
  //     const { getByTestId } = render(<Nav />);
  //     // Arrange
      
  //     // Assert
  //   });
  // })