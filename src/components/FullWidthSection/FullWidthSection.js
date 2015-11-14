import React, { Component, PropTypes } from 'react';
import { ClearFix, Mixins, Styles } from 'material-ui';
const { StylePropable } = Mixins;
import deviceSizeComponent from '../../helpers/getDeviceSize';
const DesktopGutter = Styles.Spacing.desktopGutter;

const getStyles = () => {
  return {
    root: {
      padding: DesktopGutter + 'px',
      boxSizing: 'border-box',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    rootWhenSmall: {
      paddingTop: (DesktopGutter * 2) + 'px',
      paddingBottom: (DesktopGutter * 2) + 'px',
    },
    rootWhenLarge: {
      paddingTop: (DesktopGutter * 3) + 'px',
      paddingBottom: (DesktopGutter * 3) + 'px',
    },
  };
};

@deviceSizeComponent
export default class FullWidthSection extends Component {
  static propTypes = {
    useContent: PropTypes.bool,
    contentType: PropTypes.string,
    contentStyle: PropTypes.object,
    isDeviceSize: PropTypes.func
  };

  static defaultProps = {
    useContent: false,
    contentType: 'div'
  };

  render() {
    const {
      style,
      useContent,
      contentType,
      contentStyle,
      isDeviceSize,
      ...other,
    } = this.props;

    const styles = getStyles();
    const mergeAndPrefix = StylePropable.mergeAndPrefix.bind(this);

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          {style: this.mergeAndPrefix(styles.content, contentStyle)},
          this.props.children
        );
    } else {
      content = this.props.children;
    }

    console.log();

    return (
      <ClearFix {...other}
        style={mergeAndPrefix(
          styles.root,
          style,
          isDeviceSize(deviceSizeComponent.Sizes.SMALL) && styles.rootWhenSmall,
          isDeviceSize(deviceSizeComponent.Sizes.LARGE) && styles.rootWhenLarge)}>
        {content}
      </ClearFix>
    );
  }
}
