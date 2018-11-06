import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import tag from 'clean-tag';
import NextLink from 'next/link';

import blacklist from './utils/blacklist';
import { customColor } from './utils/getColor';

const linkStyle = css`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}
  &:hover {
    ${customColor('hoverColor')};
  }
`;

const NomalLink = styled(tag.a)`
  ${linkStyle}
`;

const Link = ({ to, button, ...props }) => {
  if (to) {
    return (
      <NextLink href={to}>
        <NomalLink href={to} {...props} />
      </NextLink>
    );
  }
  return (
    <NomalLink
      target="_blank"
      { ...props }
    />
  );
};

Link.defaultProps = {
  blacklist,
  fontWeight: 'bold',
};

export default Link;
