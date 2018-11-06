import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  display,
  textAlign,
  position,
  letterSpacing,
  fontFamily,
} from 'styled-system';
import tag from 'clean-tag';

import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';

const Text = styled(tag)`
  margin-top: 0;
  margin-bottom: 0;
  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${letterSpacing}
  ${position}
  ${injectProps('verticalAlign')}
  ${injectProps('textTransform')}
`;

Text.defaultProps = {
  is: 'p',
  fontSize: '1em',
  lineHeight: 1.5,
  blacklist,
};

Text.inline = (props) => <Text is="span" {...props} />;
Text.bold = (props) => <Text fontWeight="bold" {...props} />;
Text.thin = (props) => <Text fontWeight="200" {...props} />;
Text.dosis = (props) => <Text fontFamily="Dosis" {...props} />;

range(1, 7).forEach((key) => {
  const h = `h${key}`;
  Text[h] = (props) => (
    <Text
      is={h}
      fontSize={`${1 + ((6 - key) * 0.125)}em`}
      {...props}
    />
  );
});

export default Text;
