import React from "react";

/*
A component to represent a single protester in a protest
TODO: input some chants and modify the yell function to recite one of the chants!
*/
export default class extends React.Component {
    constructor ({ name, age, picture }) {
      this.state = {
        name: name,
        age: age,
        img: picture,
        indignation: 9000
      };
    }
    
    yell() {
      alert(`My name is ${this.state.name} and I'm ${this.state.age} years old and I'm protesting!`)
    }
    
    render() {
      <div className="card">
        <img src={this.state.img} className="card-img-top" alt={this.state.name} />
        <div className="card-body">
          <h5 className="card-title">{this.state.name}</h5>
          <p className="card-text">{this.state.age}</p>
          <p className="card-text">
            <small className="text-muted">
              { 
                this.state.indignation > 9000 
                ? <strong>{this.state.indignation}</strong>
                : this.state.indignation
              }
            </small>
          </p>
        </div>
      </div>
    }
  }