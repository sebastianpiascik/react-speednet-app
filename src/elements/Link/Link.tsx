import React, { FC } from 'react';
import { LinkProps } from 'react-router-dom';

import { StyledLink } from './Link.styled';

type Props = LinkProps;

const Link: FC<Props> = (props) => <StyledLink {...props} />;

export default Link;
