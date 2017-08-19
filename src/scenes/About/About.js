import React from 'react';

const About = () =>
  <div className='content'>
    <center>
        <h1 className="section">{'[ About Nathan ]'}</h1>
    </center>
    <p>
        {'Nathan typifies the perpetually quizzical human being who experiences everything with wide-eyed novelty.'}
    </p>
    <p>
        {'Currently employed at Braxton Technologies LLC, Nathan is excited about doing his part in keeping the world safe.'}
    </p>
    <p>
        <i className="fa fa-envelope-o" aria-hidden="true"/>
        <a href="mailto:email@email.com">{'email@email.com'}</a>
        <br/>
        <i className="fa fa-instagram" aria-hidden="true"/>
        <a href="https://instagram.com/mrnathancarlson">mrnathancarlson</a>
        <br/>
        <i className="fa fa-twitter" aria-hidden="true"/>
        <a href="https://twitter.com/mrnathancarlson">mrnathancarlson</a>
        <br/>
        <i className="fa fa-github" aria-hidden="true"/>
        <a href="https://github.com/nscarlson">nscarlson</a>
    </p>
  </div>

export default About;
