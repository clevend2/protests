import React from "react";

import ProtesterList from "./ProtesterList"
/*
The main Protest component - meant to show the type and participants in a protest

TODO: separate the header portion into new component
TODO: do something with the chants!
*/
export default class extends React.Component {
    // props = {
    //  location: ??
    //  time: ??
    //  cause: ??,
    //  chants: [??]
    // }
    constructor ({ title, description, location, img, time, cause, chants }) {
        this.state = {
          title: title,
          img: img,
          description: description,
          location: location,
          time: time,
          cause: cause,
          chants: chants || []
        };
    } 
    
    render() {
      return (
        <div className="protest">
          <div className="protest-header card mb-3">
            <img src={this.state.img} className="card-img-top" alt={this.state.title} />
            <div className="card-body">
              <h5 className="card-title">{this.state.title}</h5>
              <p className="card-text">{this.state.description}</p>
            </div>
            <div className="card-footer text-muted">
              {this.state.time}
            </div>
          </div>
          <ProtesterList />
        </div>
      )
    }
  }