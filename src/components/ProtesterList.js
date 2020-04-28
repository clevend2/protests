import React from "react";

import Protester from "./Protester"
/*
A component to list all the protesters for a protest
*/
export default class extends React.Component {
    constructor () {
      this.state = {
        protesters: []
      };
    }
  
    componentDidMount () {
      const newProtesters = [
        {
          name: "Roberta",
          age: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Roberta_Flack43.JPG/1200px-Roberta_Flack43.JPG"
        },
        {
          name: "Bob",
          age: 99,
          img: "https://i0.wp.com/media.boingboing.net/wp-content/uploads/2015/10/lovable.jpg?fit=1200%2C675"
        },
        {
          name: "Robert",
          age: 7,
          img: "https://www.hellomagazine.com/imagenes/fashion/royal-style/2018090461907/prince-george-school-uniform-revealed-back-to-school-royal-news/0-293-835/prince-george-school-official-t.jpg"
        },
      ];
  
      this.setState({
        protesters: newProtesters 
      })
    }
  
    render() {
      <div className="card-group">
        {
          this.state.protesters.map(protester => 
              <Protester name={protester.name} age={protester.age} picture={protester.picture} />
          )
        }
      </div>
    }
  }