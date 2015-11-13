import React, { Component, PropTypes } from 'react';
import { ClearFix, Mixins, Styles } from 'material-ui';
const { StylePropable } = Mixins;
import deviceSizeComponent from '../../helpers/getDeviceSize';
const DesktopGutter = Styles.Spacing.desktopGutter;

const getStyles = () => {
  return {
    root: {
      padding: DesktopGutter,
      boxSizing: 'border-box',
    },
    content: {
      maxWidth: 1200,
      margin: '0 auto',
    },
    rootWhenSmall: {
      paddingTop: (DesktopGutter * 2),
      paddingBottom: (DesktopGutter * 2),
    },
    rootWhenLarge: {
      paddingTop: (DesktopGutter * 3),
      paddingBottom: (DesktopGutter * 3),
    },
  };
};

@deviceSizeComponent
export default class FullWidthSection extends Component {
  static propTypes = {
    useContent: PropTypes.bool,
    contentType: PropTypes.string,
    contentStyle: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.object,
  }

  static getDefaultProps = {
    useContent: true,
    contentType: 'div'
  }

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

    const ContentType = contentType;
    const content =
      useContent
      ? (
        <ContentType style={mergeAndPrefix(styles.content, contentStyle)}>
          {this.props.children}
        </ContentType>
      ) : this.props.children;

    console.log(content);
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
