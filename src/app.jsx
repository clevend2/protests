import React from "react";
import ReactDOM from 'react-dom';

/**
 * TODO: provide the protest data from a server
 * TODO: add an admin panel to insert new events
 * TODO: add an admin panel to update or cancel events
 * TODO: add user login flow w/ google to allow protesters to register for event
 * 
 * ? Protester / event relation
 * TODO: add user admin panel to review registered events
 * TODO: force login w/ google
 * 
 * ? V2: social features
 * TODO: add user comments on events
 * TODO: send email notification when an event is coming up
 * - NTH: allow user to set notification a la google calendar: "X weeks before", "X hours before" etc 
 * TODO: add inter-user messaging
 * TODO: add "event admin" access levels
 * TODO: add "message admin" button to event UI
 * TODO: add elevated permissions to allow event admins to promote other users to admin
 * - NTH: if email system is implemented, send a notification email to the promoted user
 * TODO: add ability for users to invite to an event via email
 * 
 * ? V3: "time to go mobile" - Bane
 * TODO: use React Native to implement our protest app on phones
 * TODO: in addition to email notifications, add push notifications for those who have installed the app
 */


/*
The main Protest component - meant to show the type and participants in a protest

TODO: separate the header portion into new component
TODO: do something with the chants!
*/
class Protest extends React.Component {
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

/*
A component to list all the protesters for a protest
*/
class ProtesterList extends React.Component {
  constructor () {
    this.state = {
      protesters: []
    };
  }

  componentDidMount () {
    const newProtesters = [
      {
        name: "Danny",
        age: 13,
        img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/60346136_427420297822919_1229398289279877120_n.jpg?_nc_cat=109&_nc_oc=AQkuLd2j5SqHiz3wrBBHrhVEP17Es_Jaf-iDR7D_a8d7uxNJZ0D3YbGv3MreqFWSBI8&_nc_ht=scontent-sea1-1.xx&oh=c9fa9d89ed603d48e16438a6f6d46ead&oe=5DC8AFA4"
      },
      {
        name: "Charis",
        age: 99,
        img: "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/26173396_10215357494361291_6666146547422723486_o.jpg?_nc_cat=108&_nc_oc=AQkhn3LJ4XJDpFzCMibM5IXmpT4_axXUF21udlHFZqN3dheQ9bakFSASO6e19Yke9EKrXZfXhcXcwwmXw8JuhpKF&_nc_ht=scontent-sea1-1.xx&oh=819528e1e81e5e85b389a1b795b76534&oe=5DE18122"
      },
      {
        name: "George",
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

/*
A component to represent a single protester in a protest
TODO: input some chants and modify the yell function to recite one of the chants!
*/
class Protester extends React.Component {
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

ReactDOM.render(
  <Protest />,
  document.getElementById('root')
);