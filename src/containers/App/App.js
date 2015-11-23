import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';
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
  state => ({user: state.auth.user}),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    navOpen: PropTypes.bool
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {navOpen: false};
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

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const styles = require('./App.scss');
    const navOpen = this.state.navOpen;

    const handleNavClick = () => {
      this.setState({navOpen: !this.state.navOpen});
    };

    const burgerIcon = (
      <div className={styles['burger' + (navOpen ? 'Open' : '')]} onClick={handleNavClick}>
        <span className={styles[navOpen ? 'barTopOpen' : 'barTop']} />
        <span className={styles[navOpen ? 'barMiddleOpen' : 'barMiddle']} />
        <span className={styles[navOpen ? 'barBottomOpen' : 'barBottom']} />
      </div>
    );

    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <header className={styles.navBar}>
          {burgerIcon}
          <nav className={styles['nav' + (navOpen ? 'Open' : '')]} >
            <ul className={styles.navList}>
              <li className={styles.navItem} onClick={handleNavClick}><IndexLink to="/" >Home</IndexLink></li>
              <li className={styles.navItem} onClick={handleNavClick}><Link to="/survey">Survey</Link></li>
              <li className={styles.navItem}><a href="#">Link 2</a></li>
              <li className={styles.navItem}><a href="#">Link 3</a></li>
              <li className={styles.navItem}><a href="#">Link 4</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles['pageWrap' + (navOpen ? 'Open' : '')]} onClick={navOpen ? handleNavClick : ''}>
          <div>
            {this.props.children}
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <span className="fa fa-facebook-square fa-2x" /><span className="fa fa-twitter-square fa-2x" /><span className="fa fa-linkedin-square fa-2x" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
