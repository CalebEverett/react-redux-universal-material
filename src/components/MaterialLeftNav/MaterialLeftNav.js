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
    console.log(this.props.menuItems[i].value);
    const {history} = this.context;
    history.pushState(null, this.props.menuItems[i].value);
    this.refs.leftNavChildren.toggle();
  }

  _toggleLeftNav() {
    console.log(this.props);
    this.refs.leftNavChildren.toggle();
  }

  render() {
    const styles = require('./MaterialLeftNav.scss');
    const path = (!this.props.path) ? 'Home' : this.props.path;
    const navHeaderImage = require('./niko-250.png');
    const palette = this.context.spTheme;
    const navHeader = (
      <div className={styles.navHeader} color={palette.accent2Color}>
        <img src={navHeaderImage}/>
      </div>
      );

    return (
      <div>
        <AppBar className={styles.AppBar}
          title={path}
          onLeftIconButtonTouchTap={::this._toggleLeftNav}
        />
        <LeftNav ref="leftNavChildren" docked header={navHeader}>
          {this.props.menuItems.map( (menuitem, i) => {
            return ( <MenuItem key={i} index={i} primaryText={menuitem.text} value={menuitem.value} onTouchTap={::this._handleLeftNavChange.bind(this, i)}/>
              );
          }, this) }
        </LeftNav>
      </div>
    );
  }
}
