import React from 'react';
import styled, { css } from 'styled-components';
import {
  themeGet,
  fontSize,
  space,
  color,
  width,
  borders,
  borderColor,
  borderRadius,
  letterSpacing,
  fontWeight,
  position,
  display,
} from 'styled-system';
import tag from 'clean-tag';

import Box from './Box';

import { customColor } from './utils/getColor';
import blacklist from './utils/blacklist';

const active = css`
  ${customColor('hoverColor')};
  ${customColor('hoverBg', 'backgroundColor')};
  ${customColor('hoverBorder', 'borderColor')};
`;

export const buttonStyle = css`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  ${display}
  ${fontSize}
  ${position}
  ${space}
  ${color}
  ${width}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${letterSpacing}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover,
  &:focus {
    ${(props) => !props.disabled && active}
    outline: none;
  }
  ${(props) => props.active && !props.disabled && active}
  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const ButtonBase = styled(tag)`
  ${buttonStyle}
`;

const InButtonSpan = (props) => (
  <Box
    is="span"
    {...props}
  />
);

const Button = ({
  leftIcon,
  rightIcon,
  iconSpacing,
  children,
  verticalAlign,
  ...props
}) => (
  <ButtonBase {...props}>
    {leftIcon ? <InButtonSpan mr={iconSpacing}>{leftIcon()}</InButtonSpan> : null}
    <InButtonSpan verticalAlign={verticalAlign}>{children}</InButtonSpan>
    {rightIcon ? <InButtonSpan ml={iconSpacing}>{rightIcon()}</InButtonSpan> : null}
  </ButtonBase>
);

Button.defaultProps = {
  blacklist,
  is: 'button',
  fontSize: '1.25em',
  border: '2px solid',
  borderColor: 'primary',
  bg: 'primary',
  color: 'white',
  hoverColor: 'primary',
  hoverBg: 'white',
  px: '2.5em',
  py: '0.75em',
  fontWeight: 'bold',
  iconSpacing: '0.25em',
  borderRadius: '0.25em',
  display: 'inline-block',
  verticalAlign: 'text-top',
};

Button.secondary = (props) => (
  <Button
    bg="secondary"
    borderColor="secondary"
    hoverColor="secondary"
    {...props}
  />
);

Button.transparent = (props) => (
  <Button
    border="1px solid transparent"
    bg="transparent"
    color="text"
    hoverBorder="primary"
    {...props}
  />
);

export default Button;
