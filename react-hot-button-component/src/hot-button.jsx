import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.wasClicked = this.wasClicked.bind(this);
  }

  wasClicked() {
    const newCount = this.state.clicks + 1;
    this.setState({ clicks: newCount });
  }

  render() {
    if (this.state.clicks >= 0 && this.state.clicks < 4) {
      return (
        <button className='cold' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 4 && this.state.clicks < 7) {
      return (
        <button className='cool' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 7 && this.state.clicks < 10) {
      return (
        <button className='warm' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 10 && this.state.clicks < 13) {
      return (
        <button className='hot' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 13 && this.state.clicks < 16) {
      return (
        <button className='burning' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 16 && this.state.clicks < 19) {
      return (
        <button className='supernova' onClick={this.wasClicked}>Hot Button</button>
      );
    } else if (this.state.clicks >= 19) {
      return (
        <button className='toast'>Hot Button</button>
      );
    }
  }
}

export default HotButton;
