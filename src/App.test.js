import React from "react";
import {render, fireEvent, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';

import App from './App';

jest.mock("./api/fetchShow");
console.log(mockFetchShow);

test("App fetches Shows data and render data", ()=>{
//  mockFetchShows
const mockData = {
    data: {
      name: 'rabah',
      image: { original: '/original' },
      summary: '<p>A love letter<p>',
      _embedded: {
        episodes: [
          {
            id: 101,
            name: 'chapter 11',
            runtime: 100,
            season: 100,
            number: 11,
            image: { medium: '' },
            summary: '<p>just watch it</p>',
          },
        ],
      },
    },
  };
  
  mockFetchShow.mockResolvedValueOnce(mockData);

//   const {getByText, queryAllByText} = 
  render(<App />);
//   const button = getByText(/get data/i);
//   fireEvent.click(button);
//   getByText(/we are fetching data/i);
//   await waitFor(()=> {
//     expect(queryAllByText(/mission one/i)).toHaveLength(1);
//   });
})