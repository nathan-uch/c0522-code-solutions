import React from 'react';

class Dots extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <i className={`${this.props.class} fa-circle fa-2x`} onClick={this.handleClick}></i>
    );
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingId: 0
    };
    this.handleLeftChevronClick = this.handleLeftChevronClick.bind(this);
    this.handleRightChevronClick = this.handleRightChevronClick.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.skipTo = this.skipTo.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ displayingId: this.state.displayingId + 1 });
    }, 3000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({ displayingId: this.state.displayingId + 1 });
    }, 3000);
  }

  componentDidUpdate() {
    const lastId = this.props.images.length - 1;
    if (this.state.displayingId > lastId) {
      this.setState({ displayingId: 0 });
    }
  }

  handleRightChevronClick() {
    const lastId = this.props.images.length - 1;
    this.state.displayingId === lastId ? this.setState({ displayingId: 0 }) : this.setState({ displayingId: this.state.displayingId + 1 });
    this.resetInterval();
  }

  handleLeftChevronClick() {
    const lastId = this.props.images.length - 1;
    this.state.displayingId === 0 ? this.setState({ displayingId: lastId }) : this.setState({ displayingId: this.state.displayingId - 1 });
    this.resetInterval();
  }

  skipTo(index) {
    this.setState({ displayingId: index });
    this.resetInterval();
  }

  render() {
    const dots = this.props.images.map((image, index) =>
      <Dots key={index} index={index} displayingId={this.state.displayingId} class={index === this.state.displayingId ? 'fa-solid' : 'fa-regular'} onClick={this.skipTo} />
    );
    const allImages = this.props.images.map((image, index) =>
      <img key={index} src={image.url} className={`champion-img ${index === this.state.displayingId ? '' : 'hidden'}`} />
    );
    return (
      <div className="row carousel-container">
        <div className="main-container">
          <div className="col-left"><i className='fa-solid fa-chevron-left fa-2x' onClick={this.handleLeftChevronClick}></i></div>
          <div className="col-image">{allImages}</div>
          <div className="col-right"><i className="fa-solid fa-chevron-right fa-2x" onClick={this.handleRightChevronClick}></i></div>
        </div>
        <div className="dots-container">{dots}</div>
      </div>
    );
  }
}

export default Carousel;
