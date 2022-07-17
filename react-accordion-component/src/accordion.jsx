import React from 'react';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkCollapse = this.checkCollapse.bind(this);
  }

  checkCollapse() {
    if (this.props.title === this.props.open) {
      return '';
    } else {
      return 'collapsed';
    }
  }

  handleClick() {
    this.props.updateState(this.props.title);
  }

  render() {
    const collapse = this.checkCollapse();
    return (
      <div className="topic-container">
        <button onClick={this.handleClick} >{this.props.title}</button>
        <div className={`text-container ${collapse}`}>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class AllTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTitle: ''
    };
    this.updatePrev = this.updatePrev.bind(this);
  }

  updatePrev(title) {
    if (this.state.openTitle !== title) {
      this.setState({ openTitle: title });
    } else {
      this.setState({ openTitle: '' });
    }
  }

  render() {
    const open = this.state.openTitle;
    const topics = this.props.topics.map(topic =>
      <Topic title={topic.title} text={topic.text} key={topic.title} updateState={this.updatePrev} open={open} />
    );
    return (
      <div>{topics}</div>
    );
  }
}

export default AllTopics;
