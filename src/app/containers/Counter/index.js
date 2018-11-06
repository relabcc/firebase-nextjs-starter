import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';

import withCounter from './hoc';

const Counter = ({ count, increment, decrement, ...props }) => (
  <Flex alignItems="center" my="1em" {...props}>
    <Button onClick={decrement}>-</Button>
    <Box px="1em">
      <Text color="primary" f="2em">{count}</Text>
    </Box>
    <Button onClick={increment}>+</Button>
  </Flex>
);

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default withCounter(Counter);
