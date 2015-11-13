/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Avatar from 'material-ui/lib/avatar';
import AppCanvas from 'material-ui/lib/app-canvas';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const themeDecorator = require('material-ui/lib/styles/theme-decorator');
const spTheme = require('../../theme/sptheme.js');

@themeDecorator(ThemeManager.getMuiTheme(spTheme))
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

  getInLineStyles() {
    const {palette} = this.context.spTheme;
    const inLineStyles = {
      navHeader: {
        backgroundColor: palette.primary3Color,
        paddingLeft: 16,
        height: 170,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      },
      avatar: {
        marginBottom: 16
      }
    };
    return inLineStyles;
  }

  _handleLeftNavChange(i) {
    const {history} = this.context;
    history.pushState(null, this.props.menuItems[i].value);
    this.refs.leftNavChildren.toggle();
  }

  render() {
    const inLineStyles = this.getInLineStyles();
    const path = (!this.props.path) ? 'Home' : (this.props.path.substr(0, 1).toUpperCase() + this.props.path.slice(1));
    const navHeaderImage = require('./niko-250.png');
    const navHeader = (
      <Paper style={inLineStyles.navHeader} zDepth={0}>
        <Avatar src={navHeaderImage} size={100} style={inLineStyles.avatar} />
        <div>Niko Everett</div>
        <a href="mailto:niko@nikoeverett.com">niko@nikoeverett.com</a>
      </Paper>
    );

    const toggleLeftNav = () => {
      this.refs.leftNavChildren.toggle();
    }

    return (
      <div>
        <AppCanvas style={inLineStyles.none}>
          <AppBar title={path} onLeftIconButtonTouchTap={toggleLeftNav} />
        </AppCanvas>
        <LeftNav ref="leftNavChildren" docked={false} header={navHeader}>
          {this.props.menuItems.map( (menuitem, i) => {
            return ( <MenuItem key={i} index={i} primaryText={menuitem.text} value={menuitem.value} onTouchTap={::this._handleLeftNavChange.bind(this, i)}/>
              );
          }, this) }
        </LeftNav>
      </div>
    );
  }
}
