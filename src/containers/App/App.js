import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar, Test, MaterialLeftNav } from 'components';
import { pushState } from 'redux-router';
import config from '../../config';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const themeDecorator = require('material-ui/lib/styles/theme-decorator');
const spTheme = require('../../theme/sptheme.js');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@themeDecorator(ThemeManager.getMuiTheme(spTheme))
@connect(
  state => ({user: state.auth.user, browser: state.browser, path: state.router.routes[1].path }),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    browser: PropTypes.object,
    path: PropTypes.string
  };

  static contextTypes = {
    history: PropTypes.object
  }

  static childContextTypes = {
    history: PropTypes.object,
    spTheme: PropTypes.object
  }

  getChildContext() {
    return {spTheme: spTheme};
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const styles = require('./App.scss');
    const {browser, path} = this.props;
    const message = `The viewport's current media type is: ${browser.mediaType}.`;
    const menuItems = [
      {text: 'Survey', value: '/survey'},
      {text: 'Widgets', value: '/widgets'},
      {text: 'Home', value: '/'}
    ];

    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <div className={styles.appContent}>
          <MaterialLeftNav menuItems={menuItems} browser={browser} path={path} />
          <p>
            {message}
          </p>
          {this.props.children}
        </div>
        <Test/>
        <InfoBar/>

        <div className="well text-center">
          Have questions? Ask for help <a
          href="https://github.com/erikras/react-redux-universal-hot-example/issues"
          target="_blank">on Github</a> or in the <a
          href="https://discordapp.com/channels/102860784329052160/105739309289623552" target="_blank">#react-redux-universal</a> Discord channel.
        </div>
      </div>
    );
  }
}
