import React from 'react';
import style from './style.css';
import logo from './assets/codemotion-logo.png';

const About = () => (
  <div className={style.main}>
    <div className={style.hero}>
      <img src={logo} alt="Codemotion Logo" width="357" height="50" />
      <h1>About Codemotion</h1>
      <p>
        Codemotion is the ecosystem devoted to innovation, focused on developers and coding, open to all programming languages and technologies. Pioneering spirits, we scout the future to deliver a first class experience to our people. We are one of the biggest tech-conferences in Europe, with an international network of 30.000 developers and 350 speakers coming from all over the world and from the most important IT realities. We draw in our main conferences thousands of attendees eager to discuss about hottest topics: we tailor for them disruptive proposals ranging from mobile to UX, devops, cloud, big data, gamedev, security, methods, languages, web, Internet of things. Codemotion is also a startup, providing a bunch of services and activities, for personal and business customers.
      </p>
    </div>
  </div>
);


export default About;
