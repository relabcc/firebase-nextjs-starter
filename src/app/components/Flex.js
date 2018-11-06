import {
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
} from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

export default styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;
