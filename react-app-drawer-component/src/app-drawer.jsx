import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuIsOpened: false };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.blurOnOff = this.blurOnOff.bind(this);
  }

  openMenu() {
    this.setState({ menuIsOpened: true });
  }

  closeMenu() {
    this.setState({ menuIsOpened: false });
  }

  hideOrShow() {
    if (this.state.menuIsOpened) {
      return '';
    } else {
      return 'hidden';
    }
  }

  blurOnOff() {
    if (this.state.menuIsOpened) {
      return 'on';
    } else {
      return '';
    }
  }

  render() {
    const displayType = this.hideOrShow();
    const blurType = this.blurOnOff();
    return (
      <div className='trunk'>
        <div className={`row menu-container ${displayType}`}>
          <div className='col-menu'>
            <h2>Menu</h2>
            <a href="#" className='menu-link' onClick={this.closeMenu}>About</a>
            <a href="#" className='menu-link' onClick={this.closeMenu}>Get Started</a>
            <a href="#" className='menu-link' onClick={this.closeMenu}>Sign In</a>
          </div>
        </div>
        <div className={`blur ${blurType}`} onClick={this.closeMenu} />
        <div className='background-page'>
          <div className='menu-btn'>
            <i className='fa-solid fa-bars fa-3x' onClick={this.openMenu}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
