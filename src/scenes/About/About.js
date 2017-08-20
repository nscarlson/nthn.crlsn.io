import React, { Component } from 'react'

class About extends Component {
  static displayName = 'About'

  render = () =>
    <div className="content">
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
        <i aria-hidden="true" className="fa fa-envelope-o" />
        <a href="mailto:email@email.com">{'email@email.com'}</a>
        <br />
        <i aria-hidden="true" className="fa fa-instagram" />
        <a href="https://instagram.com/mrnathancarlson">mrnathancarlson</a>
        <br />
        <i aria-hidden="true" className="fa fa-twitter" />
        <a href="https://twitter.com/mrnathancarlson">mrnathancarlson</a>
        <br />
        <i aria-hidden="true" className="fa fa-github" />
        <a href="https://github.com/nscarlson">nscarlson</a>
      </p>
    </div>
}

export default About
