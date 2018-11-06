import { maxWidth } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';
import { containerWidth } from './ThemeProvider/theme';

const Container = styled(Box)`
  ${maxWidth}
`;

Container.defaultProps = {
  mx: 'auto',
  px: ['1em', null, '2em'],
  width: 1,
  maxWidth: containerWidth,
};

export default Container;
