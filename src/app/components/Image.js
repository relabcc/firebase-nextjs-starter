import styled from 'styled-components';
import { space, width, height, opacity } from 'styled-system';
import tag from 'clean-tag';

import blacklist from './utils/blacklist';

const Image = styled(tag.img)`
  ${space}
  ${height}
  ${width}
  ${opacity}
`;

Image.defaultProps = {
  blacklist,
  width: 1,
};

export default Image;
