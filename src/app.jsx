import React from "react";
import ReactDOM from 'react-dom';

// components
import Protest from './components/Protest';

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

ReactDOM.render(
  <Protest />,
  document.getElementById('root')
);