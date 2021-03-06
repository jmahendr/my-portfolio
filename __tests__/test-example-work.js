import React from "react";
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from "../js/example-work";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter});

const myWork = [
  {
    'title':"Serverless Portfolio",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title':"Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  }
];


describe("ExampleWork Component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a section element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});


describe("ExampleWorkBubble Component", () => {
  let component = shallow(<ExampleWorkBubble data={myWork[1]}/>);
  let images = component.find("img");

  it("Should contain a single img element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  })
});
