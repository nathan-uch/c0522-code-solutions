import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
      <button> Thanks! </button>
      );
    } else {
      return (
        <button onClick={this.handleClick}> Click Me! </button>
      );
    }
  }
}

const element = (
  <CustomButton />
);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(element);
