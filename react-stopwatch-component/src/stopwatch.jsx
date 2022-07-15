import React from 'react';

class StopwatchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 0,
      isTicking: false
    };
    this.tick = this.tick.bind(this);
    this.clearTime = this.clearTime.bind(this);
  }

  tick() {
    if (!this.state.isTicking) {
      this.setState({ isTicking: true });
      this.interval = setInterval(
        () => {
          this.setState({ ticks: this.state.ticks + 1 });
        }, 1000);
    } else {
      this.setState({ isTicking: false });
      clearInterval(this.interval);
    }
  }

  pauseOrPlay() {
    if (this.state.isTicking) {
      return 'fa-pause';
    } else {
      return 'fa-play';
    }
  }

  clearTime() {
    if (!this.state.isTicking) {
      this.setState({ ticks: 0 });
    }
  }

  render() {
    return (
      <div className='watch-container'>
        <button className='watch-display' onClick={this.clearTime}>{this.state.ticks}</button>
        <button className='watch-btn'><i className={`fa-solid ${this.pauseOrPlay()} fa-2x`} onClick={this.tick}></i></button>
      </div>
    );
  }
}

export default StopwatchComponent;
