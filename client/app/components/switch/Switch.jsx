import React from 'react';

export class Switch extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (

      <label className="switch">
        <input type="checkbox" />
        <div className="checkbox"></div>
      </label>

    );
  }
}
