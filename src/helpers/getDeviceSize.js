'use strict';

import React from 'react'

const Sizes = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3
};

const DeviceSizeComponent = WrapComponent =>
  class DeviceWidth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        deviceSize: Sizes.SMALL,
      };
    }

    static childContextTypes = {
      muiTheme: React.PropTypes.object,
    };

    getChildContext() {
      return {
        muiTheme: this.state.muiTheme,
      };
    }

    componentDidMount() {
      const updateDeviceSize = () => {
        var width = window.innerWidth;
        if (width >= 992) {
          this.setState({ deviceSize: Sizes.LARGE });
        } else if (width >= 768) {
          this.setState({ deviceSize: Sizes.MEDIUM });
        } else {
          this.setState({ deviceSize: Sizes.SMALL }); // width < 768
        }
      }

      updateDeviceSize();
      window.addEventListener('resize', updateDeviceSize);
      this.unbind = () => {
        window.removeEventListener('resize', updateDeviceSize)
      }
    }

    componentWillUnmount() {
      this.unbind()
    }

    render() {
      const {deviceSize} = this.state

      const isDeviceSize = desiredSize => {
        return deviceSize >= desiredSize;
      }

      return <WrapComponent deviceSize={deviceSize} isDeviceSize={isDeviceSize} />
    }
  };

DeviceSizeComponent.Sizes = Sizes

export default DeviceSizeComponent