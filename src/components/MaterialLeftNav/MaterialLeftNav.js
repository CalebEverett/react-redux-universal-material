/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class MaterialLeftNav extends Component {
  static propTypes = {
    browser: PropTypes.object,
    path: PropTypes.string,
    menuItems: PropTypes.array
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
    spTheme: PropTypes.object
  }

  _handleLeftNavChange(i) {
    console.log(this.props);
    const {history} = this.context;
    history.pushState(null, this.props.menuItems[i].value);
  }

  _toggleLeftNav() {
    this.refs.leftNav.toggle();
  }

  render() {
    const styles = require('./MaterialLeftNav.scss');
    const path = (!this.props.path) ? 'Home' : this.props.path;

    return (
      <div className={styles}>
        <AppBar
          title={path}
          onLeftIconButtonTouchTap={::this._toggleLeftNav}
        />
        <LeftNav ref="leftNav" docked={false} >
          {this.props.menuItems.map( (menuitem, i) => {
            return ( <MenuItem key={i} index={i} primaryText={menuitem.text} value={menuitem.value} onTouchTap={::this._handleLeftNavChange.bind(this, i)}/>
              );
          }, this) };
        </LeftNav>
      </div>
    );
  }
}
