import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';

import Box from './Box';

class VerticalCenter extends PureComponent {
  state = {
    count: 0,
  }

  handleContainerRef = (ref) => {
    this.containerRef = ref;
  }

  handleResize = (contentRect) => {
    const { count, shouldCenter } = this.state;
    const shouldCenterNow = typeof this.containerRef !== 'undefined' && this.containerRef.getBoundingClientRect().height > contentRect.bounds.height;
    this.setState({
      count: count + Number(shouldCenter !== shouldCenterNow),
      shouldCenter: count > 4 ? shouldCenter : shouldCenterNow,
    });
  }

  render() {
    const {
      children,
      ...props
    } = this.props;
    const { shouldCenter } = this.state;
    return (
      <Box
        position="relative"
        height="100%"
        innerRef={this.handleContainerRef}
        {...props}
      >
        <Measure
          bounds
          onResize={this.handleResize}
        >
          {({ measureRef }) => (
            <Box
              position={shouldCenter && 'absolute'}
              top={shouldCenter ? '50%' : 0}
              width={1}
              transform={shouldCenter && 'translateY(-50%)'}
              innerRef={measureRef}
            >
              {children}
            </Box>
          )}
        </Measure>
      </Box>
    );
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.node,
};

export default VerticalCenter;
