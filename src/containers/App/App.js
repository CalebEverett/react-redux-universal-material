import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';
import { AppBar,
      AppCanvas,
      IconButton,
      EnhancedButton,
      Mixins,
      Styles,
      Tab,
      Tabs,
      Paper} from 'material-ui';
import { FullWidthSection } from 'components';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import spTheme from '../../theme/sptheme.js';
const { StylePropable } = Mixins;
const { Colors, Spacing, Typography } = Styles;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function fetchData(getState, dispatch) {
  const promises = [];
  if (!isInfoLoaded(getState())) {
    promises.push(dispatch(loadInfo()));
  }
  if (!isAuthLoaded(getState())) {
    promises.push(dispatch(loadAuth()));
  }
  return Promise.all(promises);
}

@connectData(fetchData)
@connect(
  state => ({user: state.auth.user }), {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  constructor() {
    super();
    const muiTheme = ThemeManager.getMuiTheme(spTheme);
    this.state = {muiTheme};
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentDidMount() {
    const newMuiTheme = this.state.muiTheme;
    newMuiTheme.inkBar.backgroundColor = Colors.yellow200;
    this.setState({
      muiTheme: newMuiTheme,
      tabIndex: this._getSelectedIndex()});
    const setTabsState = () => {
      this.setState({renderTabs: !(global.document.body.clientWidth <= 647)});
    };
    setTabsState();
    window.onresize = setTabsState;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      tabIndex: this._getSelectedIndex(),
      muiTheme: newMuiTheme,
    });
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  getStyles() {
    const darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 335,
      },
      github: {
        position: 'fixed',
        right: Spacing.desktopGutter / 2,
        top: 8,
        zIndex: 5,
        color: 'white',
      },
      iconButton: {
        color: darkWhite,
      },
    };
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    return this.props.history.isActive('/home') ? '1' :
      this.props.history.isActive('/survey') ? '2' :
      this.props.history.isActive('/widgets') ? '3' : '0';
  }

  _getAppBar() {
    const title =
      this.props.history.isActive('/home') ? 'Home' :
      this.props.history.isActive('/survey') ? 'Survey' :
      this.props.history.isActive('/widgets') ? 'Widgets' : '';

    const githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/callemall/material-ui"
        linkButton />
    );

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}
          style={{position: 'absolute', top: 0}}/>
      </div>
    );
  }

  _getTabs() {
    const prepareStyles = StylePropable.prepareStyles.bind(this);
    const styles = {
      root: {
        backgroundColor: Colors.cyan500,
        position: 'fixed',
        height: 64,
        top: 0,
        right: 0,
        zIndex: 4,
        width: '100%',
      },
      container: {
        position: 'absolute',
        right: (Spacing.desktopGutter / 2) + 48,
        bottom: 0,
      },
      span: {
        color: Colors.white,
        fontWeight: Typography.fontWeightLight,
        left: 45,
        top: 22,
        position: 'absolute',
        fontSize: 26,
      },
      svgLogoContainer: {
        position: 'fixed',
        width: 300,
        left: Spacing.desktopGutter,
      },
      svgLogo: {
        width: 65,
        backgroundColor: Colors.cyan500,
        position: 'absolute',
        top: 20,
      },
      tabs: {
        width: 425,
        bottom: 0,
      },
      tab: {
        height: 64,
      },
    };

    const materialIcon = this.state.tabIndex !== '0' ? (
      <EnhancedButton
        style={styles.svgLogoContainer}
        linkButton
        href="/#/home">
        <img style={prepareStyles(styles.svgLogo)} src="images/material-ui-logo.svg"/>
        <span style={prepareStyles(styles.span)}>material ui</span>
      </EnhancedButton>) : null;

    const handleTabChange = (value, e, tab) => {
      this.props.history.pushState(null, tab.props.route);
      this.setState({tabIndex: this._getSelectedIndex()});
    };

    return (
      <div>
        <Paper
          zDepth={0}
          rounded={false}
          style={styles.root}>
          {materialIcon}
          <div style={prepareStyles(styles.container)}>
            <Tabs
              style={styles.tabs}
              value={this.state.tabIndex}
              onChange={handleTabChange}>
              <Tab
                value="1"
                label="HOME"
                style={styles.tab}
                route="/" />
              <Tab
                value="2"
                label="SURVEY"
                style={styles.tab}
                route="/survey"/>
              <Tab
                value="3"
                label="WIDGETS"
                style={styles.tab}
                route="/widgets"/>
            </Tabs>
          </div>
        </Paper>
      </div>
    );
  }

  render() {
    const styles = this.getStyles();
    const prepareStyles = StylePropable.prepareStyles.bind(this);
    return (
      <div>
        <DocumentMeta {...config.app}/>
        <AppCanvas>
          {this.state.renderTabs ? this._getTabs() : this._getAppBar()}

          {this.props.children}
          <FullWidthSection style={styles.footer} >
            <p style={prepareStyles(styles.p)}>
              Hand crafted with love by the engineers at <a style={styles.a} href="http://call-em-all.com">Call-Em-All</a> and our
              awesome <a style={prepareStyles(styles.a)} href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a>.
            </p>
          </FullWidthSection>
        </AppCanvas>
      </div>
    );
  }
}
