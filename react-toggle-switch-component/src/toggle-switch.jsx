import React from 'react';

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.toggleOff = this.toggleOff.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
  }

  toggleOn() {
    this.setState({ isOn: true });
  }

  toggleOff() {
    this.setState({ isOn: false });
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className='toggle-container'>
          <div className='toggle-background-on'>
            <button id='switch-on' onClick={this.toggleOff}></button>
          </div>
          <label htmlFor='switch-on' className='toggle-display'>ON</label>
        </div>
      );
    } else {
      return (
        <div className='toggle-container'>
          <div className='toggle-background-off'>
            <button id='switch-off' onClick={this.toggleOn}></button>
          </div>
          <label htmlFor='switch-off' className='toggle-display'>OFF</label>
        </div>
      );
    }
  }
}

export default ToggleComponent;
