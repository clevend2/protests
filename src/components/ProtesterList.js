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