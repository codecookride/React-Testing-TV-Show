import React from "react";
import Episodes from "./Episodes"
import {render} from "@testing-library/react";

test('Episodes renders correctly', ()=>{
    render(<Episodes episodes={[]}/>);

});

test('Episodes renders correctly and valid', ()=>{
    const mockData= [{id:"id1", name:"name1", image:"image1"}];
    const {queryAllByText, rerender} = render(<Episodes episodes={[]}/>);

    let allEpisodes = queryAllByText(/episode/i);

    expect (allEpisodes).toHaveLength(0);

    rerender(<Episodes episodes={mockData}/>);
    allEpisodes= queryAllByText(/episode/i);
    expect(allEpisodes).toHaveLength(1);
});


