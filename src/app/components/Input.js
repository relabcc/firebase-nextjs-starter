import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  themeGet,
  textAlign,
} from 'styled-system';

import Flex from './Flex';
import Box from './Box';
import Text from './Text';

const TextInput = styled.input`
  font-family: inherit;
  width: 100%;
  padding: 0;
  border: none;
  border-bottom: 1px solid ${themeGet('colors.gray')};
  line-height: 1;
  border-radius: 0;
  font-weight: bold;
  font-size: 1.5em;
  ${textAlign}
  &::placeholder {
    color: ${themeGet('colors.gray')};
  }
`;

const Input = ({
  label,
  labelWidth,
  name,
  placeholder,
  disabled,
  value,
  onChange,
  onBlur,
  error,
  type,
  min,
  max,
  textAlign,
  step,
  ...props
}) => (
  <Flex is="label" {...props}>
    {label && (
      <Box mr="1em" w={labelWidth}>
        <Text fontWeight="bold">{label}</Text>
      </Box>
    )}
    <Box flex="1">
      {createElement(TextInput, {
        name,
        placeholder,
        disabled,
        value,
        onChange,
        onBlur,
        type,
        min,
        max,
        textAlign,
        step,
      })}
      {error && (
        <Text fontSize="0.8em" align="left" color="red" mt="0.25rem">{error}</Text>
      )}
    </Box>
  </Flex>
);

Input.propTypes = {
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
